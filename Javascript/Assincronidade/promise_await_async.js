/* Sintaxe do promise */
const Promise = new Promise((resolve, reject) => {})

/* Declaração da função assíncrona */
async function resolvePromise(){
const myPromise = new Promise((resolve, reject) => {
  window.setTimeout(() => {
    resolve(console.log('Resolvida!'))
  }, 2000)
})

const resolved = await myPromise
      .then((result) => result + ' passando pelo then')
      .catch((err) => console.log(err.message))

return resolved

}

/* Chamada da função assíncrona */
await resolvePromise()