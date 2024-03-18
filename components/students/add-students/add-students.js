"use strict";
import { studentsInitialData } from "../../../js/data.js";

export let studentsData = JSON.parse(localStorage.getItem("students"))
   ? JSON.parse(localStorage.getItem("students"))
   : studentsInitialData;
localStorage.setItem("students", JSON.stringify(studentsData));

const OpenAddStudentBtns = document.querySelector(".open-add-student-btn");

OpenAddStudentBtns.addEventListener("click", function () {
   document.querySelector(".add-student-page").classList.remove("hidden");
   document.querySelector(".container").style.display = "none";
});

document.querySelector(".add-student-btn").addEventListener("click", () => {
   addNewStudent();
   location.reload();
});

function addNewStudent() {
   document.querySelector(".add-student-page").classList.add("hidden");
   document.querySelector(".container").style.display = "block";
   let data = {
      id: generateRandomId(8),
      name: document.querySelector(".new-student__name").value
         ? document.querySelector(".new-student__name").value
         : "New Student",
      phoneNumber:
         "+998" + document.querySelector(".new-student__number").value,
      university: document.querySelector(".new-student__university").value,
      education_degree: document.querySelector(".new-student__education-degree")
         .value,
      tuition_fee: document.querySelector(".new-student__tuition-fee").value,
      allocated_money: "0",
   };
   studentsData.push(data);
   localStorage.setItem("students", JSON.stringify(studentsData));
}

const generateRandomId = function (length) {
   const characters = "0123456789";
   let randomId = "";

   for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
   }
   return Number(randomId);
};
