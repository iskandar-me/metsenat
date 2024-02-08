"use strict";
// import { studentsData } from "../../js/data.js";
import { newStudent } from "../../components/students/add-students/add-students.js";
// newStudent= JSON.parse(localStorage.getItem("students"))
localStorage.setItem("students", JSON.stringify(newStudent));
const studentsTable = document.getElementById("studens-table-body");
// newStudent = JSON.parse(localStorage.getItem("students"));
const paginationContainers = document.querySelectorAll(
   ".pagination-container"
)[1];

let currentPage = 1;
if (newStudent.length) {
   showStudentsTable(currentPage);
} else {
   studentsTable.innerHTML = `<tr>
      <td colspan="7" class="no-data">No data</td>
      </tr>`;
}
export function showStudentsTable(currentPage) {
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
var e = document.getElementById("pagination-count");
var value = e.value;
var text = e.options[e.selectedIndex].text;
const rowPerPage = 5;
const totalStudentPages = Math.ceil(newStudent.length / rowPerPage);

function paginateArray(array, rowPerPage, currentPage) {
   const startIndex = (currentPage - 1) * rowPerPage;
   const endIndex = startIndex + rowPerPage;
   const paginatedData = array.slice(startIndex, endIndex);

   const paginationInfoStudent = document.querySelector(
      ".pagination__info-student"
   );
   paginationInfoStudent.textContent = `${newStudent.length}dan ${
      startIndex + 1
   }-${endIndex}ko'rsatilmoqda`;

   return paginatedData;
}

function updatePaginationBtns(totalPages, currentPage) {
   paginationContainers.innerHTML = "";
   for (let i = 1; i <= totalStudentPages; i++) {
      const btn = document.createElement("button");
      btn.innerText = i;
      btn.className =
         i === currentPage ? "pagination-btn  active" : "pagination-btn";
      btn.addEventListener("click", () => {
         currentPage = i;
         console.log(currentPage);
         updatePaginationBtns(totalStudentPages, currentPage);
         showStudentsTable(currentPage);
      });
      paginationContainers.append(btn);
      // paginationContainers[1].append(btn); //
   }
}
// function updatePaginationBtns(totalStudentPages, currentPage) {}
// updatePaginationBtns(totalSponsorPages, currentPage);
updatePaginationBtns(totalStudentPages, currentPage);
