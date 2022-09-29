let nome = prompt('Bem vindo a calculadora de IMC, digite nome para começar')
let peso=parseFloat(prompt(`Digite seu peso em Kg: `))
let altura=parseFloat(prompt(`Digite sua altura em Metros`))
let imc=peso/(altura**2)
if(imc<18.5){
   alert(`Olá ${nome}, seja bem vindo, você tem ${altura} metros de altura e pesa ${peso}kg seu imc indica que está abaixo do peso!`)
}else if(imc>=18.5 && imc<25)
{   
    alert(`Olá ${nome}, seja bem vindo, você tem ${altura} metros de altura e pesa ${peso}kg seu imc indica que está com peso normal!`)} 
else if(imc>=25 && imc<=30)
{  
    alert(`Olá ${nome}, seja bem vindo, você tem ${altura} metros de altura e pesa ${peso}kg seu imc indica que está acima do peso!`)
}
else {
    alert(`Olá ${nome}, seja bem vindo, você tem ${altura} metros de altura e pesa ${peso}kg seu imc indica que está com obesidade!`)
}