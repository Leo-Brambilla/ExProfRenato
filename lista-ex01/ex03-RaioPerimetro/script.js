// 3. Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma.

let circunferencia = Number(prompt("Digite o valor da circunferência"))
const pi = 3.1415
let area = circunferencia*pi
alert(`A área do circulo é ${area}!`)
let raio = circunferencia/2*pi
let perimetro = (2*pi)*raio
alert(`O perímetro do seu retângulo é ${perimetro}`)