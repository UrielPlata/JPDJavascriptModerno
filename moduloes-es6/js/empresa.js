import{Cliente} from './cliente.js';

export const nombreEmpresa = 'Udemy';
export let ahorro = 200000000;
export const categoria = 'Aprendizaje';

export function mostrarInformacion(nombre, ahorro, categoria){
  return `Cliente: ${nombre} - Ahorro ${ahorro} - Categoria: ${categoria}`;
}

// importr clase de otra y extenderla y luego exportarla
export class Empresa extends Cliente{
  constructor(nombre,ahorro,categoria){
    super(nombre,ahorro);
    this.categoria = categoria;
  }
  mostrarInformacion(){
    return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro} - Categoria: ${this.categoria}`;
  }
}
