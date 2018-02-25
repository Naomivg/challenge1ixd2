Chart.defaults.global.defaultFontColor = '#ffffff';
Chart.defaults.global.defaultFontFamily = 'Mashine';

//FUEL
var ctx = document.getElementById("fuelChart");
var myFuelChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: 'Fuel',
            data: [12, 12, 12],
            backgroundColor: [
                '#EF5F26',
                '#84ED6E',
                '#74FFF2',
            ],
            borderColor: [
                '#EF5F26',
                '#84ED6E',
                '#74FFF2',
            ],
            borderWidth: 1
        }]
    },
    options: {
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI
    }
});

//USED FUEL
var ctx = document.getElementById('usageFuelChart').getContext('2d');
var myBarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels:[ 'Usage 1 hour', 'Used today'],
        datasets:[{
            data: [62500, 150000],
            backgroundColor: ['#EF5F26', '#C13A0A'],
        }]
    },

    options:{
        legend: {
            display: false,
        },
    },
});

 Chart.pluginService.register({
  beforeDraw: function (chart) {
    if (chart.config.options.elements.center) {
      //Get ctx from string
      var ctx = chart.chart.ctx;

      //Get options from the center object in options
      var centerConfig = chart.config.options.elements.center;
      var fontStyle = centerConfig.fontStyle || 'Arial';
      var txt = centerConfig.text;
      var color = centerConfig.color || '#000';
      var sidePadding = centerConfig.sidePadding || 20;
      var sidePaddingCalculated = (sidePadding/100) * (chart.innerRadius * 2)
      //Start with a base font of 30px
      ctx.font = "30px " + fontStyle;

      //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
      var stringWidth = ctx.measureText(txt).width;
      var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

      // Find out how much the font can grow in width.
      var widthRatio = elementWidth / stringWidth;
      var newFontSize = Math.floor(30 * widthRatio);
      var elementHeight = (chart.innerRadius * 2);

      // Pick a new font size so it will not be larger than the height of label.
      var fontSizeToUse = Math.min(newFontSize, elementHeight);

      //Set font settings to draw it correctly.
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
      var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
      ctx.font = fontSizeToUse+"px " + fontStyle;
      ctx.fillStyle = color;

      //Draw text in center
      ctx.fillText(txt, centerX, centerY);
    }
  }
});

//FOOD
//BREAD
var ctx = document.getElementById('breadChart').getContext('2d');
var breakfastChart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        datasets: [{
            label: ['Left', 'Used'],
            data: [3000, 1000],
            backgroundColor: ['#74FFF2', '#37CCB6' ],
            borderWidth: 0,
        }],
    },

    // Configuration options go here
    options: {
        elements: {
          center: {
          text: '3000 pieces left',
          color: '#ffffff', //Default black
          fontStyle: 'Mashine', //Default Arial
          sidePadding: 20 //Default 20 (as a percentage)
        }
    }
    }
});

//VEGGIES
var ctx = document.getElementById('vegetablesChart').getContext('2d');
var veggiesChart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        datasets: [{
            label: "Food",
            data: [1500, 1000],
            backgroundColor: ['#84ED6E', '#52B53A'],
            borderWidth: 0,
        }]
    },

    // Configuration options go here
    options: {
        elements: {
          center: {
          text: '3000 pieces left',
          color: '#ffffff', //Default black
          fontStyle: 'Mashine', //Default Arial
          sidePadding: 20 //Default 20 (as a percentage)
        }
    }
    }
});

//MEAT
var ctx = document.getElementById('meatChart').getContext('2d');
var animalchart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        datasets: [{
            label: "Food",
            data: [1000, 1200],
            backgroundColor: ['#EF5F26', '#C13A0A'],
            borderWidth: 0,
        }]
    },

    // Configuration options go here
    options: {
        elements: {
          center: {
          text: '3000 pieces left',
          color: '#ffffff', //Default black
          fontStyle: 'Mashine', //Default Arial
          sidePadding: 20 //Default 20 (as a percentage)
        }
    }
    }
});

//USAGE FOOD
var ctx = document.getElementById('usageFoodChart').getContext('2d');
var usedFoodChart = new Chart(ctx, {
    type: 'bar',
    data:{
        labels:[ 'Bread','Vegetables','Meat'],
        datasets:[{
            label:'Used food today',
            data:[
                100,
                1200,
                1300,
            ],
            backgroundColor:['#74FFF2','#84ED6E', '#EF5F26'],
        }],
    },

    options: {
        title:{
            display: true,
            text: 'Used food today',
            fontSize: 15,
            fontColor: '#ffffff',
        },
        legend: {
            display: false,
        },
        layout: {
            padding: {
                left: 50,
                right: 0,
            }
        }   
    },
})

//DISTANCE AND TIME
var ctx = document.getElementById('distanceChart').getContext('2d');
var distancetimeChart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [{
            backgroundColor: '#84ED6E',
            borderColor: '#74FFF2',
            data: [0, 10568, 35497, 40238, 48623, 60000, 75634, 86372, 94873, 115894, 150000],
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false,
        },
    },
});

//TRAVELLED DISTANCE
var ctx = document.getElementById('travelledChart').getContext('2d');
var myBarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels:[ 'Travelled in 1 hour', 'Travelled today'],
        datasets:[{
            data: [2590, 62548],
            backgroundColor: ['#EF5F26', '#C13A0A'],
        }]
    },

    options:{
        legend: {
            display: false,
        },
    },
});
