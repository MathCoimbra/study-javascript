/******************  Métodos que recuperam elementos ************/


/* através de seu id */
document.getElementById('titulo') // retornará o elemento que contém o id "titulo"

/* através da tag */
document.getElementsByTagName('li') // retornará todos os elementos que forem igual a tag descrita em forma de array

/* através da sua classe */
document.getElementsByClassName('textos') // retornará todos os elementos que contém a classe "textos" em forma de array

/* busca por seletores */
document.querySelectorAll('.primeira-classe .segunda-classe') // retornará todos os elementos com essas classes em forma de array

document.querySelectorAll('li .opcao') // retornará todos os elementos de tag "li" e classe "opcao"

/******************  Métodos que alteram classes ************/

/* acessando o elemento por id para que seja possível realizar alterações na classe */
const meuElemento = document.getElementById('meu-elemento')

/* adicionando nova classe */
meuElemento.classList.add("nova classe")

/* removendo uma classe */
meuElemento.classList.remove("classe")

/* verifica se há uma classe e se não houver adiciona a classe e se houver exclui a classe */
meuElemento.classList.toggle("classe qualquer")