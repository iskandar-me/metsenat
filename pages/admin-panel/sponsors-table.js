"use strict";
import { sponsorsData, studentsData } from "../../js/data.js";
const sponsorsTable = document.getElementById("sponsors-table-body");
const studentsTable = document.getElementById("studens-table-body");
let newStudent = JSON.parse(localStorage.getItem("students"));
localStorage.setItem("students", JSON.stringify(newStudent));
newStudent = JSON.parse(localStorage.getItem("students"));

let currentPage = 1;
// let sponsorsData = [];
function showSponsorsTable(currentPage) {
   const rowPerPage = 10;
   const paginatedData = paginateArray(sponsorsData, rowPerPage, currentPage);
   sponsorsTable.innerText = "";
   paginatedData.forEach((sponsor, i) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
     <td>${i + 1 + (currentPage - 1) * rowPerPage}</td>
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
if (sponsorsData.length) {
   showSponsorsTable(currentPage);
} else {
   sponsorsTable.innerHTML = `<tr>
   <td colspan="8" class="no-data">No data</td>
   </tr>`;
}

// console.log(newStudent);
if (newStudent.length) {
   showStudentsTable(currentPage);
   console.log("bor");
} else {
   studentsTable.innerHTML = `<tr>
   <td colspan="7" class="no-data">No data</td>
   </tr>`;
}
console.log(newStudent);
function showStudentsTable(currentPage) {
   const rowsPerPage = 10;
   const paginatedData = paginateArray(newStudent, rowsPerPage, currentPage);
   studentsTable.innerText = "";
   paginatedData.forEach((student, i) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
     <td>${i + 1 + (currentPage - 1) * rowsPerPage}</td>
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

// // PAGINATION
const paginationContainers = document.querySelectorAll(".pagination-container");
// paginationContainer.innerHTML = "";
currentPage = 1;
// const paginationCount = document.getElementById("pagination-count");
var e = document.getElementById("pagination-count");
var value = e.value;
var text = e.options[e.selectedIndex].text;
const rowPerPage = text;

const totalSponsorPages = Math.ceil(sponsorsData.length / rowPerPage);
const totalStudentPages = Math.ceil(newStudent.length / rowPerPage);
console.log(totalSponsorPages);

function paginateArray(array, rowPerPage, currentPage) {
   const startIndex = (currentPage - 1) * rowPerPage;
   const endIndex = startIndex + rowPerPage;
   const paginatedData = array.slice(startIndex, endIndex);

   const paginationInfoSponsor = document.querySelector(
      ".pagination__info-sponsor"
   );
   paginationInfoSponsor.textContent = `${sponsorsData.length}dan ${
      startIndex + 1
   }-${endIndex}ko'rsatilmoqda`;

   const paginationInfoStudent = document.querySelector(
      ".pagination__info-student"
   );
   paginationInfoStudent.textContent = `${newStudent.length}dan ${
      startIndex + 1
   }-${endIndex}ko'rsatilmoqda`;

   return paginatedData;
}

function updatePaginationBtns(totalPages, currentPage) {
   paginationContainers[0].innerHTML = "";
   for (let i = 1; i <= totalSponsorPages; i++) {
      const btn = document.createElement("button");
      btn.innerText = i;
      btn.className = i === currentPage ? "current-page" : "";
      btn.addEventListener("click", () => {
         currentPage = i;
         console.log(currentPage);
         updatePaginationBtns(totalStudentPages, currentPage);
         updatePaginationBtns(totalSponsorPages, currentPage);
         showSponsorsTable(currentPage);
         showStudentsTable(currentPage);
      });
      paginationContainers[0].append(btn);
      // paginationContainers[1].append(btn); //
   }
}
// function updatePaginationBtns(totalStudentPages, currentPage) {}
updatePaginationBtns(totalSponsorPages, currentPage);
updatePaginationBtns(totalStudentPages, currentPage);
