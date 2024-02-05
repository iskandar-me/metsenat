"use strict";

// import { sponsorsData } from "./data";

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

const otherSumInput = document.querySelector(".other-sum-input");
otherSumInput.style.display = "none";

radioLabels.forEach((label) => {
   label.addEventListener("click", function () {
      // Uncheck all radio buttons
      radioLabels.forEach((label) => {
         label.parentNode.classList.remove("checked");
         otherSumInput.style.display = "none";
      });

      // Check the clicked radio button
      this.parentNode.classList.add("checked");

      document
         .querySelector(".other-sum-label")
         .addEventListener("click", () => {
            otherSumInput.style.display = "flex";
         });
      if (this.parentNode.classList.contains("checked")) {
         // console.log(this.parentNode.textContent.trim());

         // let { sponsoorshipAmount } = sponsorsData;
         // sponsoorshipAmount = this.parentNode.textContent.trim();


         // console.log(sponsorsData[0].name, "sponsoeas");
         // console.log("Sponsorship amount is ", sponsoorshipAmount);
      }
   });
});

const sponsorshipSubmitBtn = document.querySelector(".sponsorship-submit");
// sponsorshipSubmitBtn.addEventListener("click", (e) => {
//    e.preventDefault();
//    document.querySelector(".data-sent-section").style.display = "flex";
//    document.querySelector(".application-section").style.display = "none";
//    console.log("clicked");
// });
const sponsorshipForm = document.querySelector(".sponsorship-form");
sponsorshipForm.addEventListener("submit", (e) => {
   e.preventDefault();
   inputs.forEach((input) => {
      if (input.value.trim()) {
         console.log(input.value);
         document.querySelector(".data-sent-section").style.display = "flex";
         document.querySelector(".application-section").style.display = "none";
         console.log("submit clicked");
      } else {
         input.style.borderColor = "red";
      }
   });
});
