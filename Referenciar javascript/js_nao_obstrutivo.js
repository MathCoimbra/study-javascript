/*window.onload - utilizado para que o código JS rode somente quando o HTML for renderizado*/
window.onload = function()
{
/* Objeto botao é transformado no arquivo JS em uma variável que logo recebe a 
função document.getElementById()*/
var objBotao = document.getElementById("botao");
/*Depois essa variável é alocada a classe/atributo onclick que logo é transformada em uma função*/
  objBotao.onclick = function()
  {
    window.alert("Alô, Mundo!");
}
}