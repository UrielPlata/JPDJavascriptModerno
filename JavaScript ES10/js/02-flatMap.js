const productos = [
    { nombre: 'Producto 1', precio: 20},
    { nombre: 'Producto 2', precio: 30},
    { nombre: 'Producto 3', precio: 40}
];

// flatmap mapea un elemento y devuelve un nuevo arreglos
const resultado = productos.flatMap(producto => [producto.nombre,producto.precio]);

console.log(resultado);
