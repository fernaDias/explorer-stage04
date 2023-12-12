/*
  Get 2 númbers and make the math operatios of sum, subtraction, multiplication, division and remainder of division .
*/

let number1 = prompt('Digit one number')
let number2 = prompt('Digit another numbers')

number1 =  Number(number1)
number2 = Number(number2)

let sum = number1 + number2;
let sub = number1 - number2;
let mult = number1 * number2;
let div = number1 / number2;
let rest = number1 % number2;

alert( 'The result of sum is: ' + sum)
alert( 'The result of sub is: ' + sub)
alert( 'The result of mult is: ' + mult)
alert( 'The result of div is: ' + div)
alert( 'The result of rest is: ' + rest)



