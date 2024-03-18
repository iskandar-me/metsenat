import { studentsData } from "../../components/students/add-students/add-students.js";
import { paginateArray } from "./pagination.js";
// import { openStudentsDetail } from "../../components/students/student-detail/students-detail.js";

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

if (studentsData.length >  0) {
   showStudentsTable(currentPage);
} else {
   studentsTable.innerHTML = `<tr>
   <td colspan="7" ><span class="no-data" >
   Tabalalar mavjud emas
   </span>

   `;
   document.querySelectorAll(".pagination")[1].style.display = "none";
}

studentPaginationCount.addEventListener("change", () => {
   var selectedValue = parseInt(studentPaginationCount.value);
   let rowsPerPage = selectedValue;
   currentPage = 1;
   paginateArray(
      studentsData,
      rowsPerPage,
      currentPage,
      totalPages,
      studentPagionationInfo
   );
   showStudentsTable(currentPage);
   generatePagination(currentPage, studentsPaginationContainer);
});

generatePagination(currentPage, studentsPaginationContainer);
function generatePagination(currentPage, container) {
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

   container.innerHTML = paginationHtml;

   if (currentPage === 1) {
      document.getElementById("prev").style.pointerEvents = "none";
   } else if (currentPage === totalPages) {
      document.getElementById("next").style.pointerEvents = "none";
   } else if (totalPages === 1) {
      document.getElementById("prev").style.pointerEvents = "none";
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

   generatePagination(currentPage, studentsPaginationContainer);
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
      totalPages,
      studentPagionationInfo
   );
   paginatedData.forEach((student, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
                   <td>${index + 1 + (currentPage - 1) * rowsPerPage}</td>
                   <td class='student__name'>${
                      student.name.length <= 30
                         ? student.name
                         : student.name.substring(0, 30) + "..."
                   }</td>
                   <td>${student.education_degree}</td>
                   <td>${student.university}</td>
                   <td>${student.allocated_money} <span>UZS</span></td>
                   <td>${student.tuition_fee} <span>UZS</span></td>
                   <td>
                       <img onclick="openStudentsDetail(${
                          student.id
                       })" class="eye-icon studentsDetailIcon" src="../../assets/img/eye.svg" alt="Eye icon" width="35" height="35">
                   </td>
                   `;
      tr.classList.add("trow");
      studentsTable.appendChild(tr);
   });
}

// Function to scroll to the top of the page smoothly
export function scrollToTop() {
   window.scrollTo({
      top: 150,
      behavior: "smooth",
   });
}

document.querySelectorAll(".to-back").forEach((btn) => {
   btn.addEventListener("click", () => {
      document.querySelector(".student-detail-wrapper").classList.add("hidden");
      document.querySelector(".container").style.display = "block";
      document.querySelector(".add-student-page").classList.add("hidden");
      document.querySelector(".sponsor-detail-wrapper").classList.add("hidden");
   });
});
