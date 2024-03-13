class person {
    name;
    age;
    describe(name, age) {
        console.log('My name is' + '${this.name}' + 'and I am' + '${this.age}' + 'years old')
    }

    constructor(name, age) {
        this.name = 'Unknown';/*Constructor é método especial executado no momento em que a classe é instanciada, além disso os atributos da classe são definidos dentro deste método. */
        this.age = 'Unknown';
    }
}

const thomas = new person();
thomas.name = 'Thomas B Jordan'; /*Classe é a definição do que deve ser o objeto, instância é uma ocorrência do objeto.*/
thomas.age = 36;

const charlie = new person();
charlie.name = 'Charlie B Junior';
charlie.age = 29;

console.log(thomas, charlie)/*person { name: 'Thomas B Jordan', age: 36 } person { name: 'Charlie B Junior', age: 29 }*/