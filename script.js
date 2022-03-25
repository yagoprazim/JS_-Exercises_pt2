 // LISTA DE EXERCÍCIOS - JAVASCRIPT

                                    // ESTRUTURA SEQUENCIAL:

// 1.	Crie um script que leia o nome da pessoa e mostre o nome dela em um alert() e no console 

// let nome = prompt("Escreva seu nome")
// alert("Seu nome é: " + nome)
// console.log(nome)

// 2.	Crie um script que leia do usuário dois números e mostre a s desses dois números.

// let num1 = parseInt (prompt("Escreva o primeiro número"))
// let num2 = parseInt (prompt("Escreva o segundo número"))
// console.log (num1 + num2)

// 3.	Crie um script que leia duas notas do usuário e calcule a média do aluno.

// let nota1 = parseInt(prompt("Escreva a sua 1ª nota"))
// let nota2 = parseInt(prompt("Escreva a sua 2ª nota"))
// console.log ((nota1 + nota2)/2)

// 4.	Crie um programa leia o ano em que o usuário nasceu e diga a idade atual dele.

// let nascimento = prompt("Digite o seu ano de nascimento")
// console.log(2022 - nascimento) 

// 5.	Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

// let granaHora = prompt("Quanto você ganha em dinheiro por hora?")
// let horaMes = prompt("Qual a sua carga horária de trabalho mensal?")
// console.log (granaHora * horaMes)

// 6.	Faça um script que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.    C = 5 * ((F-32) / 9).

// let Fah = prompt("Diga um grau de temperatura em Fahrenheit")
// console.log (C = 5 * ((Fah-32) / 9))


                                    // ESTRUTURA DE DECISÃO:

// 1.	Faça um Programa que peça dois números e imprima o maior deles.

// let num1 = parseFloat(prompt("Digite o primeiro número"))
// let num2 = parseFloat(prompt("Digite o segundo número"))
//     if (num1 > num2){
//         console.log("num1 é o maior: " + num1)
//     }else {
//         console.log("num2 é o maior: " + num2)
//     }

// 2.	Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.

// let valor = prompt("Digite um número")
//     if(valor < 0){
//         console.log("O número é negativo")
//     }else{
//         console.log("O número é positivo")
//     }

// 3.	Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.

// let genero = prompt("Digite o seu genero").toLocaleLowerCase()
//     if(genero === "m"){
//         console.log("Masculino")
//     }else if(genero === "f"){
//         console.log("Feminino")
//     }else{
//         console.log("Sexo Inválido")
//     }

// 4.	Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar: 
// a)	A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// b)	A mensagem "Reprovado", se a média for m do que sete;
// c)	A mensagem "Aprovado com Distinção", se a média for igual a dez.

// let nota1 = parseInt(prompt("Digita a sua primeira nota"))
// let nota2 = parseInt(prompt("Digita a sua segunda nota"))
// let media = ((nota1 + nota2)/2)
//   console.log(media)
//     if(media === 10){
//         console.log("Aprovado com distinção")
//     }else if(media < 7){
//         console.log("Reprovado")
//     }else if(media >= 7){
//         console.log("Aprovado")
//     }

// 5.	Faça um Programa que leia três números e mostre o maior e o m deles.
// let num1 = parseInt(prompt("Digite o primeiro número"))
// let num2 = parseInt(prompt("Digite o segundo número"))
// let num3 = parseInt(prompt("Digite o terceiro número"))
//     let nMaior = Math.max(num1,num2,num3)
//     let nm = Math.min(num1,num2,num3)
//         console.log("O maior número é: " + nMaior + ", o m é: " + nm)

// 6.	Faça um Programa que leia dois números e mostre se ele é par ou ímpar.
// let num = parseInt(prompt("Digite um n"))
//     if ( num % 2 === 0 ){
//         console.log("Este número é par")
//     }else {
//         console.log("Este número é impar")
//     }


                                    // ESTRUTURAS DE REPETIÇÃO:

// 1.	Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

// while (true) {
//   let nota = parseFloat(prompt("Por favor, digite a sua nota"));
//   if (nota >= 0 && nota <= 10) {
//     console.log(nota);
//   break;
// } else {
//      alert("A nota está inválida, por favor, digite uma nota entre 0 e dez");
//     }
//   }

// 2.	MOSTRAR DIFERENÇA ENTRE VAR E LET

// VAR - Declara variáveis com um escopo 'GLOBAL'.
// LET - Declara variáveis com um escopo de 'BLOCO', 'INSTRUÇÃO' ou 'EXPRESSÃO'.
// Obs.: O termo "escopo" se refere ao "local" onde a variável existe, sendo assim, a grande diferença entre eles é porque o VAR é mais "abrangente" por declarar de forma global, enquanto que o LET é mais "restrito".

// 3.	Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

// do {
//   var nome = prompt("Escreva o seu nome");
//   var senha = prompt("Escreva a sua senha");
//     if (nome == senha) {
//     alert("Por favor, a senha deve ser diferente do nome!");
//       }
//     } while (nome == senha);

// 4.	Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. 

// for(let i = 1; i <= 20; i++) {
// console.log(i);
//   }

// 5.	Faça um programa que leia 5 números e informe o maior número.

// let maior = 0;
// for (let i = 0; i < 5; i++) {
//   let n = parseInt(prompt("Por favor, digite um número"));
//   if (n > maior) {
//     maior = n;
//   }
// }
//   console.log(maior);

// 6.	Faça um programa que leia 5 números e informe a s e a média dos números.

// var s = 0;
// let media = 0;
//   for (let i = 0; i < 5; i++) {
//   let n = parseInt(prompt("Por favor, digite um número"));
//   s += n;
//   }
//   media = s/5;
//    console.log("O cálculo da s é: " + s);
//    console.log("O cálculo da média é: " + media);

// 7.	Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.

// for(let i = 1; i <= 50; i++) {
// if (i%2 != 0) {
//     console.log(i);
//   }
// }
  
// 8.	Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve informar de qual n ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo:
// a.	Tabuada de 5:
// b.	5 X 1 = 5
// c.	5 X 2 = 10
// d.	...
// e.	5 X 10 = 50

// let nTab = parseInt(prompt("Digite um número para ver sua tabuada")) 
// for(let i = 1; i <= 10; i++) {
//   console.log(nTab + " x " + i + " = " + (nTab * i));
// }

                                    //DESAFIO FIZZBUZZ:

// 9.	Dado um número n, para cada número entre 0 e 100, imprime um valor por linha da seguinte maneira:
// Se i for múltiplo de 3 e 5, imprima o FizzBuzz.
// Se i for múltiplo de 3 (mas não de 5), imprima o Fizz.
// Se i for múltiplo de 5 (mas não de 3), imprima o Buzz.
// Se i não for múltiplo de 3 ou 5, imprima o valor de i.

// for(let i = 0; i <= 100; i++) {
// if (i%3 == 0 && i%5 == 0 && i != 0){
//     console.log(i + " - FizzBuzz");
// }else if (i % 3 == 0 && i != 0){
//     console.log(i + " - Fizz");
// }else if (i % 5 == 0 && i != 0){
//     console.log(i + " - Buzz");
// }else{
//     console.log(i);
//     }
//   }

                                    //LISTAS:

// 1.	Faça um Programa que leia um vetor de 5 números inteiros e mostre-os.

// let mylist = [9,11,20,23,25];
// for(let i = 0; i < mylist.length; i++){
// console.log(mylist[i]);
// }

// 2.	Faça um Programa que leia um vetor de 10 números reais e mostre-os na ordem inversa.

// let ns =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let ordemInversa = [];
//   for(let i = ns.length - 1; i >= 0; i--){
//   ordemInversa.push(ns[i]);
// }
//   console.log(ordemInversa);

// 3.	Faça um Programa que leia 4 notas, mostre as notas e a média na tela.

// let notas = [];
// let s = 0;
// let media = 0;
//   for (let i = 0; i < 4; i++) {
//   notas.push(parseFloat(prompt("Digite as suas notas, uma por vez!")));
//   s += notas[i];
// }
//     media = s / 4;
// alert("As suas notas são: " + notas + " e o cálculo da média delas é de: " + media);

// 4.	Faça um Programa que leia um vetor de 10 caracteres, e diga quantas consoantes foram lidas. Imprima as consoantes.

// let lista = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
// console.log(lista.length);
//  let consoantes = 0;
//  for(let i = 0; i < 10; i++){
//    if( lista[i] !== 'a' && lista[i] !== 'e' && lista[i] !== 'i' && lista[i] !== 'o' && lista[i] !== 'u'){
//     consoantes += 1;
//     console.log("Consoante: "+ lista[i]);
//     }
//  }
// console.log("O array tem: " + consoantes + " consoantes.");


// 5.	Faça um Programa que leia 20 números inteiros e armazene-os num vetor. Armazene os números pares no vetor PAR e os números IMPARES no vetor ímpar. Imprima os três vetores.

// let lista = [];
// let par = [];
// let impar = [];
// for(let i = 0; i < 20; i++){
//     lista[i] = parseInt(prompt("Digite o "+ (i+1) +"º número:"));
//     }
//     for(let i = 0; i < 20; i++){
//     if(lista[i] %2 == 0){
//     par[i] = lista[i];
//     }else{
//     impar[i] = lista[i];
//         }
//     }
// console.log(impar);
// console.log(par);
// console.log(lista);

// 6.	Faça um Programa que peça as quatro notas de 10 alunos, calcule e armazene num vetor a média de cada aluno, imprima o número de alunos com média maior ou igual a 7.0.

// lista1 = [a1=[], a2=[], a3=[], a4=[], a5=[], a6=[], a7=[], a8=[], a9=[], a10=[]];
// lista2 = [];
// numAverageGreater7 = 0;
// for (i = 0; i < 10; i++){
// for (j = 0; j < 4; j++){
//     a = i + 1;
//     b = j + 1;
//     let nota = parseFloat(prompt("Aluno " + a + ", sua " + b + "ª nota foi: "))
//     lista1[i].push(nota);
//         }
//     average = (lista1[i][0] + lista1[i][1] + lista1[i][2] + lista1[i][3])/4;
//     lista2[i] = average;
// if(average >= 7){
// numAverageGreater7++;
//     }
// }
// console.log(numAverageGreater7);
// infinite = 1;

// 7.	Faça um Programa que leia um vetor de 5 números inteiros, mostre a s, a multiplicação e os números.

// let vetor = [10, 7, 5, 10, 7]
// let s = 0;
// let mult = 1;
//  for (let i = 0; i < vetor.length; i++){
//  s += vetor[i]
//  mult *= vetor[i]
// }
// console.log(s)
// console.log(mult)

// 8.	Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo vetor. Imprima a idade e a altura na ordem inversa a ordem lida.

// let idade = [];
// let altura = [];
// for(let i = 0; i < 5; i++){
//  idade[i] = parseFloat(prompt("Digite a sua idade:"));
//  altura[i] = parseFloat(prompt("Digite a sua altura:"));
//  }
// console.log(idade);
// console.log(altura);
// for(let j = idade.length-1; j >= 0; j--){
// console.log(idade[j]);
// console.log(altura[j]);
//  } 

// 9.	O instrutor deve elaborar esse programa.
// Cria um script que receba o nome de várias pessoas até o usuário desejar parar o programa, bote o nome dessas pessoas em uma lista e sorteie uma dessas pessoas para pagar o churrasco. 
// O output do código deve ter o seguinte formato: 
// “{nomeDaPessoa} foi sorteada para pagar o churrasco!”

// lista = [];
// pare = false;
// temp = 0
// while (pare == false) {
// if (temp == 0) {
// nome = prompt("Digite o seu nome");
// }
// else {
// nome = prompt("Digite o seu nome ou digite 'pare', fechar a lista de sorteios");
// }
// if (temp > 0 && nome == "pare") {
// pare = true;
// }
// else {
// lista.push(nome);
// temp++;    
//     }
// }
// a = temp - 1;
// const rndInt = Math.floor(Math.random() * a) + 1;
// sorteio = rndInt - 1;
// alert(lista[sorteio] + " foi sorteada para pagar o churrasco");


// 10.	Cria um script que receba o nome de várias pessoas até o usuário desejar parar o programa, bote o nome dessas pessoas em uma lista e sorteie duas dessas pessoas para te dar um presente.
// As pessoas não podem ser repetidas.
// O output do código deve ter o seguinte formato:
// “{nomeDaPessoa} e { nomeDaOutra } foram sorteados para te dar um presente!”

// let nP = [];
// let i = 0;
// let n1 = 0
// let n2 = 0
// while (true) {
//   nP.push(prompt("Digite seu nome ou 0 para parar"));
//   if (parseInt(nP[i]) === 0) {
// nP.pop(nP[i]);
//  break;
// }
//   i++;
// }
// n1 = Math.floor(Math.random() * nP.length);
// nP.pop(nP[n1]);
// n2 = Math.floor(Math.random() * nP.length);
// console.log(nP[n1] + " e "+ nP[n2] + " foram sorteadas para te dar um presente.");
 


                                    //FUNÇÕES:

// 1.	Crie uma função que receba um inteiro e diga se ele é “Par” para números pares ou “Ímpar” para números impares.

// function parOuImpar(n) {
// if (parseInt(n) % 2 === 0) {
//  console.log("O número " + n + " é par");
// } else {
//  console.log("O número " + n + " é ímpar");
// }
//   }
// parOuImpar(77);
//  parOuImpar(2);
//   parOuImpar(14);

// 2.	Crie uma função que receba dois números e retorne o resultado da s entre eles. 

// function s(n1, n2) {
// return parseInt(n1) + parseInt(n2);
//   }
// var r= s(55, 13);
// console.log("O resultado da s é: " + r);

// 3.	Crie uma função que receba um número e retorne o oposto desse número. Exemplos de retornos:
// negativo(1) // return -1
// negativo(-5) // return 5

// function o (n) {
// if (parseInt(n) > 0) {
// return (n += -2 * n);
// } else {
// return (n -= 2 * n);
//  }
// }
// console.log(o(50));
// console.log(o(75));
// console.log(o(-25));

// 4.	Crie uma função que receba um array de números, e retorne a suma de todos os números positivos desse array. Exemplos de retornos:
// sDePositivos([1,-4,7,12]) // 1 + 7 + 12 = 20 -> return 20

// function sP(n) {
// let s = 0;
// for (i = 0; i < 4; i++) {
// if (parseInt(n[i]) > 0) {
// s += parseInt(n[i]);
//     }
// }
// return ("A soma dos números é: " + s);
//   }
// console.log(sP([10, 6, 5]));

// 5.	Dado um array de números inteiros, crie uma função que retorne o valor do menor número desse array. Exemplos de outputs:
// Dado [34, 15, 88, -2] sua solução deve retornar o -2
// Dado [34, -500, -1, 100] sua solução deve retornar o -345

// function menor(n){
// let m = n[0];
// for (i = 0; i < 4; i++) {
// if (parseInt(n[i]) < m) {
// m = parseInt(n[i]);
//     }
// }
// return ("O m número é: " + m);
//   }
// console.log(menor([25, 40, -10, -5]));
// console.log(menor([23, -20, -4, 13]));








