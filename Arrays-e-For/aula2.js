const notas = []; /*Array começa vazio.*/

notas.push(5);
notas.push(7);
notas.push(2);
notas.push(4); /*O aluno vai inserindo os dados de notas.*/
notas.push(8);
notas.push(6);

let soma = 0; /*Valor 0 para iniciar.*/

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;    /*'soma + nota' para gerar o valor somado de todas as notas.*/
}

const media = soma / notas.length; /*Soma dividida pelo tamanho do array para dar a média de notas.*/
console.log(media);