/* Sintaxe de criação do objeto */
/* new Error(message, fileName, lineNumber) */

const myError = new Error('Mensagem inválida')

/* alterando o nome do erro */
myError.name = 'InvalidMessage'

/* comando para exibir a pilha de chamadas até o erro */
throw myError.stack