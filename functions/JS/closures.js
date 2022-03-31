'use strict';

// CLOSURES

const secureBooking = function () {
  let passangerCount = 0;

  return function () {
    passangerCount++;
    console.log(`${passangerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

// My example
function securePatientCouter() {
  let numOfPatients = 0;

  return function () {
    numOfPatients++;
    console.log(
      `Number of patients in the surgery department is ${numOfPatients} patients`
    );
  };
}

// Passing values from the primary function, creating a "closure"
const emergencyRoom = securePatientCouter();

// Now we can imagine that a new patient was admitted to the emergency room in the hospital and was operated on and transferred to the surgery department.

// Call the function "emergensyRoom".
// The call of this function itself implies the above described process of adding a new patient.

emergencyRoom();
// Output: Number of patients in the surgery department is 1 patients

// Again
emergencyRoom();
// Output: Number of patients in the surgery department is 2 patients
