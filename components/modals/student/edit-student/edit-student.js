"use strict";
import { studentsData } from "../../../students/add-students/add-students.js";
// import { openStudentsDetail } from "../../../students/student-detail/students-detail.js";
import { showStudentsTable } from "../../../../pages/admin-panel/students-table.js";

const editStudentBtn = document.querySelector(".edit-student-btn");
let editId;

editStudentBtn.addEventListener("click", () => {
   document.querySelector(".edit-student-modal").classList.remove("hidden");
   document.querySelector(".overlay").classList.remove("hidden");
   document.body.style.overflow = "hidden";
   window.scrollTo({
      top: 0,
   });

   openEditStudentModal();
});
function openEditStudentModal() {
   // Get the ID of the student to edit
   editId = parseInt(document.querySelector(".edit-student-btn").value);

   // Find the index of the student in the array
   const editedStudentIndex = studentsData.findIndex(
      (student) => student.id === editId
   );

   console.log(editedStudentIndex, "in edit student index btn");

   if (editedStudentIndex !== -1) {
      const editedStudent = studentsData[editedStudentIndex];
      document.querySelector(".edited-student__fullname").value =
         editedStudent.name;
      document.querySelector(".edited-student__number").value =
         editedStudent.phone_number;
      document.querySelector(".edited-student__university").value =
         editedStudent.university;
      document.querySelector(".edited-student__tuition-fee").value =
         editedStudent.tuition_fee.replace("UZS", "");
   }
}
// Function to save the edited student data
function saveEditedStudent() {
   // Get the edited values from the form
   const editedFullname = document.querySelector(
      ".edited-student__fullname"
   ).value;
   const editedPhoneNumber = document.querySelector(".edited-student__number")
      .value
      ? document.querySelector(".edited-student__number").value
      : "XX YYY YY-YY";
   const editedUniversity = document.querySelector(
      ".edited-student__university"
   ).value;
   const editedTuitionFee =
      document.querySelector(".edited-student__tuition-fee").value + " UZS";

   // Update the student data
   const editedStudentIndex = studentsData.findIndex(
      (student) => student.id === editId
   );
   console.log(editedStudentIndex, "  student index updated");
   let allocated_money = studentsData[editedStudentIndex].allocated_money;
   let education_degree = studentsData[editedStudentIndex].education_degree;
   if (editedStudentIndex !== -1) {
      studentsData[editedStudentIndex] = {
         id: editId,
         name: editedFullname,
         phone_number: editedPhoneNumber,
         university: editedUniversity,
         tuition_fee: editedTuitionFee,
         allocated_money: allocated_money,
         education_degree: education_degree,
      };
      console.log("Student edited successfully.");
      console.log("edited " + studentsData[editedStudentIndex].name);
      localStorage.setItem("students", JSON.stringify(studentsData));
   } else {
      console.error("Student not found for editing.");
   }
}

document
   .querySelector(".save-edited-student-btn")
   .addEventListener("click", () => {
      // Close the edit modal
      document.querySelector(".edit-student-modal").classList.add("hidden");
      document.querySelector(".overlay").classList.add("hidden");
      document.body.style.overflow = "initial";
      saveEditedStudent();
      openStudentsDetail(editId);
      showStudentsTable(1);
      // location.reload();
   });
