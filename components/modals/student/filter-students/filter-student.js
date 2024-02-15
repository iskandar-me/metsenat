"use strict";

import { newStudent } from "../../../students/add-students/add-students.js";

const openStudentFilter = document.querySelector(".open-student-filter");
openStudentFilter.addEventListener("click", () => {
   document.querySelector(".filter-sponsors-form").classList.remove("hidden");
   document.querySelector(".overlay").classList.remove("hidden");
   document.body.style.overflow = "hidden";
});

// Get references to form elements
const educationDegreeSelect = document.getElementById("education-degree");
const universitySelect = document.getElementById("university");
const filterForm = document.querySelector(".filter-sponsors-form");
const showFilteredStudents = document.querySelector(".show-filtered-students");

// Add event listener to the form to handle submission
showFilteredStudents.addEventListener("click", function (event) {
   event.preventDefault(); // Prevent default form submission
   filterStudents(); // Call function to filter students based on form inputs
   closeModal();
   console.log("closed");
});

// Function to filter students based on form inputs
const selectedUniversity = universitySelect.value;
const selectedEducationDegree = educationDegreeSelect.value;
function filterStudents() {
   // Filter the studentsData array based on selected values
   const filteredStudents = newStudent.filter((student) => {
      if (selectedEducationDegree && selectedUniversity) {
         console.log(student);
         return (
            student.education_degree.trim().toLowerCase() ===
               selectedEducationDegree.trim().toLowerCase() &&
            student.university.trim().toLowerCase() ===
               selectedUniversity.trim().toLowerCase()
         );
      } else if (selectedEducationDegree) {
         return (
            student.education_degree.trim().toLowerCase() ===
            selectedEducationDegree.trim().toLowerCase()
         );
      } else if (selectedUniversity) {
         return (
            student.university.trim().toLowerCase() ===
            selectedUniversity.trim().toLowerCase()
         );
      } else {
         return true; // If no filters applied, return all students
      }
   });

   // Show the filtered data
   showFStudentsTable(filteredStudents);
}

// Function to display students in the table
function showFStudentsTable(filteredStudents) {
   const studentsTable = document.getElementById("studens-table-body");
   studentsTable.innerHTML = ""; // Clear previous table data

   // Iterate over filtered students and populate the table
   filteredStudents.forEach((student, index) => {
      const row = `
         <tr>
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.education_degree}</td>
            <td>${student.university}</td>
            <td>${student.allocated_money}</td>
            <td>${student.tuition_fee}</td>
            <td>
               <button onclick="openStudentDetail(${index})">
                  <img class="eye-icon" src="../../assets/img/eye.svg" alt="Eye icon" width="35" height="35">
               </button>
            </td>
         </tr>
      `;
      studentsTable.insertAdjacentHTML("beforeend", row);
   });
}
const clearButton = document.querySelector(".clear-btn");
clearButton.addEventListener("click", function (event) {
   // Reset the form to its initial state
   filterForm.reset();
});
