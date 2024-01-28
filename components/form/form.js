const inputs = document.querySelectorAll(".input");

const submitBtns = document.querySelectorAll(".submit");

submitBtns.forEach((submitBtn) => {
   submitBtn.addEventListener("click", (e) => {
      console.log('submitBtn clicked');
      e.preventDefault();
      inputs.forEach((input) => {

         if (!input.value.trim().length) {
            input.classList.add("error");
            setTimeout(() => {
               input.classList.remove("error");
            }, 2000);
         }else{
            input.classList.remove("error");
            console.log(input.value);
            // document.querySelector(".login-wrapper").remove()
         }
      });
   });
});

const numberInputs = document.querySelectorAll(".input-number");

numberInputs.forEach(input => {
    input.addEventListener('input', function() {
        const currentValue = this.value.trim();
        const numericValue = parseFloat(currentValue);

        if (isNaN(numericValue)) {
            this.value = ''; // Clear the input if it's not a valid number
        } else {
            this.value = numericValue; // Update the input value with the parsed number
        }
    });
});

 

const radioLabels = document.querySelectorAll('.radio-label');

radioLabels.forEach(label => {
  label.addEventListener('click', function() {
    // Uncheck all radio buttons
    radioLabels.forEach(label => {
      label.parentNode.classList.remove('checked');
      otherSumInput.style.display = "none";
    });

    // Check the clicked radio button
    this.parentNode.classList.add('checked');
  });
});


const sponsorshipSubmitBtn = document.querySelector(".sponsorship-submit")
sponsorshipSubmitBtn.addEventListener("click", (e) => {
   e.preventDefault();
   document.querySelector(".data-sent-section").style.display = "flex";
   document.querySelector(".application-section").style.display = "none";
   // const sponsorshipInputs = document.querySelectorAll(".input");
   // sponsorshipInputs.forEach((input) => {
   //    if (!input.value.trim().length) {
   //       input.classList.add("error");
   //       setTimeout(() => {
   //          input.classList.remove("error");
   //       }, 2000);
   //    }else{
   //       input.classList.remove("error");
   //       console.log(input.value);
   //    }
   // });
})