window.onload = function()
{
    /*Variável para receber o nome*/
  var objCxNome = document.getElementById("nome");
    /*Variável para receber o botão*/
  var objBotao = document.getElementById("botao");
    /*Variável para receber o resultado do envio*/
  var objDiv = document.getElementById("resultado");
    /*Variável sendo chamada pelo atributo "onclick" e logo transformada em uma função para que o javascript execute
    o botão assim que o usuário clicar no mesmo*/
  objBotao.onclick = function() 
  {
    /*Variável do resultado sendo chamada pelo comando innerHTML - comando que traz os elementos das tags já 
    renderizados*/
    /*O value é para retornar o resultado da variável objCxNome, no caso o nome do usuário. VALUE RETORNA UMA STRING*/
    objDiv.innerHTML = "Seu nome é " + objCxNome.value;  
  }
}