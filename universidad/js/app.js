// Eliminar de Local Storage
localStorage.clear();

elemento = document.all;
elemento = document.all[10];
elemento = document.body;

let imagenes = document.images;
let imagenesArr = Array.from(imagenes);

console.log(elemento);
console.log(imagenesArr);

// expresiones regulares
expReg = /[0-9]/;
valor = 1992;

console.log(expReg.test(valor));
