var trafficchart = document.getElementById("trafficflow");
var saleschart = document.getElementById("sales");

// new
var myChart1 = new Chart(trafficchart, {
type: 'line',
data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set'],
    datasets: [{
        data: ['8', '5', '1', '5', '5', '1', '1', '0', '8'],
        backgroundColor: "rgba(48, 164, 255, 0.2)",
        borderColor: "rgba(48, 164, 255, 0.8)",
        fill: true,
        borderWidth: 1
    }]
},
options: {
    animation: {
        duration: 2000,
        easing: 'easeOutQuart',
    },
    plugins: {
        legend: {
            display: false,
            position: 'right',
        },
        title: {
            display: true,
            text: 'Casos este Ano',
            position: 'left',
        },
    },
}
});

// new
var myChart2 = new Chart(saleschart, {
type: 'line',
data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set','Out','Nov','Dez'],
    datasets: [{
            label: 'Income',
            data: ['8', '5', '1', '5', '5', '3', '1', '8', '8', '6', '7', '10'],
            backgroundColor: "rgba(76, 175, 80, 0.5)",
            borderColor: "#6da252",
            borderWidth: 1,
    }]
},
options: {
    animation: {
        duration: 2000,
        easing: 'easeOutQuart',
    },
    plugins: {
        legend: {
            display: false,
            position: 'top',
        },
        title: {
            display: true,
            text: 'Casos ano passado',
            position: 'left',
        },
    },
}
});
