"use strict";
document.addEventListener("DOMContentLoaded", function () {
   const checkbox = document.getElementById("LegalEntity");
   const legalEntityEl = document.querySelector(".legal-entity-el");

   checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
         legalEntityEl.classList.remove("hidden");
      } else {
         legalEntityEl.classList.add("hidden");
      }
   });
});
const radioLabels = document.querySelectorAll(".radio-label");

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
   console.log("clicked");
});
sponsorshipSubmitBtn.addEventListener("submit", (e) => {
   e.preventDefault();
   document.querySelector(".data-sent-section").style.display = "flex";
   document.querySelector(".application-section").style.display = "none";
   console.log("submit clicked");
});
