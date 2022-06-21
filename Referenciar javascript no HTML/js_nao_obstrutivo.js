/*window.onload - utilizado para que todo o código JS rode somente quando o HTML for renderizado*/
window.onload = function () {
  /* Objeto botao do HTML é transformado, no arquivo JS, em uma variável através da função document.getElementById()*/
  var objBotao = document.getElementById('botao')
  /*Depois essa variável é alocada a classe/atributo onclick que logo é transformada em uma função*/
  objBotao.onclick = function () {
    window.alert('Alô, Mundo!')
  }
}
