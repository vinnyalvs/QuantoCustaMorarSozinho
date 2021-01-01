// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';
var chart;
updateChart();




function getFixCosts(){
  var cost = 0;
    for (let i=1;i<=4;i++){
        if(!isNaN(parseInt(document.getElementById("fixCost" + i).value)))
            cost  += parseInt(document.getElementById("fixCost" + i).value) ;
    } 
  return cost;
  

}

function getVarCosts(){
  var cost = 0;
    for (let i=1;i<=8;i++){
        if(!isNaN(parseInt(document.getElementById("variableCost" + i).value)))
            cost  += parseInt(document.getElementById("variableCost" + i).value) ;
    } 
  return  cost;
}




function updateChart() {
  let canvas = document.getElementById("myPieChart");
    let fixCosts = getFixCosts();
    let varCosts = getVarCosts();
    let valuesSum = fixCosts + varCosts;
    if(valuesSum == 0 ) {
      let ctx = canvas.getContext("2d");
      // ctx.font = "30px Nunito Arial";
      // ctx.fillText("Preencha o formulário para ver análise", 100, 100);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = "100px 'Helvetica' 'Bold'";
     
      ctx.fillText("Ainda não há dados suficientes para gerar gráficos", canvas.width / 2, canvas.height / 2);
    } 
    else {
        chart = new Chart(canvas, {
          type: 'bar',
          data: {
              labels:  ['Custos Fixos', 'Custos Variáveis'],
              datasets: [{
                  borderWidth: 1,
                  data: [fixCosts,varCosts],
                  backgroundColor: ['#4e73df', '#1cc88a'],
                  hoverBackgroundColor: ['#2e59d9', '#17a673'],
                  hoverBorderColor: "rgba(234, 236, 244, 1)",
              }]
          },
          options: {
              maintainAspectRatio: false,
              legend: {
                display: false
              },
              title: {
                  display: true,
                  text: 'Gastos Mensais',
                  fontSize: 30,
              },
              scales: {
                  // xAxes: [{
                  //     ticks: {
                      
                  //     }
                  // }],
                  yAxes: [{
                      ticks: {
                          beginAtZero: true,
                          // stepSize:valuesSum/4, //Fixa os ticks em 0, 25%, 50%, 75% e 100%
                          // max: valuesSum,
                          // callback: function (value) {
                          //     return (value / valuesSum * 100).toFixed(0) + '%'; // convert it to percentage
                          // },
                      }
                  }]
              },
              tooltips: {
                  intersect: true,
                  callbacks: {
                      label: function(tooltipItem) { // No Tooltip mostra a porcentagem de um formato visto
                          return (tooltipItem.yLabel/valuesSum * 100).toFixed(0) + '% dos gastos' ;
                      }
                  }
              },
              hover: {
                  mode: 'nearest',
                  intersect: true
              },
          }
      }); 
  }
}

