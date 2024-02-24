"use strict";
// import { studentsData } from "../../js/data.js";
import { newStudent } from "../../components/students/add-students/add-students.js";
const studentsTable = document.getElementById("studens-table-body");
const paginationContainers = document.querySelectorAll(
   ".pagination-container"
)[1];
const localData = JSON.parse(localStorage.getItem("students"));
// console.log("local data is ", localData);
// if (localData) {
//    newStudent = localData;
// }
let currentPage = 2;
let rowsPerPage = 10;
let totalPages = Math.ceil(newStudent.length / rowsPerPage); // Calculate total pages
if (newStudent.length) {
   showStudentsTable();
} else {
   studentsTable.innerHTML = `<tr>
      <td colspan="7" class="no-data">No data</td>
      </tr>`;
}

var e = document.getElementById("pagination-count");
var value = e.value;
var text = e.options[e.selectedIndex].text;
// const totalStudentPages = Math.ceil(newStudent.length / rowPerPage);

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

// function updatePaginationBtns(totalPages, currentPage) {
//    paginationContainers.innerHTML = "";
//    for (let i = 1; i <= totalStudentPages; i++) {
//       const btn = document.createElement("button");
//       btn.innerText = i;
//       btn.className =
//          i === currentPage ? "pagination-btn  active" : "pagination-btn";
//       btn.addEventListener("click", () => {
//          currentPage = i;
//          console.log(currentPage);
//          updatePaginationBtns(totalStudentPages, currentPage);
//          showStudentsTable(currentPage);
//       });
//       paginationContainers.append(btn);
//       // paginationContainers[1].append(btn); //
//    }
// }
// function updatePaginationBtns(totalStudentPages, currentPage) {}
// updatePaginationBtns(totalSponsorPages, currentPage);
// updatePaginationBtns(totalStudentPages, currentPage);
//

// const paginationContainer = document.querySelector(".pagination-container");
// const studentsTable = document.getElementById("studens-table-body");

// newStudent = [];
// let currentPage = 1;
function changePage(page, totalPages) {
   console.log("Changing page to:", page); // Debugging statement
   if (page < 1 || page > totalPages) {
      return;
   }

   // console.log("Current page:", currentPage); // Debugging statement

   currentPage = page; // Update currentPage with the new page number
   createPagination(totalPages, currentPage);
   showStudentsTable();
}

// changePage(2);
// Initial setup
createPagination(totalPages, currentPage);
showStudentsTable();
function createPagination(totalPages, currentPage) {
   console.log("Creating pagination"); //
   let liTag = "";
   let active;
   let beforePage = currentPage - 1;
   let afterPage = currentPage + 1;

   if (currentPage > 1) {
      liTag += `<li class="pagination-btn prev" onclick="changePage(${
         currentPage - 1
      },${totalPages})">Prev</li>`;
   }

   if (currentPage > 2) {
      //if currentPage value is less than 2 then add 1 after the previous button
      liTag += `<li class="first pagination-btn numb" onclick="changePage(1,${totalPages})"><span>1</span></li>`;
      if (currentPage > 3) {
         //if currentPage value is greater than 3 then add this (...) after the first li or currentPage
         liTag += `<li class="dots pagination-btn"><span>...</span></li>`;
      }
   }

   // how many pages or li show before the current li
   if (currentPage == totalPages) {
      beforePage = beforePage - 2;
   } else if (currentPage == totalPages - 1) {
      beforePage = beforePage - 1;
   }
   // how many pages or li show after the current li
   if (currentPage == 1) {
      afterPage = afterPage + 2;
   } else if (currentPage == 2) {
      afterPage = afterPage + 1;
   }

   for (var plength = beforePage; plength <= afterPage; plength++) {
      if (plength > totalPages) {
         //if plength is greater than totalPage length then continue
         continue;
      }
      if (plength == 0) {
         //if plength is 0 than add +1 in plength value
         plength = plength + 1;
      }
      if (currentPage == plength) {
         //if currentPage is equal to plength than assign active string in the active variable
         active = "active";
      } else {
         //else leave empty to the active variable
         active = "";
      }
      liTag += `<li class="numb pagination-btn ${active}" onclick="changePage(${plength},${totalPages})"><span>${plength}</span></li>`;
   }

   if (currentPage < totalPages - 1) {
      //if currentPage value is less than totalPage value by -1 then show the last li or currentPage
      if (currentPage < totalPages - 2) {
         //if currentPage value is less than totalPage value by -2 then add this (...) before the last li or currentPage
         liTag += `<li class="dots pagination-btn"><span>...</span></li>`;
      }
      liTag += `<li class="last numb pagination-btn" onclick="changePage(${totalPages},${totalPages})"><span>${totalPages}</span></li>`;
   }

   if (currentPage < totalPages) {
      liTag += `<li class="btn next pagination-btn" onclick="changePage(${
         currentPage + 1
      },${totalPages})"><span>Next</span></li>`;
   }

   paginationContainers.innerHTML = liTag;
   // return liTag; //reurn the li tag
}

export function showStudentsTable() {
   console.log("Showing students table"); //
   studentsTable.innerHTML = ""; // Clear the table body
   const startIndex = (currentPage - 1) * rowsPerPage;
   const endIndex = Math.min(startIndex + rowsPerPage);
   const paginatedData = paginateArray(newStudent, rowsPerPage, currentPage);

   console.log(paginatedData, "dtable");
   const paginationInfoStudent = document.querySelector(
      ".pagination__info-student"
   );
   paginationInfoStudent.textContent =
      currentPage === totalPages
         ? `${newStudent.length}dan ${startIndex + 1}-${
              newStudent.length
           }ko'rsatilmoqda`
         : `${newStudent.length}dan ${
              startIndex + 1
           }-${endIndex}ko'rsatilmoqda`;

   paginatedData.forEach((student, i) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
             <td>${i + 1 + (totalPages - 1) * rowsPerPage}</td>
             <td class='student__name'>${student.name}</td>
             <td>${student.education_degree}</td>
             <td>${student.university}</td>
             <td>${student.allocated_money} <span>UZS</span></td>
             <td>${student.tuition_fee} <span>UZS</span></td>
             <td>
                 <img onclick="openStudentDetail(${
                    student.id
                 })" class="eye-icon" src="../../assets/img/eye.svg" alt="Eye icon" width="35" height="35">
             </td>
             `;
      studentsTable.appendChild(tr);
   });
}
// console.log(currentPage, rowsPerPage, totalPages);
