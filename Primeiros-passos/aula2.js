const booleanOn = true;
const booleanOff = false;

let numero = 0; /*Checagem para ver se o número expresso é par */
let eNumeroPar = (numero % 2) === 0; /* O sinal de % pega o resto da divisão*/ /*= atribuição == igualdade === tipo*/
console.log(eNumeroPar);

if (numero ===0) {
    console.log('O número é inválido')
} else if (eNumeroPar) {
    console.log('par');                     
} else {
    console.log('impar')
};

/*if (!eNumeroPar) { /* O símbolo de ! significa negação
    console.log('impar');
} else significa 'se não'*/