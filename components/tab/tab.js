"use strict";

// function openTab(e, tabName) {

//    // const tabContents = document.querySelectorAll(".tab-content");
//    const tabLinks = document.querySelectorAll(".tab-link");

//    for (let i = 0; i < tabLinks.length; i++) {
//       tabLinks[i].className = tabLinks[i].className.replace(" active", "");
//    }

//    const currentTab = document.getElementById(tabName);
//    currentTab.style.display = "block";
//    e.currentTarget.className += " active";

//    // Hide or show specific inputs based on the tabName
//   //  const legalEntityEl = currentTab.querySelector(".legal-entity-el");

//   //  if (tabName === "LegalEntity") {
//   //     legalEntityEl.style.display = "block";

//   //     document.querySelector(".org-name").value=''
//   //  } else {
//   //     legalEntityEl.style.display = "none";
//   //  }
// }

// document.getElementById("defaultOpen").click();


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
