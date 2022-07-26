class Animal {
  constructor(type = 'animal') {
    this.type = type
  }

  /* método para retornar algum tipo */
  get type() {
    /* underline - utilizado para quando se quer utilizar o nome do método o mesmo da propriedade, como acima, está sendo utilizado o método type e a propriedade também type */
    return this._type
  }

  /* método para atribuir algum tipo em caixa alta */
  set type(val) {
    this._type = val.toUpperCase()
  }

  /* método que será responsável por emitir o som de um animal*/
  makeSound() {
    console.log('Making animal sound')
  }
}

let a = new Animal()
console.log(a.type)

/* extends - utilizado para herdar os atributos e métodos da classe Animal */
class Cat extends Animal {
  constructor(){
    super('cat')
  }

  /* sobreescrita do método da classe pai desta vez emitindo o som de um gato */
  makeSound(){
    super.makeSound()
    console.log('Meow!')
  }

}

let b = new Cat()
console.log(b.type)
