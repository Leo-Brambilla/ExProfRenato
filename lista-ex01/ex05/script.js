//5. Ler um número inteiro e exibir o seu sucessor.
let a = parseInt(prompt(`Digite o lado A do triângulo: `))
let b = parseInt(prompt(`Digite o lado B triângulo: `))
let c = parseInt(prompt(`Digite o lado C triângulo: `))

if(a==b && a==c && b==c){
    alert(`Triângulo Equilátero`)
}if(a==b && c!=b || c==b && a!=b){
        alert(`Triângulo Isóceles`)
    }if(a!=b && a!=c && b!=c){
        alert(`Triângulo Escaleno`)

    }

