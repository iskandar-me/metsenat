"use strict";
import { studentsData } from "../add-students/add-students.js";

export function openStudentsDetail(ID) {
   const studentDetailWrapper = document.querySelector(
      ".student-detail-wrapper"
   );
   studentDetailWrapper.classList.remove("hidden");
   document.querySelector(".container").style.display = "none";
   console.log("open students detail wrapper");

   let student = studentsData.find((student) => {
      return +student.id === +ID;
   });
   console.log(student, "with id " + student.id);

   document.querySelector(".student__name.detail-text").textContent =
      student.name.length <= 30
         ? student.name
         : student.name.substring(0, 30) + "...";
   document.querySelector(".current-student__name").textContent =
      student.name.length <= 30
         ? student.name
         : student.name.substring(0, 30) + "...";
   console.log(student.name.length, "student name");
   document.querySelector(".student__tel-number").textContent =
      student.phone_number ? "+998 " + student.phone_number : "+998 xxyyyyyyy";
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

// openStudentsDetail(1);
