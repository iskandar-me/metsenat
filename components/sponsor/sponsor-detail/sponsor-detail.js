"use strict";
import { showSponsorsTable } from "../../../pages/admin-panel/sponsors-table.js";
import { sponsorsData } from "../../../js/data.js";

document.querySelector(".current-student-name").textContent = "okkkkk";

document.querySelector(".sponsor-detail-wrapper").classList.add("hidden");
document.querySelector(".container").style.display = "block";

document.querySelectorAll(".eye-icon").forEach((icon) => {
   icon.addEventListener("click", openSponsorDetail());
   // console.log(icon);
});

function openSponsorDetail(sponsorId) {
   document.querySelector(".sponsor-detail-wrapper").classList.remove("hidden");
   document.querySelector(".container").style.display = "none";
   console.log(sponsorsData, "fdghj,");
   const sponsor = sponsorsData.find((sponsor) => {
      return sponsor.id === sponsorId;
   });
   console.log(sponsor);

   document.querySelector(".current-sponsor-name").textContent = sponsor?.name;
   document.querySelector(".sponsor__status").textContent = sponsor?.status;
   document.querySelector(".sponsor-name").textContent = sponsor?.name;
   document.querySelector(".sponsor__tel-number").textContent =
      sponsor?.phoneNumber;
   document.querySelector(".sponsors-sponsorship-amount").textContent =
      sponsor?.sponsorshipSum;
   // document.querySelector('.sponsor-company').textContent=sponsor.
}

document.querySelector(".sponsor-detail-wrapper").classList.add("hidden");
document.querySelector(".container").style.display = "block";
