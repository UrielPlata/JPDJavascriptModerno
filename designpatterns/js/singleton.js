const alumnos = {
  // Todos los alumnos
  listaAlumnos : [],
  // obtener un alumno
  get: function(id) {
    return this.listaAlumnos[id];
  },
  // crear un alumno
  crear: function(datos) {
    console.log(datos);
    this.listaAlumnos.push(datos);
  },
  // listar todos los alumnos
  listado: function() {
    return this.listaAlumnos;
  }
}

const inforAlumno = {
  nombre:'Juan',
  edad:20
}
const inforAlumno2 = {
  nombre: 'Pablo',
  edad: 21
}

alumnos.crear(inforAlumno);
alumnos.crear(inforAlumno2);

const listado = alumnos.listado();

console.log(listado);

const alumno = alumnos.get(1);

console.log(alumno);
