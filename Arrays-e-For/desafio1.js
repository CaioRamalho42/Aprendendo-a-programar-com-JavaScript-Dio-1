const numero = 7;
for (let i = 1; i <= 10; i++) {
    console.log(i * numero);
} /*Tabuada*/

const listaNumeros = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i <= listaNumeros.length; i++) {
   const numero = listaNumeros[i];
    if (numero % 2 === 0) {
        console.log(numero);
    }
} /*Apenas números pares*/