"use strict";
// import { showSponsorsTable } from "../../../pages/admin-panel/sponsors-table.js";
import { studentsData } from "../../../js/data.js";
import { showStudentsTable } from "../../../pages/admin-panel/student-table.js";
// console.log(showStudentsTable);
export let newStudent = studentsData;
console.log(newStudent, "newstudent");

newStudent = JSON.parse(localStorage.getItem("students"))
   ? JSON.parse(localStorage.getItem("students"))
   : studentsData;

localStorage.setItem("students", JSON.stringify(newStudent));
// console.log(newStudent);
const OpenAddStudentBtn = document.querySelector(".open-add-student-btn");

OpenAddStudentBtn.addEventListener("click", function () {
   document.querySelector(".add-student-page").classList.remove("hidden");
   document.querySelector(".container").style.display = "none";
});

let data;
document.querySelector(".add-student-btn").addEventListener("click", () => {
   addNewStudent();
   console.log("added");
});

function addNewStudent() {
   document.querySelector(".add-student-page").classList.add("hidden");
   document.querySelector(".container").style.display = "block";
   // newStudent = JSON.parse(localStorage.getItem("students")) || [];
   data = {
      id: generateRandomId(8),
      name: document.querySelector(".new-student__name").value,
      number: document.querySelector(".new-student__number").value,
      university: document.querySelector(".new-student__university").value,
      education_degree: document.querySelector(".new-student__education-degree")
         .value,
      tuition_fee: document.querySelector(".new-student__tuition-fee").value,
      allocated_money: "0",
   };
   newStudent.push(data);
   localStorage.setItem("students", JSON.stringify(newStudent));
   showStudentsTable();
   // console.log("added?  S");
}

const generateRandomId = function (length) {
   const characters = "0123456789";
   let randomId = "";

   for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
   }
   return randomId;
};
