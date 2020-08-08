const eventbrite = new EventBrite();
const ui = new Interfaz();

// listener al buscador
document.getElementById('buscador').addEventListener('click', (e) => {
  e.preventDefault();

  // leer texto del buscador y el select
  const textoBuscador = document.getElementById('evento').value;

  const categorias = document.getElementById('listado-categorias');
  const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;

  // Revisar que haya algo escrito en el buscador
  if(textoBuscador !== ''){
    eventbrite.obtenerEventos(textoBuscador,categoriaSeleccionada)
      .then(eventos => {
        console.log(eventos);
      })
  }else{
    ui.mostrarMensaje('Escribe algo en el buscador','alert alert-danger mt-4');
  }
})
