"use strict";
const editStudentBtns = document.querySelectorAll('.edit-student-btn')

editStudentBtns.forEach((btn) => {
   btn.addEventListener('click', () => {
      document.querySelector('.edit-student-modal').classList.remove('hidden')
      document.querySelector('.overlay').classList.remove('hidden')
      document.body.style.overflow = 'hidden'
   })
})