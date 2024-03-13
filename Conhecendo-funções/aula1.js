function teste () {
    console.log('testando a função.')
}
teste();

function sayMyName (name) {
    console.log('Your name is:' + name)
}
sayMyName('Heisenberg');

function quadrado (valor) {     /*Função usada para calcular o quadrado de um número*/
    return valor * valor;
}
let quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);