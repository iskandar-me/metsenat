"use strict";
const addSponsorBtns = document.querySelectorAll(".add-sponsor-btn");

addSponsorBtns.forEach((btn) => {
   btn.addEventListener("click", () => {
      document.querySelector(".add-sponsor-modal").classList.remove("hidden");
      document.querySelector(".overlay").classList.remove("hidden");
      // document.body.style.overflow = "hidden";
   });
});
