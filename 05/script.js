/* 
Ask the name of student and 3 notes of bimestre. 
calculate the average.
If the student pass on bimestre, show congratulations.
If the student dont pass on bimestre, motivate him to study more to make recuperation.

In both cases, show a message with name and average.
 */


let student =  prompt('Please fill the name of the student')

let note1 = prompt('Please fill the note 1 of bimestre')
let note2 = prompt('Please fill the note 2 of bimestre')
let note3 = prompt('Please fill the note 3 of bimestre')


let average = (Number(note1) + Number(note2) + Number(note3)) / 3

let result = average > 6

average = average.toFixed(2)
 
if (result) {
  alert('Congratulations: ' + student + '. Your average is ' + average)
} else {
  alert('Not this time: ' + student + '. Your average is ' + average + 'Your need work hard to pass in recuperation.')
}