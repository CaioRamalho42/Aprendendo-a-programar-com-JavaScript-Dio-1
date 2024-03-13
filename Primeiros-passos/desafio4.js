let pesoPessoa = 95;
let alturaPessoa = 1.73;

const imc = pesoPessoa / (alturaPessoa * alturaPessoa);

if (imc < 18.5) {
    console.log(imc.toFixed(2) + ' Você está abaixo do peso ideal.')
} else if (imc >= 18.5 && imc < 25) {
    console.log(imc.toFixed(2) + ' Você está com peso normal.')
} else if (imc >= 25 && imc < 30) {
    console.log(imc.toFixed(2) + ' Você está acima do peso ideal.')
} else if (imc >= 30 && imc < 40) {
    console.log(imc.toFixed(2) + ' Você está obeso.')
} else {
    console.log(imc.toFixed(2) + ' Obesidade grave')
}