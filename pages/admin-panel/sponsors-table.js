"use strict";
import { sponsorsData } from "../../js/data.js";
import { openSponsorDetail } from "../../components/sponsor/sponsor-detail/sponsor-detail.js";
const sponsorsTable = document.getElementById("sponsors-table-body");

const paginationContainers = document.querySelectorAll(".pagination-container");
const element = document.querySelector(".pagination-container");

let currentPage = 1;
// let sponsorsData = [];
export function showSponsorsTable(currentPage) {
   const rowPerPage = 10;
   const paginatedData = paginateArray(sponsorsData, rowPerPage, currentPage);
   sponsorsTable.innerText = "";
   paginatedData.forEach((sponsor, i) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
      <td>${i + 1 + (currentPage - 1) * rowPerPage}</td>
      <td>${sponsor.name}</td>
      <td><a href="tel:${sponsor.phoneNumber}">${sponsor.phoneNumber}</a></td>
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

// PAGINATION

var e = document.getElementById("pagination-count");
var value = e.value;
var text = e.options[e.selectedIndex].text;
const rowPerPage = 10;

const totalSponsorPages = Math.ceil(sponsorsData.length / rowPerPage);

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

   return paginatedData;
}

// function createPagination(totalPages, currentPage) {
//    let btn = "";
//    let active;
//    let beforePage = currentPage - 1;
//    let afterPage = currentPage + 2;

//    if (currentPage > 1) {
//       btn += `<button class="pagination-btn" onclick="showSponsorsTable(${
//          currentPage - 1
//       })"><img src="../../assets/img/arrow-icons/arrow-left.svg"><</button>`;
//    }

//    if (currentPage > 2) {
//       btn += `<button class="first pagination-btn" onclick="showSponsorsTable(1)">1</button>`;

//       if (currentPage > 3) {
//          btn += `<button class="pagination-btn dots">...</button>`;
//       }
//    }

//    if (currentPage == totalPages) {
//       beforePage = beforePage - 0;
//    } else if (currentPage == totalPages - 1) {
//       beforePage = beforePage - 0;
//    }

//    if (currentPage == 1 || currentPage == 2) {
//       afterPage = afterPage + 1;
//    }

//    for (let plength = beforePage; plength < afterPage; plength++) {
//       if (plength > totalPages) continue;
//       if (plength == 0) {
//          plength = plength + 1;
//       }
//       if (currentPage === plength) {
//          active = "active";
//       } else {
//          active = "";
//       }
//       btn += `<button class="pagination-btn ${active}" onclick="showSponsorsTable(${plength})">${plength}</button>`;
//    }

//    if (currentPage < totalPages - 1) {
//       if (currentPage < totalPages - 1) {
//          btn += `<button class="pagination-btn dots">...</button>`;
//       }
//       btn += `<button class="pagination-btn" onclick="showSponsorsTable(${totalPages})">${totalPages}</button>`;
//    }

//    if (currentPage < totalPages) {
//       btn += `<button class="pagination-btn" onclick="showSponsorsTable(${
//          currentPage + 1
//       })"><img src='../../assets/img/arrow-icons/arrow-right.svg'>></button>`;
//    }

//    paginationContainers[0].innerHTML = btn;
//    return btn;
// }
// selecting required element
// let totalPages = 20;
// let currentPage = 10;

// paginationContainers[0].innerHTML = createPagination(
//    totalSponsorPages,
//    currentPage
// );

// function updatePaginationBtns(totalPages, currentPage) {
//    paginationContainers[0].innerHTML = "";
//    for (let i = 1; i <= totalSponsorPages; i++) {
//       const btn = document.createElement("button");
//       btn.innerText = i;
//       btn.className = i === currentPage ? "current-page" : "";
//       btn.addEventListener("click", () => {
//          currentPage = i;

//          console.log(currentPage);
//          updatePaginationBtns(totalStudentPages, currentPage);
//          updatePaginationBtns(totalSponsorPages, currentPage);
//          showSponsorsTable(currentPage);
//          showStudentsTable(currentPage);
//       });
//       // paginationContainers[0].innerHTML = createPagination(
//       //    totalSponsorPages,
//       //    currentPage
//       // );
//       paginationContainers[0].append(btn); //
//    }
// }

// function updatePaginationBtns(totalStudentPages, currentPage) {}
// updatePaginationBtns(totalSponsorPages, currentPage);
// updatePaginationBtns(totalStudentPages, currentPage);

function updatePaginationBtns(totalPages, currentPage) {
   paginationContainers[0].innerHTML = "";
   for (let i = 1; i <= totalSponsorPages; i++) {
      const btn = document.createElement("button");
      btn.innerText = i;
      btn.className =
         i === currentPage ? "pagination-btn  active" : "pagination-btn";
      btn.addEventListener("click", () => {
         currentPage = i;
         updatePaginationBtns(totalSponsorPages, currentPage);
         showSponsorsTable(currentPage);
      });
      paginationContainers[0].append(btn);
   }
}
updatePaginationBtns(totalSponsorPages, currentPage);
// updatePaginationBtns(totalStudentPages, currentPage);
