const comprarBoleto = (function(){
  // privado
  let evento = 'Conferencia JS 2019';
  let precio = 200;
  const adquirirBoleto = () => {
    const elemento = document.createElement('p');
    elemento.textContent = `Comprando boleto para: ${evento}`;
    document.querySelector('#app').appendChild(elemento);
  }

  //publico
  return{
    mostrarBoleto: function(){
      adquirirBoleto();
    }
  }
})();

comprarBoleto.mostrarBoleto();
