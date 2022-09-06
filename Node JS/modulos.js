/* Módulos nativos */
const path = require('path')
/* global para trazer o diretório de onde está algum arquivo */
console.log(path.basename(__dirname))

/* Módulos não nativos */
const myModule = require('./exports')
console.log(myModule)