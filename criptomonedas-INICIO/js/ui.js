class Interfaz {

  constructor() {
    this.init();
  }
  init() {
    this.construirSelect();
  }

  construirSelect() {
    cotizador.obtenerMonedasAPI()
      .then(bichir => {
        const select = document.querySelector('#criptomoneda');
        // recorrer un objeto
        for(const [key,value] of Object.entries(bichir.monedas.Data) ){
          //creamos un elemento option, le pasamos un value, y lo vamos llenando asi el select
          const opcion = document.createElement('option');
          opcion.value = value.Symbol;
          opcion.appendChild(document.createTextNode(value.CoinName));
          select.appendChild(opcion);
        }
        })
  }
  mostrarMensaje(mensaje, clases) {
    const div = document.createElement('div');
    div.className = clases;
    div.appendChild(document.createTextNode(mensaje));

    const divMensaje = document.querySelector('.mensajes');
    divMensaje.appendChild(div);


    setTimeout(() => {
      document.querySelector('.mensajes div').remove();
    }, 3000 );
  }

  // Imprime el resultado de la cotizacion

  mostrarResultado(resultado,moneda,crypto){

    // En caso de un resultado anterior formulario
    const resultadoAnterior = document.querySelector('#resultado > div');

    if(resultadoAnterior){
      resultadoAnterior.remove();
    }

    const datosMoneda = resultado[crypto][moneda];

    let precio = datosMoneda.PRICE.toFixed(2),
        porcentaje = datosMoneda.CHANGEPCTDAY.toFixed(2),
        actualizado = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString('es-MX');

    // construir el template
    let templateHTML = `
      <div class="card bg-warning">
        <div class="card-body text-light">
          <h2 class="card-title">Resultado:</h2>
          <p>El precio de ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL} es de: $ ${precio}<p>
          <p>Variación último día: %${porcentaje}</p>
          <p>Última Actualización: ${actualizado}</p>
        </div>
      </div>
    `;

    this.mostrarOcultarSpinner("block");

    setTimeout(() => {
      // insertar el resultado
      document.querySelector('#resultado').innerHTML = templateHTML;

      this.mostrarOcultarSpinner('none');
    },3000);

  }

  // Mostrar el spiner de carga al enviar la cotizacion
  mostrarOcultarSpinner(vista) {
    const spinner = document.querySelector('.contenido-spinner');
    spinner.style.display = vista;
  }

}
