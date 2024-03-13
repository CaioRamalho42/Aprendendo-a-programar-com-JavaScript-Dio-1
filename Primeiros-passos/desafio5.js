let precoDoProduto = 100.00;
const descontoDebito = (10 / 100) * precoDoProduto;
const desconto$Pix = (15 / 100) * precoDoProduto;
const parceladoVezes = precoDoProduto + (10 / 100 * precoDoProduto);
let metodoPagamento = 'Débito'

if (metodoPagamento === 'Débito') {
    console.log('Compra no valor de ' + (precoDoProduto - descontoDebito))
} else if (metodoPagamento === 'Dinheiro ou Pix') {
    console.log('Compra no valor de ' + (precoDoProduto - desconto$Pix))
} else if (metodoPagamento === '2X crédito') {
    console.log('Compra no valor de ' + precoDoProduto)
} else {
    console.log('Compra no valor de ' + parceladoVezes)
}