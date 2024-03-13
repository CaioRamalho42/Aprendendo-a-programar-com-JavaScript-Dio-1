let nota1 = 8;
let nota2 = 8;
let nota3 = 8;

const mediaNota = (nota1 + nota2 + nota3) / 3;


if (mediaNota < 5) {
    console.log('Sua nota é ' + mediaNota + ' Só isso? Se lascou grandão.')
} else if (mediaNota >= 5 && mediaNota <= 7) {
    console.log('Sua nota é ' + mediaNota + ' Melhor começar a estudar logo, cabeçudo.') 
} else if (mediaNota > 7) {
    console.log('Sua nota é ' + mediaNota + ' Parabéns jovem, te vejo no próximo semestre.')
} else {
    console.log('Nota inválida.')
}

/* O símbolo && significa 'ou' */