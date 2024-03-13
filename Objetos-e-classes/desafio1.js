class Carro {
    marca;
    cor;
    gastoPorKm;

    constructor (marca, cor, gastoPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = gastoPorKm;
    }

    calcularGastoViagem(distanciaKM, precoCombustivel) {
        return distanciaKM * this.gastoPorKm * precoCombustivel;
    }
}

const Uno = new Carro('Fiat', 'Vermelho', 1/13.9);
const Kombi = new Carro('Volkswagen', 'Branco', 1/8.4);
const GolQuadrado = new Carro('volkswagen', 'Preto', 1/14);