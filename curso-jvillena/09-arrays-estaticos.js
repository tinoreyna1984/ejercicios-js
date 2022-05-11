// array estatico en javascript

let arrEstatico = Object.freeze(new Array(10,20,30,40,50));
arrEstatico[0] = 90; // no genera cambio
console.log(arrEstatico);

/**
 * Por naturaleza, los arrays en JS son dinámicos. El tamaño cambia por cada elemento agregado.
 * Este caso estático frena todo cambio en el array.
 */

