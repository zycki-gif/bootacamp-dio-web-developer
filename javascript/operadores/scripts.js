function numeros(num1, num2) {
  const fraseSoma = mkFraseSoma(num1, num2)
  const fraseComparar = mkFraseComparar(num1, num2)

  return `${fraseSoma} ${fraseComparar}`
}

function mkFraseSoma(num1, num2) {
  let fraseSoma = `Os números ${num1} e ${num2}`
  let simNao = 'não'

  if (num1 === num2) {
    simNao = ''
  }

  return `${fraseSoma} ${simNao} são iguais.`
}

function mkFraseComparar(num1, num2) {
  const soma = num1 + num2
  let comparaDez = 'menor'
  let comparaVinte = 'menor'

  if (soma > 10) {
    comparaDez = 'maior'
  }

  if (soma > 20) {
    comparaVinte = 'maior'
  }

  return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`
}

console.log(numeros(3, 3))
