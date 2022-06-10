window.onload = function()
{
  var objTxtSigla = document.getElementById("sigla");
  var objDivResultado = document.getElementById("resultado");
  var objBotao = document.getElementById("botao");
    
  objBotao.onclick = function()
  {
      //Switch - comando para permitir várias verificações por meio de uma única estrutura
	switch(objTxtSigla.value)
	{
        //Case - claúsula que será comparada ao que foi definido no switch
	  case "SP":
		objDivResultado.innerHTML = "São Paulo";
        //Break - comando para interromper a verificação e sair do switch
	  break;
	  case "RJ":
		objDivResultado.innerHTML = "Rio de Janeiro";
	  break;
	  case "MG":
		objDivResultado.innerHTML = "Minas Gerais";
	  break;
	  case "ES":
	     objDivResultado.innerHTML = "Espírito Santo";
	  break;
	  //Default - comando para definir o que será realizado quando nenhuma case for atendida
	  default:
		objDivResultado.innerHTML = "Não é um Estado do Sudeste";
	}
  }
}