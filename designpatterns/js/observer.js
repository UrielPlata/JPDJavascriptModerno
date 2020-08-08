// Tambien se le conoce como suscriptor-publicador

let observer = {
  obtenerOfertas: function(callback) {
    //se revisa que el callback sea una funcion, sí lo es porque es un metodo del suscriptor
    if(typeof callback === "function"){
      //de los subscribers del objeto(esto es el vendedor) en su posicion .lentgh (si tienes 0 pues sera 0),
      //le pasamos la funcion callback
      //entonces por ejemplo subscribers[0] = compartir: function(){...};
      this.subscribers[this.subscribers.length] = callback;
    }
  },
  cancelarOfertas: function(callback){
    for(let i = 0; i < this.subscribers.length; i++){
      if(this.subscribers[i] === callback) {
        delete this.subscribers[i];
      }
    }
  },
  publicarOferta: function(oferta) {
    //se revisa que haya al menos un suscriptor
    //por cada suscriptorse ejecuta lo siguiente
    for(let i = 0; i < this.subscribers.length; i++){
      //si el tipo de suscriptot es una funcion (lo que sera cierto porque asi se guardo en obtenerOfertas
      //cuando usamos ese metodo para registrar un suscriptor) ejecutamos la funcion ahi guardada pasandole
      //como parametro la oferta
      if(typeof this.subscribers[i] === "function"){
        //this.subscribers[i] <- es la funcion del usuario; compartir o interesa
        //llamamos esa funcion y la ejecutamos pasandole como parametro la oferta
        //recordamos que la oferta ya fue pasada como parametro al momento que creamos la funcion nuevoCurso o
        //nuevoAnuncio al momento de crear al vendedor
        this.subscribers[i](oferta);
        // console.log(oferta);
      }
    }
  },
  crear: function(objeto){
    //se recibe el objeto
    //para cada metodo de este objeto observer
    for(let i in this){
      //si el objeto tiene su propia metodo (lo que es true)
      // al objeto le pasamo el mismo metodos y sus subscribers lo inicializamos vacio
      if(this.hasOwnProperty(i)){
        objeto[i] = this[i];
        objeto.subscribers = [];
      }
    }
  }
}

//Vendedores
const udemy = {
  nuevoCurso: function() {
    const curso = 'Un nuevo curso de JavaScript!';
    //ejecutamos publicarOferta pasandole el text del curso
    this.publicarOferta(curso);
    //this aqui es el objeto con todos sus metodos (nuevo curso) y los metodos del observer mas sus subscribers
  }
}
const facebook = {
  nuevoAnuncio: function() {
    const oferta = 'Compra un celular';
    this.publicarOferta(oferta);
  }
}

// Crear los publicadores
// con observer y su metodo crear le pasamos un objeto
observer.crear(udemy);
observer.crear(facebook);

//creamos un suscriptor que son objetos con sus metodos
const juan = {
  compartir: function(oferta){
    console.log('Juan Dice: Excelente oferta! ' + oferta);
  }
};
const karen = {
  interesa: function(oferta){
    console.log('Karen Dice: Me interesa la oferta de ' + oferta);
  }
};

//utilizamos el metodo obtenerOfertas (porque ya lo "heredamos" al momento que se creo el vendedor)
// y le pasamos un metodo de juan como argumento
udemy.obtenerOfertas(juan.compartir);
udemy.obtenerOfertas(karen.interesa);
//de la funcion propia del vendedor nuevoCurso() la ejecutamos, al hacer esto se ejecuta internamente publicarOferta()
//porque ya tiene tambien esa funcion
udemy.nuevoCurso();
udemy.cancelarOfertas(karen.interesa);
udemy.nuevoCurso();
