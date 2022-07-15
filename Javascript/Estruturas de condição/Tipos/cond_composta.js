window.onload = function() 
{
  var objTxtNota = document.getElementById("nota");
  var objDivResultado = document.getElementById("resultado");
  var objBotao = document.getElementById("botao");
  objBotao.onclick = function() 
  {
      /*.VALUE - retora o valor em string, como se trata de um número está sendo utilizado o parseFloat para converter
      a de string para number*/
    var objFloNota = parseFloat(objTxtNota.value);
    if (objFloNota >= 6.0) 
    {
      objDivResultado.innerHTML = "Aluno aprovado.";
      console.log("Aluno aprovado com nota " + objFloNota);
    } 
    else 
    {
      objDivResultado.innerHTML = "Aluno reprovado.";
      console.log("Aluno reprovado com nota " + objFloNota);
    }
  } 
}