/**
 * Um posto está vendendo combustíveis com a seguinte tabela de descontos:
 * Álcool = até 25L = 2% off
 *          acima de 25L = 4% off
 * Gasolina = até 25L = 3% off
 *           acima de 25L = 5% off 
 * Escreva um algoritimo que leia o número de litros vendidos e o tipo de combustível (A para Alcool e G para gasolina), calcule e imprima o valor a ser pagp pelo cliente.
 * Sabendo-se que o 1l de gasolina = R$2,70 e 1l de álcool = R$1,90
 */

const alcool = 1.90
const gasolina = 2.70
const combustivel = parseFloat(prompt(`Digite:\n1 - para alcool :\n2 - para gasolina `))
const qtd = (prompt(`Digite a quantidade em litros: `))  
    
if(combustivel == 1 && qtd <=25){    
    const total = (combustivel*qtd*0.98)
    alert(`O combustivel selecionado foi Alcool e o valor é R$${alcool.toFixed(2)} e o total é R$${total.toFixed(2)}`)
}else if (combustivel==1 && qtd >=26){    
    const total = combustivel*qtd*0.96    
    alert(`O combustível selecionadoGasolina e o valor é R$${gasolina.toFixed(2)} e o total é R$${total.toFixed(2)}`)
    
}else if(combustivel==2 && qtd <=25){
    const total = combustivel*qtd*0.97    
    alert(`O combustível selecionadoGasolina e o valor é R$${gasolina.toFixed(2)} e o total é R$${total.toFixed(2)}`)
    
}else if(combustivel==2 && qtd >25){
    const total = combustivel*qtd*0.95    
    alert(`O combustível selecionadoGasolina e o valor é R$${gasolina.toFixed(2)} e o total é R$${total.toFixed(2)}`)
}











