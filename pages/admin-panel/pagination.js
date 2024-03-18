"use strict";
export function paginateArray(
   array,
   rowsPerPage,
   currentPage,
   totalPages,
   paginationInfo
) {
   const startIndex = (currentPage - 1) * rowsPerPage;
   const endIndex = startIndex + rowsPerPage;
   totalPages = Math.ceil(array.length / rowsPerPage);
   const paginatedData = array.slice(startIndex, endIndex);

   paginationInfo.textContent =
      currentPage === totalPages
         ? `${array.length}dan ${startIndex + 1}-${array.length} ko‘rsatilmoqda`
         : `${array.length}dan ${startIndex + 1}-${endIndex} ko‘rsatilmoqda`;

   return paginatedData;
}
