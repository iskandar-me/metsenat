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
   } else if (
      usernameInput.value.toLowerCase() !== user.username.toLowerCase()
   ) {
      usernameInput.classList.add("error");
   } else {
      usernameInput.classList.remove("error");
      usernameInput.classList.add("success");
   }

   if (!passwordInput.value.length > 0) {
      passwordInput.classList.add("error");
   } else if (
      passwordInput.value.toLowerCase() !== user.password.toLowerCase()
   ) {
      passwordInput.classList.add("error");
      // showErrorMessage("error-password-message", "Parol xato");
   } else {
      passwordInput.classList.remove("error");
      passwordInput.classList.add("success");
   }

   let recaptchaMessage = document.querySelector(".recaptcha__message");
   if (!captchaResponse || !captchaResponse.length > 0) {
      recaptchaMessage.style.display = "block";
      throw new Error("Captcha is not completed");
   } else {
      recaptchaMessage.style.display = "none";
   }

   //
   if (
      captchaResponse.length > 0 &&
      usernameInput.value.toLowerCase() == user.username.toLowerCase() &&
      passwordInput.value.toLowerCase() == user.password.toLowerCase()
   ) {
      setTimeout(() => {
         window.location.href = "../../pages/admin-panel/admin-panel.html";
      }, 300);
   } else {
      console.log("invalid");
   }
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

// function showErrorMessage(where, message) {
//    document.querySelector(`${where}`).textContent = message;
//    setTimeout(() => {
//       document.querySelector(`${where}`).textContentText = "";
//    }, 2000);
// }
// Parol xato
// Foydalanuvchi nomi xato
