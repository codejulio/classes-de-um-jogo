
class Heroi
{
	constructor(nome, idade, tipo){
       this.nome = nome
       this.idade = idade
       this.tipo = tipo
       }
}

let heroi1 = new Heroi()
let heroi2 = new Heroi()
let heroi3 = new Heroi()
let heroi4 = new Heroi()

heroi1.nome = "Mago"
heroi1.idade = 79
heroi1.tipo = "Magia"

heroi2.nome = "Guerreiro"
heroi2.idade = 32
heroi2.tipo = "Espada"

heroi3.nome = "Monge"
heroi3.idade = 60
heroi3.tipo = "Artes Marcias"

heroi4.nome = "Ninja"
heroi4.idade = 19
heroi4.tipo = "shuriken"

console.log("O héroi de classe " + heroi1.nome + " atacou usando " + heroi1.tipo)
console.log("O héroi de classe " + heroi2.nome + " atacou usando " + heroi2.tipo)
console.log("O héroi de classe " + heroi3.nome + " atacou usando " + heroi3.tipo)
console.log("O héroi de classe " + heroi4.nome + " atacou usando " + heroi4.tipo)