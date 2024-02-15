"use strict";
// selecting required element
const paginationContainers = document.querySelectorAll(".pagination-container")[0];
let totalPages = 20;
let currentPage = 1;

//calling function with passing parameters and adding inside element which is ul tag
paginationContainers.innerHTML = createPagination(totalPages, currentPage);
function createPagination(totalPages, currentPage) {
   let liTag = "";
   let active;
   let beforePage = currentPage - 1;
   let afterPage = currentPage + 1;
   if (currentPage > 1) {
      //show the next button if the currentPage value is greater than 1
      liTag += `<li class="btn prev" onclick="createPagination(totalPages, ${
         currentPage - 1
      })"><span><i class="fas fa-angle-left"></i> Prev</span></li>`;
   }

   if (currentPage > 2) {
      //if currentPage value is less than 2 then add 1 after the previous button
      liTag += `<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
      if (currentPage > 3) {
         //if currentPage value is greater than 3 then add this (...) after the first li or currentPage
         liTag += `<li class="dots"><span>...</span></li>`;
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
      liTag += `<li class="numb ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;
   }

   if (currentPage < totalPages - 1) {
      //if currentPage value is less than totalPage value by -1 then show the last li or currentPage
      if (currentPage < totalPages - 2) {
         //if currentPage value is less than totalPage value by -2 then add this (...) before the last li or currentPage
         liTag += `<li class="dots"><span>...</span></li>`;
      }
      liTag += `<li class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
   }

   if (currentPage < totalPages) {
      //show the next button if the currentPage value is less than totalPage(20)
      liTag += `<li class="btn next" onclick="createPagination(totalPages, ${
         currentPage + 1
      })"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
   }
   element.innerHTML = liTag; //add li tag inside ul tag
   return liTag; //reurn the li tag
}
