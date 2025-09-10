// Criar uma variável 'nome' com seu nome e mostrar 'Olá,<nome>!.'
// let nome = 'Ygor';
// console.log('Olá,' + nome)
// console.log(`Olá,${nome}`)


// variavel nome,idade,cidade - 'Meu nome é 'nome', eu tenho 'idade' anos e moro em 'cidade'
// let nome = 'Ygor';
// let idade = '23+1';
// let cidade = 'Sarandi';
// console.log(`Meu nome é ${nome}, eu tenho ${idade} anos e moro em ${cidade}`)


// imprimindo tipos de dados 
// EX1
// const numero = 123;
// const numero2 = 123;
// // const naoEhNumero = '123';
// //console.log(numero + naoEhNumero); não soma,só add na frente 
// // console.log(numero - naoEhNumero); //Ele subtrai
// // console.log(typeof naoEhNumero);
// // console.log(typeof numero);
// // console.log(typeof true);
// // console.log(typeof '');
// console.log(numero + numero2);

// EX2
// const num1 =  7;
// const num2 =  '11';
// console.log(num1 == num2);

// const num3 =  7;
// const num4 =  '7';
// console.log(num3 == num4);

// const num5 =  7;
// const num6 =  '7';
// console.log(num5 === num6);


// Crie 5 variaveis com tipos diferentes.Em seguida imprima no console os tipos delas.

// let number1 = 12;
// console.log(typeof number1 );

// let sting1 = 'Olá,Ygor';
// console.log(typeof sting1);

// let boolean1 = true;
// console.log(typeof boolean1);

// let object1 = [1,'oi',false];
// console.log(typeof object1)

// let semValor;
// console.log(semValor);

// EX3
// const idade =  18;

// if (idade >= 18){
//     console.log('É maior de idade')
// } else {
// console.log('É menor de idade')
// }

// exercicio
// const votar = 69;

// if (votar < 16){
//     console.log('Não pode votar')
// }else if (votar >= 16 && votar < 18){
// console.log('Não é obrigatorio votar,mas pode votar')
// }else if(votar >= 18 && votar < 70){
//     console.log('É obrigatorio votar')
// }else{
//     console.log('Não é obrigatorio,mas pode votar')
// }

// ver se o numero é par ou impar 
// const numero = 12;
// if (numero % 2 === 0) {
//     console.log('É par')
// }else{
//     console.log('É impar')
// }

// criar variavel com valor .Condiçãp se o valor > 100 desconto de 10% senão decaonto de 5%.Valor final com 2 casas decimais 
// const valor = 2000;
// if (valor > 100) {
//     desconto = valor * 0.10;
// }else{

// desconto = valor * 0.05;
// }
// console.log(`O desconto é de : R$ ${desconto.toFixed(2)}`)

// ex4
// Criar uma variavel mostrando o dia 3.Mostre dom=1 seg=2...
const dia =  10;
let nomeDia ;
switch(dia){
    case 1:
        nomeDia = "Domingo";
        break;
    case 2:
        nomeDia = "Segunda";
        break;
    case 3:
         nomeDia = "Terça";
         break;
    case 4:
        nomeDia = "Quarta";
        break;
    case 5:
        nomeDia = "Quinta";
        break;
    case 6:
         nomeDia = "Sexta";
         break;
    case 7:
         nomeDia = "Sábado";
        break; 
        
        default: nomeDia = 'Dia invalido'
        
}
console.log(nomeDia);



















