let gasolinaL = 5.76;
let etanolL = 4.14;
let combustivelCarro = 'etanol';
const gastoPorKm = 21;
let distanciaViagem = 357;

let gastoViagemEmL = distanciaViagem / gastoPorKm;

if (combustivelCarro === 'gasolina') {
    console.log ('R$' + gastoViagemEmL * gasolinaL + ' o gasto em gasolina é esse.')
} else {
    console.log ('R$' + gastoViagemEmL * etanolL + ' o gasto em etanol é esse.')
}