const cotizador = new API('2bf15790d6b52333bf4b22ac23cbcfd664ec78f4d29767abc3800d6d6214654a');
const ui = new Interfaz();



const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit',(e) => {
  e.preventDefault();

  const monedaSelect =  document.querySelector('#moneda');
  const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

  const criptoMonedaSelect =  document.querySelector('#criptomoneda');
  const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;

  if(monedaSeleccionada === '' || criptoMonedaSeleccionada === ''){
    ui.mostrarMensaje('Ambas Campos son Obligatorios','alert bg-danger text-center');
  } else {
    // todo bien consultar la api
    cotizador.obtenerValores(monedaSeleccionada,criptoMonedaSeleccionada)
      .then(data => {
        ui.mostrarResultado(data.resultado.RAW,monedaSeleccionada,criptoMonedaSeleccionada);
      })
  }
})
