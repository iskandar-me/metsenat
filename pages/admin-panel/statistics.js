var ctx = document.getElementById("lineChart").getContext("2d");

var lineChart = new Chart(ctx, {
   type: "line",
   data: {
      labels: [
         "Yanvar",
         "Fevral",
         "Mart",
         "Aprel",
         "May",
         "Iyun",
         "Iyul",
         "Avgust",
         "Sentyabr",
         "Oktyabr",
         "Noyabr",
         "Dekabr",
      ],
      datasets: [
         {
            label: "Homiylar",
            tension: 0.4,
            data: [
               100, 1000, 4000, 5000, 7000, 4000, 6000, 8000, 7000, 9000, 6000,
               8000,
            ],
            pointRadius: 0,
            borderColor: "#4C6FFF",
            fill: false,
         },
         {
            label: "Talabalar",
            tension: 0.4,
            pointRadius: 0,
            data: [
               200, 1000, 3000, 4000, 2000, 5000, 4000, 6000, 3000, 5000, 6000,
               8000,
            ],
            borderColor: "#FF92AE",
            fill: false,
         },
      ],
   },
   options: {
      scales: {
         yAxes: [
            {
               ticks: {
                  beginAtZero: true,
                  stepSize: 10000,
               },
            },
         ],
      },
   },
});
