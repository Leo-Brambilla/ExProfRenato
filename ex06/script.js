//6. Ler dois números inteiros e exibir o quociente e o resto da divisão inteira entre eles

let num = Number(prompt("Digite o numerador "))
let den = Number(prompt("Digite o denominador"))
let quociente = num/den
let resto = num%den

alert(`O quociente é ${quociente} e o resto ${resto}`)
