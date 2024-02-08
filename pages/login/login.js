"use strict";
const loginForm = document.querySelector(".login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const user = {
   username: "metsenatadmin",
   password: "uF9aH1vZ3bV2kN2y",
};

loginForm.addEventListener("submit", (e) => {
   const captchaResponse = grecaptcha.getResponse();
   e.preventDefault();

   if (!usernameInput.value.length > 0) {
      usernameInput.classList.add("error");
   } else {
      usernameInput.classList.remove("error");
   }

   if (!passwordInput.value.length > 0) {
      passwordInput.classList.add("error");
   } else if (
      passwordInput.value.toLowerCase() == user.password.toLowerCase()
   ) {
      passwordInput.classList.add("error");
      showErrorMessage("error-password-message", "Parol xato");
   } else {
      passwordInput.classList.remove("error");
   }

   if (!captchaResponse.length > 0) {
      throw new Error("Captcha is not completed");
   }

   //
   if (
      captchaResponse.length > 0 &&
      usernameInput.value.toLowerCase() == user.username.toLowerCase() &&
      passwordInput.value.toLowerCase() == user.password.toLowerCase()
   ) {
      window.location.href = "../../pages/admin-panel/admin-panel.html";
   } else {
      console.log("invalid");
   }
   //  if (usernameInput.value.toLowerCase() !== user.username.toLowerCase()) {
   //     showErrorMessage("error-username-message", "Foydalanuvchi nomi xato");
   //  }
});

usernameInput.addEventListener("keyup", (e) => {
   if (!e.target.value > 0) {
      usernameInput.setAttribute("class", "error input");
   }
});

passwordInput.addEventListener("keyup", (e) => {
   if (!e.target.value > 0) {
      passwordInput.setAttribute("class", "error input");
   }
});

function showErrorMessage(where, message) {
   document.querySelector(`${where}`).textContent = message;
   setTimeout(() => {
      document.querySelector(`${where}`).textContentText = "";
   }, 2000);
}
// Parol xato
// Foydalanuvchi nomi xato
