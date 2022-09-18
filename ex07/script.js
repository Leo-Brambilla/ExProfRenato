/*7. Dado que a fórmula para conversão de Fahrenheit para Celsius é C = 5/9 (F – 32), ler um
valor de temperatura em Fahrenheit e exibi-lo em Celsius**/


let num = Number(prompt("Digite a temperatura em Fahrenheit: "))

let celsius = (num-32)*5/9


alert(`A temperatura é ${num}ºF ou  ${celsius}`)