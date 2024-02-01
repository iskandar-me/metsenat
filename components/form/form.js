"use strict";
// Phone Number

// Use let for variables that may be reassigned
let phoneNumberInput = document.querySelectorAll('.input-phone')

// Attach the formatPhoneNumber function to the input event


const inputs = document.querySelectorAll(".input");
const numberInputs = document.querySelectorAll(".input-number");

numberInputs.forEach((input) => {
   input.addEventListener("input", function () {
      const currentValue = this.value.trim();
      const numericValue = parseFloat(currentValue);

      if (isNaN(numericValue)) {
         this.value = ""; // Clear the input if it's not a valid number
      } else {
         this.value = numericValue; // Update the input value with the parsed number
      }
   });
});


