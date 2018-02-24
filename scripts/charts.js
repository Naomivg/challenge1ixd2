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

//FOOD
//BREAD
var ctx = document.getElementById('breadChart').getContext('2d');
var breakfastChart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        datasets: [{
            label: 'Food',
            data: [3000, 1000],
            backgroundColor: ['#74FFF2', '#37CCB6' ],
            borderWidth: 0,
        }],
    },

    // Configuration options go here
    options: {
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
    options: {}
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
