import {nombreCliente, ahorro, mostrarInformacion, Cliente} from './cliente.js';
import {nombreEmpresa, ahorro as ahorroEmpresa, categoria, mostrarInformacion as informacionEmpresa, Empresa} from './empresa.js';

// console.log(nombreCliente);
// console.log(ahorro);
//
// const info = mostrarInformacion(nombreCliente,ahorro);
// console.log(info);
//
// const infoEmpresa = informacionEmpresa(nombreEmpresa,ahorroEmpresa,categoria);
// console.log(infoEmpresa);

// let cliente = new Cliente(nombreCliente, ahorro);
// console.log(cliente.mostrarInformacion());

let empresa = new Empresa(nombreEmpresa, ahorroEmpresa, categoria);
console.log(empresa.mostrarInformacion());
