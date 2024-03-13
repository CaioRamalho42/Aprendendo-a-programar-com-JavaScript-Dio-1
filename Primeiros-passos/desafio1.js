const precoCombustivel = 5.83;
let gastoKmL = 15;
let distanciaKm = 372;

let litrosConsumidos = distanciaKm / gastoKmL;
let valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));