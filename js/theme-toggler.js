"use strict";
const themeToggler = document.getElementById("theme-toggler");

themeToggler.addEventListener("click", toggleTheme);

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
   document.body.classList.toggle("dark-theme");
}
function toggleTheme() {
   document.body.classList.toggle("dark-theme");

   localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-theme") ? "dark" : "light"
   );
}
