class Interfaz {
  constructor() {
    this.init();
    // Leer el resultado
    this.listado = document.getElementById('resultado-eventos');
  }
  // Metodo para cuando inicialice la app
  init() {
    this.imprimirCategorias();
  }
  // Imprimir Categorias
  imprimirCategorias() {
    const listaCategorias = eventbrite.obtenerCategorias()
      .then(categorias => {
        const cats = categorias.categorias.categories;
        // seleccionar el select de Categorias
        const selectCategoria = document.getElementById('listado-categorias');

        cats.forEach(cat => {
          const option = document.createElement('option');
          option.value = cat.id;
          option.appendChild(document.createTextNode(cat.name_localized));
          selectCategoria.appendChild(option);
        })
      })
  }

  // Metodo para imprimir mensajes: 2 parametros
  mostrarMensaje(mensaje,clases){
    const div = document.createElement('div');
    div.classList = clases;
    // agregar texto
    div.appendChild(document.createTextNode(mensaje));
    // buscar un padre
    const buscadorDiv = document.querySelector('#buscador');
    buscadorDiv.appendChild(div);
    // Borrar alert despues d 3 segundos
    setTimeout(() => {
      this.limpiarMensaje();
    },3000);
  }
  // Desaparece el mensaje en caso de que exista
  limpiarMensaje(){
    const alert = document.querySelector('.alert');
    if(alert){
      alert.remove();
    }
  }
}
