// //Functions statement
// function createPhrases() {
//   console.log("Sua frase aqui")
//   console.log("Sua frase aqui")
//   console.log("Sua frase aqui")
// }
// // execute statement
// return createPhrases();



// // function expression or anonymous function
// const sum = function (number1, number2) {
//   // parameter
//  console.log( number1 + number2)
// }

// sum(2,3)  // arguments 

// function expression or anonymous function
// const sum = function (number1, number2) {
//   // parameter
//  total =  number1 + number2
//  return total
// }

// let number1 = 34
// let number2 = 66



// console.log(`o number1: ${number1}, o number2: ${number2}`)
// console.log( `A somo dos dois é de: ${sum(number1, number2)}`)



// // função é um liquidificador

// function fazerSuco(fruta1, fruta2) {
//   return fruta1 + fruta2
// }

// const copo = fazerSuco('banana', 'maca')

// console.log(copo)



// function scope

// let subject = 'create video'

// function createThink(subject) {
//   subject = 'study'
//   return subject
// }

// console.log(subject)
// console.log(createThink(subject))

// sayMyName()

// function sayMyName() {
// 	console.log('Mayke')
// }


// call back function

// function sayMyName(name) {
//   console.log('antess de executar o callback')
//   	name()
//   console.log('depois de executar o callback')

//   }
// sayMyName( 
//   () => { 
//     console.log('estou em uma callback') // um callback é uma funçã oque está passando como parametro para outra função.
//   }
// )


// function() constructor
//   * expressao new
//   * criar um novo objeto
//   * this keyword

function Person(name) { //funcão escrita.
  this.name = name
  // this referecia o myk que ta la fora.
  this.walk = function() {
    return this.name + 'esta andando'
  }
}
const mayk = new Person('Mayk');
const joao = new Person('Joao')
// quando escrevo new ele cria um novo objeto.

console.log(mayk.walk())
console.log(joao.walk())
