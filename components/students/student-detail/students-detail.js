"use strict";

import { studentsData } from "../add-students/add-students.js";
const studentDetailWrapper = document.querySelector(".student-detail-wrapper");
export function openStudentsDetail(ID) {
   studentDetailWrapper.classList.remove("hidden");
   document.querySelector(".container").style.display = "none";
   console.log("open students detail wrapper");
   let student = studentsData.find((student) => +student.id === +ID);
   console.log(student);

   document.querySelector(".student__name.detail-text").textContent =
      student.name;
   document.querySelector(".current-student__name").textContent = student.name;
   document.querySelector(".student__tel-number").textContent =
      "+998 " + student.phone_number;
   document.querySelector(
      ".student__tel-number"
   ).href = `tel:+998${student.phone_number}`;
   console.log(document.querySelector(".student__tel-number").href);
   document.querySelector(".student__university").textContent =
      student.university;
   document.querySelector(".student__education-degree").textContent =
      student.education_degree;
   document.querySelector(".student__allocated-money").textContent =
      student.allocated_money;
   document.querySelector(".student__tuition-fee").textContent =
      student.tuition_fee;

   document.querySelector(".edit-student-btn").value = student.id;
   console.log(
      document.querySelector(".edit-student-btn").value,
      " student id"
   );
}

openStudentsDetail(2);

document.querySelectorAll(".to-back").forEach((btn) => {
   btn.addEventListener("click", () => {
      studentDetailWrapper.classList.add("hidden");
      document.querySelector(".container").style.display = "block";
      document.querySelector(".add-student-page").classList.add("hidden");
      document.querySelector(".sponsor-detail-wrapper").classList.add("hidden");
   });
});
