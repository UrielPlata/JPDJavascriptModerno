const restaurApp = {};
restaurApp.platillos = [
  // platillo1 : {
  //   nombre:'Tacos',
  //   precio:19
  // },
  // platillo2 : {
  //   nombre:'Pzza',
  //   precio:29
  // },
  // platillo3 : {
  //   nombre:'Sandwich',
  //   precio:19
  // }
  {
    platillo: 'Pizza',
    precio: 25,
  },
  {
    platillo: 'Hamburguesa',
    precio:20,
  },
  {
    platillo: 'Hot Dog',
    precio:15,
  }
]

//Funciones

restaurApp.funciones = {
  ordenar: id => {
    // console.log(`Tu platillo ${restaurApp.platillos.platillo1.nombre} se esta preparando`);
    console.log(`Tu platillo ${restaurApp.platillos[id].platillo} se esta preparando`);
  },
  agregarPlatillo: (platillo, precio) => {
    const nuevo = {
      platillo,
      precio
    }
    restaurApp.platillos.push(nuevo);
  },
  mostrarMenu: platillos => {
    console.log(`Bienvenido a nuestro menú: `);
    platillos.forEach( (platillo,index) => {
      console.log(`${index} : ${platillo.platillo} $ ${platillo.precio}`);
    });
  }
}

console.log(restaurApp);
const { platillos } = restaurApp;
restaurApp.funciones.mostrarMenu( platillos );
restaurApp.funciones.ordenar(2);

restaurApp.funciones.agregarPlatillo( 'Pastel', 15 );
restaurApp.funciones.mostrarMenu( platillos );
