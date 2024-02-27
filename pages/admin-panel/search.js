"use strict";

import { sponsorsData } from "../../js/data.js";
import { studentsData } from "../../components/students/add-students/add-students.js";

// console.log(debounce);
// const searchInputs = document.querySelectorAll(".search-input")
const sponsorsTable = document.getElementById("sponsors-table-body");
const studentsTable = document.getElementById("studens-table-body");
const searchSponsorInput = document.querySelector(".search-sponsor");
const searchStudentInput = document.querySelector(".search-student");
const clearSponsorInputIcon = document.querySelector(".sponsor-clear-icon");
const clearStudentInputIcon = document.querySelector(".student-clear-icon");
searchStudentInput.addEventListener("submit", (e) => e.preventDefault());
searchSponsorInput.addEventListener("submit", (e) => e.preventDefault());
// Debounce function
function debounce(func, delay) {
   let timeoutId;
   return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
         func.apply(context, args);
      }, delay);
   };
}

// Clear Input if clearIcon is clicked
clearSponsorInputIcon.addEventListener("click", () => {
   searchSponsorInput.value = "";
   clearSponsorInputIcon.style.display = "none";
   handleSearchSponsorInput();
});

searchSponsorInput.addEventListener("input", () => {
   // Show clearIcon if searchSponsorInput has more than 0
   if (searchSponsorInput.value.length > 0) {
      clearSponsorInputIcon.style.display = "block";
   } else {
      clearSponsorInputIcon.style.display = "none";
   }

   // handleSearchSponsorInput();
   debounce(handleSearchSponsorInput(), 500);
});

function handleSearchSponsorInput() {
   const searchSponsorInputValue = searchSponsorInput.value
      .trim()
      .toLowerCase();
   const matchedSponsors = getMatchingSponsorValue(searchSponsorInputValue);
   if (matchedSponsors.length) {
      displaySearchingSponsorResults(matchedSponsors);
   } else {
      sponsorsTable.innerHTML = `
    <td colspan="8" class="no-data">Siz qidirgan ma'lumot topilmadi</td>
    </tr>
    `;
   }
}

function getMatchingSponsorValue(searchSponsorInputValue) {
   return sponsorsData.filter((sponsor) =>
      sponsor.name.trim().toLowerCase().includes(searchSponsorInputValue)
   );
}
function displaySearchingSponsorResults(matchedSponsors) {
   sponsorsTable.innerHTML = "";
   matchedSponsors.forEach((sponsor, i) => {
      // let currentPage = 1;
      const tr = document.createElement("tr");
      tr.innerHTML = `
    <td>${i + 1}</td>
    <td>${sponsor.name}</td>
    <td>${sponsor.phoneNumber}</td>
    <td>${sponsor.sponsorshipSum}</td>
    <td>${sponsor.usedSum} UZS</td>
    <td>${sponsor.sana}</td>
    <td class="sponsor-status ${sponsor.status.toLowerCase()}">${
         sponsor.status
      }</td>
    <td>
    <img onclick="openSponsorDetail(${
       sponsor.id
    })" class="eye-icon" src="../../assets/img/eye.svg" alt="Eye icon" width="35" height="35">
    </td>
    `;
      sponsorsTable.append(tr);
   });
}

// =======================SEARCH STUDENT=======================================//
// Clear Input if clearIcon is clicked
clearStudentInputIcon.addEventListener("click", () => {
   searchStudentInput.value = "";
   clearStudentInputIcon.style.display = "none";
   handleSearchStudentInput();
});

searchStudentInput.addEventListener("input", () => {
   // Show clearIcon if searchStudentInput has more than 0
   if (searchStudentInput.value.length > 0) {
      clearStudentInputIcon.style.display = "block";
   } else {
      clearStudentInputIcon.style.display = "none";
   }

   // handleSearchStudentInput();
   debounce(handleSearchStudentInput(), 500);
});

function handleSearchStudentInput() {
   const searchStudentInputValue = searchStudentInput.value
      .trim()
      .toLowerCase();
   const matchedStudents = getMatchingStudentValue(searchStudentInputValue);

   if (matchedStudents.length) {
      displaySearchingStudentResults(matchedStudents);
   } else {
      studentsTable.innerHTML = `<tr>
         <td colspan="7" class="no-data">Siz qidirgan ma'lumot topilmadi</td>
         </tr>`;
   }
}

function getMatchingStudentValue(searchStudentInputValue) {
   return studentsData.filter((student) =>
      student.name.trim().toLowerCase().includes(searchStudentInputValue)
   );
}

function displaySearchingStudentResults(matchedStudents) {
   studentsTable.innerHTML = "";
   matchedStudents.forEach((student, i) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${student.name}</td>
      <td>${student.education_degree}</td>
      <td>${student.university}</td>
      <td>${student.allocated_money}</td>
      <td>${student.tuition_fee}</td>
      <td>
      <img onclick="openStudentDetail(${
         student.id
      })" class="eye-icon" src="../../assets/img/eye.svg" alt="Eye icon" width="35" height="35">
      </td>
      `;
      studentsTable.append(tr);
   });
}
