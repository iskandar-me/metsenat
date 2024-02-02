"use strict";
import { sponsorsData, studentsData } from "../../js/data.js";
const sponsorsTable = document.getElementById("sponsors-table-body");
const studentsTable = document.getElementById("studens-table-body");
// console.log(sponsorsTable.textContent);
console.log(sponsorsData);
if (sponsorsData.length) showSponsorsTable();
function showSponsorsTable() {
   sponsorsTable.innerText = "";
   sponsorsData.forEach((sponsor, i) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
     <td>${++i}</td>
     <td>${sponsor.name}</td>
     <td>${sponsor.phoneNumber}</td>
     <td>${sponsor.sponsorshipSum}</td>
     <td>${sponsor.usedSum} UZS</td>
     <td>${sponsor.sana}</td>
     <td class="sponsor-status">${sponsor.status}</td>
     <td>
     <img onclick="openSponsorDetail(${
        sponsor.id
     })" class="eye-icon" src="../../assets/img/eye.svg" alt="Eye icon" width="35" height="35">
     </td>
     `;
      sponsorsTable.append(tr);
   });
}

const newStudent = JSON.parse(localStorage.getItem("students"));
console.log(newStudent);
if (newStudent.length) showStudentsTable();
function showStudentsTable() {
   studentsTable.innerText = "";
   newStudent.forEach((student, i) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
     <td>${++i}</td>
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
