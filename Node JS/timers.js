/* setTimeOut - roda uma função depois de X milissegundos */
const time = 3000
const finished = () => console.log('done!')

const timeout = setTimeout(finished, time)

/* clearTimeout - cancela o que está no setTimeout */
clearTimeout(timeout)

/* setInterval - define um intervalo em milissegundos para execução de uma função */
const time2 = 3000
const checking = () => console.log('checking...')

const interval = setInterval(checking, time2)

/* clearTimeout - cancela o que está no setInterval */
clearInterval(interval)