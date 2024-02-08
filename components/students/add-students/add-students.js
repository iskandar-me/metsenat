"use strict";
import { showSponsorsTable } from "../../../pages/admin-panel/sponsors-table.js";

export let newStudent = JSON.parse(localStorage.getItem("students"));

const addStudentBtn = document.querySelector(".open-add-student-btn");
addStudentBtn.addEventListener("click", function () {
   document.querySelector(".add-student-page").classList.remove("hidden");
   document.querySelector(".container").style.display = "none";
   // document.body.style.overflow = "hidden";
});
document.querySelector(".add-student-btn").addEventListener(
   "click",
   function () {
      document.querySelector(".add-student-page").classList.add("hidden");
      document.querySelector(".container").style.display = "block";

      const student = {
         name: document.querySelector(".new-student__name").value,
         number: document.querySelector(".new-student__number").value,
         university: "Toshkent davlat iqtisodiyot universiteti",
         education_degree: "",
         tuition_fee: document.querySelectorAll(".new-student__tuition-fee")
            .value,
         allocated_money: "",
      };

      newStudent.push(student);
      localStorage.setItem("students", JSON.stringify(newStudent));
      showSponsorsTable();

      // localStorage.setItem("students", JSON.stringify(student));
   }
   // document.body.style.overflow = "auto";
);
