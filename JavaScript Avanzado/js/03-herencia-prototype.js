// herencia  via prototypes
function Playlist(nombre) {
  this.nombre = nombre;
}
Playlist.prototype.play = function() {
  console.log(`Reproduciendo la playlist ${this.nombre}`);
}
Playlist.prototype.eliminar = function() {
  console.log(`Eliminando la playlist ${this.nombre}`);
}

// herencia
function Cancion(nombre, genero){
  Playlist.call(this,nombre);
  this.genero = genero;
}
// Heredar los metodos
Cancion.prototype = Object.create(Playlist.prototype);

const cancion = new Cancion('Nothing Else Matters','Heavy Metal');
const playlist = new Playlist('Rock 90s');

playlist.play();
cancion.play();
