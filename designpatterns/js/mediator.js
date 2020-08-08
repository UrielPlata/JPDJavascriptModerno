// Es un intermediario que se comunica con distintos tipos de objetos

const Vendedor = function(nombre) {
  this.nombre = nombre;
  this.sala = null;
}
const Comprador = function(nombre){
  this.nombre = nombre;
  this.sala = null;
}

Vendedor.prototype = {
  oferta: function(articolo,precio){
    console.log(`Tenemos el siguiente articolo ${articolo}, iniciamos en ${precio}`);
  },
  vendido: function(comprador){
    console.log(`Vendido a ${comprador} (Sonido de mazo)`);
  }
}

Comprador.prototype = {
  oferta: function(mensaje,comprador){
    console.log(`${comprador.nombre} : ${mensaje} `);
  }
}




const Subasta = function(){
  let compradores = [];

  return {
    registrar: function(usuario) {
      compradores[usuario.nombre] = usuario;
      usuario.sala = this;
    }
  }
}

// Instanciar las clases
const juan = new Comprador("Juan");
const pablo = new Comprador("Pablo");
const karen = new Comprador("Karen");

const vendedor = new Vendedor("Vendedor");

const subasta = new Subasta();
subasta.registrar(juan);
subasta.registrar(pablo);
subasta.registrar(karen);

vendedor.oferta('Mustang 1986',3000);
juan.oferta(3500,juan);
pablo.oferta(4500,pablo);
karen.oferta(5500,karen);
vendedor.vendido(karen.nombre);
