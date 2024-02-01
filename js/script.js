"use strict";
document.addEventListener('DOMContentLoaded', function () {
  const checkbox = document.getElementById('LegalEntity');
  const legalEntityEl = document.querySelector('.legal-entity-el');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      legalEntityEl.classList.remove("hidden")
    } else {
      legalEntityEl.classList.add("hidden")
    }
  });
});
 radioLabels = document.querySelectorAll(".radio-label");

radioLabels.forEach((label) => {
  label.addEventListener("click", function () {
     // Uncheck all radio buttons
     radioLabels.forEach((label) => {
        label.parentNode.classList.remove("checked");
        otherSumInput.style.display = "none";
     });

     // Check the clicked radio button
     this.parentNode.classList.add("checked");
  });
});

const sponsorshipSubmitBtn = document.querySelector(".sponsorship-submit");
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
});
