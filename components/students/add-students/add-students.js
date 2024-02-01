"use strict";
const addStudentBtn = document.querySelector(".open-add-student-btn");
addStudentBtn.addEventListener("click", function (){
   document.querySelector(".add-student-page").classList.remove("hidden");
   document.querySelector(".container").style.display = "none";
   // document.body.style.overflow = "hidden";
})
document.querySelector(".add-student-btn").addEventListener("click", function(){
   document.querySelector(".add-student-page").classList.add("hidden");
   document.querySelector(".container").style.display = "block";
   // document.body.style.overflow = "auto";
})