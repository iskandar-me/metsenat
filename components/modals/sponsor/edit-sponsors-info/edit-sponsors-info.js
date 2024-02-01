"use strict";
const editSponsorsInfoBtns = document.querySelectorAll(
   ".edit-sponsors-info-btn"
);
editSponsorsInfoBtns.forEach((btn) => {
   btn.addEventListener("click", () => {
    document.querySelector(".edit-sponsors-info-modal").classList.remove("hidden");
    document.querySelector(".overlay").classList.remove("hidden");
    // document.body.style.overflow = "hidden";
   });
});
