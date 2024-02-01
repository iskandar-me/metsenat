"use strict";
const studentDetailWrapper = document.querySelector(".student-detail-wrapper");
function openStudentDetail(){
   studentDetailWrapper.classList.remove("hidden");
   document.querySelector(".container").style.display = "none";
}
document.querySelectorAll(".to-back").forEach(btn=>{
   btn.addEventListener("click",()=>{
      studentDetailWrapper.classList.add("hidden");
      document.querySelector(".container").style.display = "block";
      document.querySelector(".add-student-page").classList.add("hidden");
      document.querySelector(".sponsor-detail-wrapper").classList.add("hidden");
   })
})