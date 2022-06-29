/*window.onload - utilizado para que todo o código JS rode somente quando o HTML for renderizado*/
window.onload = function () {
  /* Para que ocorra a execução do alerta por meio do botão é necessário utilizar o DOM e identificar o objeto do botão, o mesmo deverá receber o atributo ID no HTML, e logo chamá-lo via função document.getElementById() - essa função chama o ID do objeto e em caso positivo retorna o objeto correspondente.*/
  var objBotao = document.getElementById('botao')
  /*Depois essa variável (objBotao) é alocada a classe/atributo onclick que logo é transformada em uma função*/
  objBotao.onclick = function () {
    window.alert('Alô, Mundo!')
  }
}
