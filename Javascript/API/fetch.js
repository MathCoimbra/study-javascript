/* Sintaxe básica do método fetch */
fetch(url, options)
/* A resposta da API sempre deve ser convertida para "json" caso seja string */
  .then(response => response.json())
  .then(json => console.log(json))

/* Exemplo com operações no banco */
fetch('https://endereco-api.com/', {
  method: 'GET',
  cache: 'no-cache'
} )
  .then(response => response.json())
  .then(json => console.log(json))

  fetch('https://endereco-api.com/', {
  method: 'POST',
  cache: 'no-cache',
  body: JSON.stringify(data)
} )
  .then(response => response.json())
  .then(json => console.log(json))
