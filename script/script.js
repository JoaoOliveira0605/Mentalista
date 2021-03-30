
var numeroSecreto = parseInt(Math.random () *10)
alert (numeroSecreto)

var tentativas = 3

while (tentativas > 0){ 

  var chute = parseInt(prompt ("Chute um número de 0 a 10"))

  if (numeroSecreto == chute) {
    alert ("acertou")
    break   
  }else if (chute > numeroSecreto) {
    alert ("O chute é maior que o número secreto tente novamente")
    tentativas = tentativas - 1
  }else if (chute < numeroSecreto) {
    alert ("o chute é menor que o número secreto tente novamente ")
    tentativas = tentativas  - 1
  }

}

if (chute != numeroSecreto ) {
    alert ("acabou suas tentativas. O número secreto era: " + numeroSecreto)
}
