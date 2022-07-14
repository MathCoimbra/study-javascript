/* Exemplo de função autoinvocável */

  /* A função autoinvocavel precisa estar entre parênteses, seguido por outro par de parênteses que é onde a chamada da função ocorre*/

  /* Exemplo sem parâmetros por isso o parênteses é vazio */
(function (){
  let name = "DIO"
  return name
}) ()

// a função retornará - DIO

  /* Exemplo com parâmetros e variáveis */
    /* No caso abaixo a função está dentro de uma variável (constante) e possui parâmetros, portanto ao final nos parênteses os parâmetros devem ser adicionados */
const sub = (
  function(){
    return a - b
  }
) (5,5)

// retornará 0