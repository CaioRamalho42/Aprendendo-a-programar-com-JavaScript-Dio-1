console.log(); /*'console' é um objeto. O '.log' é um método do objeto console.*/
let thomas = 'teste'; /*variável com um valor literal*/
const data = {
    name: 'Charlie Brown',/*O objeto 'data' tem a 'coleção de dados' 'name' e 'age', também chamadas de chaves, duas.*/
    age: 36,
    
    describe : function () { /*Função dentro de objeto é chamada de 'método'.*/
        console.log('My name is ${this.name} and I am ${this.age}'); /*'this' é uma palavra genérica para simbolizar o objeto quando está em uma função dentro do próprio objeto.*/
    },
};
console.log(data.name);
console.log(data.age);      /* Formas de acessar as informações, a 'coleção de dados' dentro do objeto 'data'. */
console.log(data);

    /*Charlie Brown
    36
    { name: 'Charlie Brown', age: 36 } --> informações exibidas ao executar o programa.*/

data.height = 1.68; /*--> Incremento de chave com respectivo valor ao objeto.*/