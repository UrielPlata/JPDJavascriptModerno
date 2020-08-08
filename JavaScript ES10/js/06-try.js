// El try catch mejorado le podemos pasar ahora nuestros propios errores

try {
  throw new Error('Algo salio mal');
} catch(error) {
  console.log(error);
  console.log('Hubo un error bastante grave');
}
