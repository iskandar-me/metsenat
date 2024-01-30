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

const otherSumInput = document.querySelector(".other-sum");

document.querySelector(".other-sum-label").addEventListener("click", () => {
   otherSumInput.style.display = "block";
});
