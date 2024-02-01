"use strict";
const editStudentsSponsorsBtns = document.querySelectorAll(".edit-students-sponsor-btn")
editStudentsSponsorsBtns.forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelector(".edit-students-sponsor-modal").classList.remove("hidden");
    document.querySelector(".overlay").classList.remove("hidden");
    // document.body.style.overflow = "hidden";
  })
})
