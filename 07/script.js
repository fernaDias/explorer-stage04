/* Guessing  Game

Show a message to user:
"Guess the number I thought. Is between 0 and 10."

Create a logic to generate a random number and verify if the number inserted is the same what the random generate.
While the app not guess the number, show a message to user: Error, try again.

if the app guess a number, show a message to user: Congratulations! You guess the number in X attempts.
*/

let result = prompt('Adivinhe o número que eu estou pensando? Está entre 0 e 10');

const randomNumber = Math.round(Math.random() * 10);

let xAttempts = 1;

while(Number(result) != randomNumber){
   result = prompt("Erro, tente novamente: ")
   xAttempts++;
}

alert(`Parabens, você acertou em ${xAttempts} tentativas`)