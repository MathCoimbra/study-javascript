const pessoa = {
  firstName: 'Matheus',
  lastName: 'Coimbra',
  id: '1',
  fullName: function(){
    /* this é utilizado para referenciar que o retorno dessa função são as propriedades firstName e lastName desse objeto */
    return `${this.firstName} ${this.lastName}`
  },
  getId: function(){
    /* utilizado aqui para referenciar que tratasse do id desse objeto */
    return this.id;
  }
}

console.log(pessoa.fullName())
console.log(pessoa.getId())
