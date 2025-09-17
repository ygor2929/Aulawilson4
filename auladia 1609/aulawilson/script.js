'use strict'; //ajuda evitar erros no JS
const inputNome = document.getElementById('nome');
//campo de txto do nome 
const inputAno =  document.getElementById('ano');
//campo númerico do ano 
const botaoCalcular =  document.getElementById('btn-calcular');
//botão de calcular idade 
const resultado =  document.getElementById('resultado')
//parágrafo onde aparece o resultado 


//Descobrir ano atual 
const anoAtual =  new Date().getFullYear();

//ler o que o usuario digitou 
botaoCalcular.addEventListener('click', () =>{
    const nome =  inputNome.value.trim();
    const anoNascStr = inputAno.value.trim();

    const anoNasc = Number(anoNascStr); //transformar em numero 
    //interger vai ver se ele é inteiro, 
    const anoValido =  Number.isInteger(anoNasc) && anoNasc >= 1900 && anoNasc <= anoAtual;

    if(!anoValido){
        resultado.textContent = 'PEEEEE, ANO INVALIDO,COLOCA OUTRO !!!!!';
        return; // sai da função sem continuar 
    }
    const idade = anoAtual - anoNasc;

})




