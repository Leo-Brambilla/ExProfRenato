/*8. Faça um algoritmo que calcule e apresente o valor do volume de uma lata de óleo, dado
seu raio e sua altura.**/
// V = h*π*r².
let raio = Number(prompt("Digite o valor do raio: "))
let altura = Number(prompt("Digite a altura: "))
const pi = 3.1415  
let volume = (raio**2)*altura*pi
alert(`O Volume é igual a ${volume}`)