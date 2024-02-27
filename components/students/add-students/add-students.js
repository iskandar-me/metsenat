"use strict";
import { showSponsorsTable } from "../../../pages/admin-panel/sponsors-table.js";
import { studentsInitialData } from "../../../js/data.js";
// console.log(showStudentsTable);
export let studentsData = studentsInitialData;

studentsData = JSON.parse(localStorage.getItem("students"))
   ? JSON.parse(localStorage.getItem("students"))
   : studentsInitialData;

localStorage.setItem("students", JSON.stringify(studentsData));
// console.log(studentsData);
const OpenAddStudentBtn = document.querySelector(".open-add-student-btn");

OpenAddStudentBtn.addEventListener("click", function () {
   document.querySelector(".add-student-page").classList.remove("hidden");
   document.querySelector(".container").style.display = "none";
});

let data;
document.querySelector(".add-student-btn").addEventListener("click", () => {
   addNewStudent();
   // console.log("added");
   // const startIndex = (currentPage - 1) * rowsPerPage;
   // paginateArray();
   // const endIndex = startIndex + rowsPerPage;
   // location.reload();
});

function addNewStudent() {
   document.querySelector(".add-student-page").classList.add("hidden");
   document.querySelector(".container").style.display = "block";
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
   studentsData.push(data);
   localStorage.setItem("students", JSON.stringify(studentsData));
   // showStudentsTable(currentPage);
   console.log(studentsData.length, "new students added");
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
