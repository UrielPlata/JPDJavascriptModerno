// This con implicit binding

const usuario = {
  nombre: 'Juan',
  edad: 20,
  presentacion() {
    console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad}`);
  },
  mascota: {
    nombre: 'Hook',
    edad: 1,
    presentacion() {
      console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad}`);
    }
  }
}

usuario.presentacion();
usuario.mascota.presentacion();

// This con explicit binding

function persona(el1,el2) {
  console.log(`Hola soy ${this.nombre} y me gusta el ${el1} y ${el2}`);
}
const informacion = {
  nombre: 'Uriel',
  trabajo: 'Programador'
}
const generosMusicales = ['Lila Downs','Katy Perry'];

// call y aply existen en todas las funciones
// Explicit binding con call, cuando pasas el arreglo debes colocar todas las posiciones
persona.call(informacion, generosMusicales[0],generosMusicales[1]);

// explicit binding con .apply, si toma un arreglo completo
persona.apply(informacion,generosMusicales);

// explicit binding .bind
const nuevaFn = persona.bind(informacion, generosMusicales[0],generosMusicales[1]);
nuevaFn();


// New binding

function Automovil(modelo, color) {
  this.modelo = modelo;
  this.color = color;
}

const auto = new Automovil('Camaro','Negro');
console.log(auto);


// Window binding
function obtenerAuto(){
  console.log(`Mi auto es color ${this.color}`);
}
window.color = 'Negro';

obtenerAuto();

//Event loop
console.log('Yo me mostrare primero');

setTimeout(function(){
  console.log('Yo me mostrare segundo');
},0);

console.log('Yo me mostrare tercero');

setTimeout(function(){
  console.log('Yo me mostrare cuarto');
},0);

new Promise(function(res){
  res('Yo soy un promise')
}).then(console.log);

console.log('Yo me mostrare quinto');

// El settimeout se ejecuta despues en el queue en task queue
// El promise se ejecuta antes que el task queue en el job queue
