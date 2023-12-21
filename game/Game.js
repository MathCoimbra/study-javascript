class Game {
  constructor(tipo) {
    this.tipo = tipo;
  }

  atacar() {
    let ataque = '';
    switch (this.tipo) {
      case 'mago':
        ataque = 'de magia';
        break;
      case 'guerreiro':
        ataque = 'de espada';
        break;
      case 'monge':
         ataque = 'de artes marciais';
         break;
      case 'ninja':
        ataque = 'de shuriken';
        break;
      default:
        ataque = 'secreto';
        break;
    }
    return `O tipo ${this.tipo} atacou usando um ataque ${ataque}`;
  }
}

const hercules = new Game('guerreiro');
const mago = new Game("mago")
const monge = new Game("monge")
const ninja = new Game("ninja")
const samurai = new Game("samurai")

console.log(hercules.atacar());
console.log(mago.atacar());
console.log(monge.atacar());
console.log(ninja.atacar());
console.log(samurai.atacar());

