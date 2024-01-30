"use strict";
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
   console.log("tab", tabname);
   e.currentTarget.classList.add("active");
}
document.getElementById("defaultOpen").click();

const filterBtn = document.querySelector(".filter-wrapper");
const filterSponsorsForm = document.querySelector(".filter-sponsors-form");
const overlay = document.querySelector(".overlay");
const modals = document.querySelectorAll(".modal");
const btns = document.querySelectorAll(".btn");
const closeBtn = document.querySelector(".close-btn");

filterBtn.addEventListener("click", () => {
   console.log("filter");
   filterSponsorsForm.classList.remove("hidden");
   overlay.classList.remove("hidden");
   document.body.style.overflow = "hidden";
});

overlay.addEventListener("click", closeModal);

closeBtn.addEventListener("click", closeModal);
document.addEventListener("keydown", (event) => {
   if (event.key === "Escape") {
      closeModal();
   }
});
function closeModal() {
   modals.forEach((modal) => {
      modal.classList.add("hidden");
   });
   overlay.classList.add("hidden");
   document.body.style.overflow = "auto";
}

btns.forEach((btn) => {
   btn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("btn is clicked");
   });
});

const eyeIcons = document.querySelectorAll(".eye-icon");

eyeIcons.forEach((eyeIcon) => {
   eyeIcon.addEventListener("click", (e) => {
      console.log('eyeIcon is clicked');
      console.log( e.target);
   });
});


// const canvas = document.getElementById("my-canvas");
// const ctx = canvas.getContext("2d");

// ctx.fillStyle = "#feaada";
// ctx.fillRect(0, 0, 250, 155);
// ctx.moveTo(10, 10);

// ctx.lineTo(10,120);
// ctx.lineWidth =15
// canvas.lineCap = "square";
// ctx.strokeStyle='green';
// ctx.stroke()
// ctx.beginPath();
// ctx.arc(120,70,50,0,6.28)
// ctx.strokeStyle='#fefefe'
// ctx.lineWidth =5
// ctx.stroke()
