// "use strict";
const overlay = document.querySelector(".overlay");
const modals = document.querySelectorAll(".modal");
const btns = document.querySelectorAll(".btn");
const closeBtns = document.querySelectorAll(".close-btn");
 function closeModal() {
   modals.forEach((modal) => {
      modal.classList.add("hidden");
   });
   overlay.classList.add("hidden");
   document.body.style.overflow = "auto";
}
const tablinks = document.querySelectorAll(".tablink");
function openTab(e, tabname) {
   const tabcontents = document.querySelectorAll(".tab-content");

   // Hide all tab contents
   tabcontents.forEach((tabcontent) => {
      tabcontent.style.display = "none";
   });

   // Remove the "active" class from all tab links
   tablinks.forEach((tablink) => {
      tablink.classList.remove("active");
   });

   // Display the clicked tab content and add the "active" class to the clicked tab link
   document.getElementById(tabname).style.display = "block";
   e.currentTarget.classList.add("active");
}
document.getElementById("defaultOpen").click();

document.addEventListener("DOMContentLoaded", () => {
   const filterSponsorsForm = document.querySelector(".filter-sponsors-modal");

   // const dashboardBtn = document.querySelector(".tablink.dashboard");
   // const sponsorsBtn = document.querySelector(".tablink.sponsors");
   // const studentsBtn = document.querySelector(".tablink.students");
   // if (studentsBtn.classList.contains("active")) {
   //    console.log("students is active");
   // }
   // if (sponsorsBtn.classList.contains("active")) {
   //    console.log("sponsors is active");
   //    filterBtn.addEventListener("click", () => {
   //       filterSponsorsForm.classList.remove("hidden");
   //       overlay.classList.remove("hidden");
   //       document.body.style.overflow = "hidden";
   //    });
   // }

   btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
         e.preventDefault();
      });
   });

   overlay.addEventListener("click", closeModal);
   closeBtns.forEach((btn) => {
      btn.addEventListener("click", closeModal);
   });

   document.querySelectorAll(".save-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
         e.preventDefault();
         // closeModal();
      });
   });
});

document.querySelectorAll(".delete-sponsor-btn").forEach((btn) => {
   btn.addEventListener("click", (e) => {
      e.preventDefault();
      closeModal();
   });
});
