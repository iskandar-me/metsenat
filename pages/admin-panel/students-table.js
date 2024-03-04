"use strict";
import { studentsData } from "../../components/students/add-students/add-students.js";
// i { openStudentsDetail } from "../../components/students/student-detail/student-detail.js";

const studentsTable = document.getElementById("studens-table-body");
const studentPagionationInfo = document.querySelector(
   ".pagination__info-student"
);
const studentPaginationCount = document.querySelector(
   ".student__pagination-count"
);
const studentsPaginationContainer = document.querySelector(
   ".students__pagination-container"
);
let currentPage = 1;
let rowsPerPage, totalPages;

if (studentsData.length) {
   showStudentsTable(currentPage);
} else {
   studentsTable.innerHTML = `<tr>
   <td colspan="7" class="no-data">No data</td>
   </tr>`;
}

studentPaginationCount.addEventListener("change", () => {
   var selectedValue = parseInt(studentPaginationCount.value);
   let rowsPerPage = selectedValue;
   currentPage = 1;
   const startIndex = (currentPage - 1) * rowsPerPage;
   const endIndex = startIndex + rowsPerPage;
   totalPages = Math.ceil(studentsData.length / rowsPerPage); // Calculate total pages

   console.log(totalPages, "total pages");
   console.log(rowsPerPage, "rows per page");
   console.log(studentsData.length, "students");
   showStudentsTable(currentPage);
   generatePagination(currentPage);
   // location.reload();
   studentPagionationInfo.textContent =
      currentPage === totalPages
         ? `${studentsData.length}dan ${
              startIndex + 1
           }-${totalPages} ko‘rsatilmoqda`
         : `${studentsData.length}dan ${
              startIndex + 1
           }-${endIndex} ko‘rsatilmoqda`;
});

function paginateArray(array, rowsPerPage, currentPage, totalPages) {
   const startIndex = (currentPage - 1) * rowsPerPage;
   const endIndex = startIndex + rowsPerPage;
   const paginatedData = array.slice(startIndex, endIndex);

   studentPagionationInfo.textContent =
      currentPage === totalPages
         ? `${studentsData.length}dan ${startIndex + 1}-${
              studentsData.length
           } ko‘rsatilmoqda`
         : `${studentsData.length}dan ${
              startIndex + 1
           }-${endIndex} ko‘rsatilmoqda`;

   console.log(
      paginatedData,
      "paginated data",
      startIndex + 1,
      "dan",
      endIndex,
      "gacha in Paginated Data"
   );
   return paginatedData;
}

function generatePagination(currentPage) {
   let paginationHtml = "";
   paginationHtml += `<button id="prev" type="button" class="arrow-icon">
   <img src="../../assets/img/arrow-icons/arrow-left.svg" alt='Left arrow icon' width="24" height='24'>

   </button>`;

   for (let i = 1; i <= totalPages; i++) {
      if (
         i === 1 ||
         i === totalPages ||
         (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
         paginationHtml += `<button class="pagination-btn ${
            i === currentPage ? "active" : ""
         }" data-page="${i}">${i}</button>`;
      } else if (i === currentPage - 2 || i === currentPage + 2) {
         paginationHtml += `<button class="pagination-btn dots">...</button>`;
      }
   }

   paginationHtml += `<button id="next" class="arrow-icon">
   <img src="./../../assets/img/arrow-icons/arrow-right.svg" alt="Right arrow icon" width="24" height='24'>

   </button>`;

   studentsPaginationContainer.innerHTML = paginationHtml;

   if (currentPage === 1) {
      document.getElementById("prev").style.pointerEvents = "none";
   } else if (currentPage === totalPages) {
      document.getElementById("next").style.pointerEvents = "none";
   }

   // Add event listener for "Prev" button
   document.getElementById("prev").addEventListener("click", function (event) {
      event.preventDefault();
      handlePaginationClick("prev", currentPage);
      scrollToTop();
   });

   // Add event listeners for numbered pages
   const paginationBtns = document.querySelectorAll(".pagination-btn");
   paginationBtns.forEach((btn) => {
      btn.addEventListener("click", function (event) {
         event.preventDefault();
         const btnNumber = parseInt(event.target.getAttribute("data-page"));
         handlePaginationClick(btnNumber, currentPage);
         scrollToTop();
      });
   });

   // Add event listener for "Next" button
   document.getElementById("next").addEventListener("click", function (event) {
      event.preventDefault();
      handlePaginationClick("next", currentPage);
      scrollToTop();
   });
}

function handlePaginationClick(targetPage, currentPage) {
   if (targetPage === "prev") {
      currentPage = currentPage > 1 ? currentPage - 1 : 1;
   } else if (targetPage === "next") {
      currentPage = currentPage < totalPages ? currentPage + 1 : totalPages;
   } else {
      currentPage = targetPage; // If it's a number button, set currentPage directly
   }

   generatePagination(currentPage);
   showStudentsTable(currentPage);
}

export function showStudentsTable(currentPage) {
   studentsTable.innerHTML = "";
   rowsPerPage = parseInt(studentPaginationCount.value);
   totalPages = Math.ceil(studentsData.length / rowsPerPage);

   const paginatedData = paginateArray(
      studentsData,
      rowsPerPage,
      currentPage,
      totalPages
   );

   paginatedData.forEach((student, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
                   <td>${index + 1 + (currentPage - 1) * rowsPerPage}</td>
                   <td class='student__name'>${student.name}</td>
                   <td>${student.education_degree}</td>
                   <td>${student.university}</td>
                   <td>${student.allocated_money} <span>UZS</span></td>
                   <td>${student.tuition_fee} <span>UZS</span></td>
                   <td>
                       <img onclick="openStudentsDetail(${
                          student.id
                       })" class="eye-icon" src="../../assets/img/eye.svg" alt="Eye icon" width="35" height="35">
                   </td>
                   `;
      tr.classList.add("trow");
      studentsTable.appendChild(tr);
   });
}

generatePagination(currentPage);

// Function to scroll to the top of the page smoothly
function scrollToTop() {
   window.scrollTo({
      top: 150,
      behavior: "smooth",
   });
}
