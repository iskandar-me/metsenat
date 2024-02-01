"use strict";
const openSponsorFilter = document.querySelector(".open-sponsor-filter");
openSponsorFilter.addEventListener("click", () => {
   document.querySelector(".filter-sponsors-modal").classList.remove("hidden");
   document.querySelector(".overlay").classList.remove("hidden");
   document.body.style.overflow = "hidden";
});

document
   .querySelector(".see-filtered-sponsors-btn")
   .addEventListener("click", () => {
    document.querySelector(".filter-sponsors-modal").classList.add("hidden");
    document.querySelector(".overlay").classList.add("hidden");
    document.body.style.overflow = "auto";
   });
