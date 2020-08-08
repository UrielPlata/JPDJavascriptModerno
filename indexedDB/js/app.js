let DB;

const form = document.querySelector('form'),
nombreMascota = document.querySelector('#mascota'),
nombreCliente = document.querySelector('#cliente'),
telefono = document.querySelector('#telefono'),
fecha = document.querySelector('#fecha'),
hora = document.querySelector('#hora'),
sintomas = document.querySelector('#sintomas'),
citas = document.querySelector('#citas'),
headingAdministra = document.querySelector('#administra');

// Esperar por el DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  // crear la base de datos
  let crearDB = window.indexedDB.open('citas',1);

  // Si hay un error enviarle a la consola
  crearDB.onerror = function() {
    console.log('Hubo un error');
  }
  //Si todo esta bien entonces muestra en consola, y asignar la base de datos
  crearDB.onsuccess = function() {
    // console.log('Todo listo!!');

    DB = crearDB.result;

    mostrarCitas();
  }

  // Este metodo solo corre una vez y es ideal para crear el Schema
  crearDB.onupgradeneeded = function(e) {
    // El evento es la misma base de datos
    let db = e.target.result;

    // definir el objecstore, toma 2 parametros el  nombre de la base de datos y segundo las opciones
    let objectStore = db.createObjectStore('citas', { keyPath: 'key', autoIncrement: true } );

    // Crear los indices y campos de la base de datos, createIndex : 3 parametros, nombre,
    // keypath y opciones
    objectStore.createIndex('mascota','mascota', { unique:false } );
    objectStore.createIndex('cliente','cliente', { unique:false } );
    objectStore.createIndex('telefono','telefono', { unique:false } );
    objectStore.createIndex('fecha','fecha', { unique:false } );
    objectStore.createIndex('hora','hora', { unique:false } );
    objectStore.createIndex('sintomas','sintomas', { unique:false } );
  }
  // cuando el formulario se envia
  form.addEventListener('submit',agregarDatos);

  function agregarDatos(e) {
    e.preventDefault();

    const nuevaCita = {
      mascota : nombreMascota.value,
      cliente : nombreCliente.value,
      telefono : telefono.value,
      fecha : fecha.value,
      hora : hora.value,
      sintomas : sintomas.value
    }

    // en indexedDB se utilizan las transacciones
    let transaction = DB.transaction(['citas'],'readwrite');
    let objectStore = transaction.objectStore('citas');

    let peticion = objectStore.add(nuevaCita);

    console.log(peticion);

    peticion.onsuccess = () => {
      form.reset();
    }
    transaction.oncomplete = () => {
      console.log('Cita agregada');
      mostrarCitas();
    }
    transaction.onerror = () => {
      console.log('Hubo un error!');
    }
  }

  function mostrarCitas() {
    //limpiar las citas anteriores
    while(citas.firstChild) {
      citas.removeChild(citas.firstChild);
    }
    //creamos un objectStore
    let objectStore = DB.transaction('citas').objectStore('citas');

    // esto retorna una peticion
    objectStore.openCursor().onsuccess = function(e) {
      // Cursor se va a ubicar en el registro para acceder a los datos
      let cursor = e.target.result;

      if(cursor) {
        let citaHTML = document.createElement('li');
        citaHTML.setAttribute('data-cita-id',cursor.value.key);
        citaHTML.classList.add('list-group-item');

        citaHTML.innerHTML = `<p class="font-weight-bold">Mascota: <span class="font-weight-normal">${cursor.value.mascota}</span></p>
        <p class="font-weight-bold">Cliente: <span class="font-weight-normal">${cursor.value.cliente}</span></p>
        <p class="font-weight-bold">Teléfono: <span class="font-weight-normal">${cursor.value.telefono}</span></p>
        <p class="font-weight-bold">Fecha: <span class="font-weight-normal">${cursor.value.fecha}</span></p>
        <p class="font-weight-bold">Hora: <span class="font-weight-normal">${cursor.value.hora}</span></p>
        <p class="font-weight-bold">Sintomas: <span class="font-weight-normal">${cursor.value.sintomas}</span></p>`;

        citas.appendChild(citaHTML);

        cursor.continue();
      }
    }
  }
})
