"use strict";
function openTab(e, tabname) {
   const tablinks = document.querySelectorAll(".tablinks");
   const tabcontents = document.querySelectorAll(".tab-content");
   let i;
   for (i = 0; i < tabcontents.length; i++) {
      tabcontents[i].style.display = "none";
   }
   for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active","");
   }

   document.getElementById(tabname).style.display = "block";
   e.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#feaada";
ctx.fillRect(0, 0, 250, 155);
ctx.moveTo(10, 10);

ctx.lineTo(10,120);
ctx.lineWidth =15
canvas.lineCap = "square";
ctx.strokeStyle='green';
ctx.stroke()
ctx.beginPath();
ctx.arc(120,70,50,0,6.28)
ctx.strokeStyle='#fefefe'
ctx.lineWidth =5
ctx.stroke()
