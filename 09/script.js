/*  Create a patient list

each patient on the list must contain:

name
age
Weight
height

Write a list containing the names of the patients.

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
/*
//to acess one objetct off array

alert(patients[0].name)

let patientsNames = [];
for(let index = 0; index < patients.length; index++) {

 // here show one patient:
  alert(patients[index].name)
  // here show all patients
  patientsNames[index] = patients[index].name
}

alert(patientsNames)
 */

// for of

let patientsNames = [];


for(let patient of patients) {
  const allPatientsInformations = {
    name: patient.name,
    age: patient.age,
    weight: patient.weight,
    height: patient.height
  }
  patientsNames.push(allPatientsInformations)
}

let alertMessage = "Informations of patients: \n";

for (let patientInfo of patientsNames) {
  alertMessage += `\nName: ${patientInfo.name}\nAge: ${patientInfo.age}\nWeight: ${patientInfo.weight}\nHeight: ${patientInfo.height}\n`;
}

alert(alertMessage);

