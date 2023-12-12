/* Calculate IMC

weight / (heigth * height)

*/

const patients = [
  {
    name: 'John',
    age: 36,
    weight: 100,
    height: 190,
  },
  {
    name: 'Petter',
    age: 26,
    weight: 90,
    height: 190,
  },
  {
    name: 'Lauren',
    age: 28,
    weight: 75,
    height: 172,
  },
  {
    name: 'Normani',
    age: 28,
    weight: 54,
    height: 160,
  },
]

function printPatientIMC(patient){
  return `Patient ${patient.name} have a IMC index of ${(patient.weight / ((patient.height / 100) ** 2)).toFixed(2)} `
}

for (let patient of patients){
  let messageIMC = printPatientIMC(patient)

  alert(messageIMC)
}
