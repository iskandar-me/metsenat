"use strict";
import { sponsorsData } from "../../js/data.js";
import { openSponsorDetail } from "../../components/sponsor/sponsor-detail/sponsor-detail.js";
import { scrollToTop } from "./students-table.js";
import { paginateArray } from "./pagination.js";

const sponsorsTable = document.getElementById("sponsors-table-body");

const sponsorPagionationInfo = document.querySelector(
   ".pagination__info-sponsor"
);
const sponsorPaginationCount = document.querySelector(
   ".sponsor__pagination-count"
);
const sponsorsPaginationContainer = document.querySelector(
   ".sponsors__pagination-container"
);

let currentPage = 1,
   rowsPerPage,
   totalPages;

if (sponsorsData.length) {
   showSponsorsTable(currentPage);
} else {
   sponsorsTable.innerHTML = `<tr>
         <td colspan="8" >
         <span class="no-data">
         Homiylar mavjud emas</td>
         </span>
         </tr>`;
   document.querySelectorAll(".pagination")[0].innerHTML = "";
}

sponsorPaginationCount.addEventListener("change", () => {
   let selectedValue = parseInt(sponsorPaginationCount.value);
   let rowsPerPage = selectedValue;
   currentPage = 1;
   paginateArray(
      sponsorsData,
      rowsPerPage,
      currentPage,
      totalPages,
      sponsorPagionationInfo
   );
   showSponsorsTable(currentPage);
   generatePagination(currentPage, sponsorsPaginationContainer);
});

generatePagination(currentPage, sponsorsPaginationContainer);

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

   generatePagination(currentPage, sponsorsPaginationContainer);
   showSponsorsTable(currentPage);
}

export function showSponsorsTable(currentPage) {
   sponsorsTable.innerText = "";

   rowsPerPage = parseInt(sponsorPaginationCount.value);
   totalPages = Math.ceil(sponsorsData.length / rowsPerPage);
   const paginatedData = paginateArray(
      sponsorsData,
      rowsPerPage,
      currentPage,
      totalPages,
      sponsorPagionationInfo
   );
   paginatedData.forEach((sponsor, i) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
      <td>${i + 1 + (currentPage - 1) * rowsPerPage}</td>
      <td>${
         sponsor.name.length <= 25
            ? sponsor.name
            : sponsor.name.substring(0, 25) + "..."
      }</td>
      <td><a href="tel:${sponsor.phone_number}">${sponsor.phone_number}</a></td>
      <td>${sponsor.sponsorship_sum}</td>
      <td>${sponsor.used_sum} UZS</td>
      <td>${sponsor.date}</td>
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
