/* Utilizando eventos */
const { EventEmitter } = require('events')
const ev = new EventEmitter()

/* método on - utilizado para ouvir eventos, caso seja necessário escutar somente um evento é necessário utilizar o método once */
ev.once('saySomething', (message) => {
  console.log('I hear you: ', message)
})

/* método emit - utilizado para desparar algum evento */
ev.emit('saySomething', 'Math')
ev.emit('saySomething', 'Bocó')
ev.emit('saySomething', 'Ju')

/* Utilizando eventos como base para outros módulos */
const { inherits } = require('util')

function Character(name) {
  this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin')
chapolin.on('help', () => console.log(`The ${chapolin.name} can!`))

console.log('Oh! And now, who can defend me?')
chapolin.emit('help')