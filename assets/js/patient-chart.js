//Patient Health Activity Chart
var options = {
    series: [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
    }, {
        name: 'Series 2',
        data: [20, 30, 40, 80, 20, 80],
    }, {
        name: 'Series 3',
        data: [44, 76, 78, 13, 43, 10],
    }],
    colors: ['#039CE0', '#EEBB30', '#AD63F6'], // Set your desired color(s)
    chart: {
        height: 340,
        type: 'radar',
        offsetX: 0,
        offsetY: 0,
        toolbar: {
            show: false // Disable the toolbar (removes the dropdown menu)
        },
        dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
        }
    },
    stroke: {
        width: 2,
    },
    legend: {
        show: false // Hides the legend
    },
    fill: {
        opacity: 0.1
    },
    markers: {
        size: 0
    },
    yaxis: {
        stepSize:30
    },
    plotOptions: {
        radar: {
            polygons: {
                strokeColor: ['#000'],
                opacity: 1,
            }
        }
    },
    grid: {
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0, // Removes internal padding around the chart
        },
    },
    xaxis: {
        categories: ['Walking', 'Sleeping', 'Yoga', 'Gym', 'Playing', 'Swimming'],
        labels: {
            style: {
                colors: ["#555","#555","#555","#555","#555","#555"],
                fontSize: "11px"
            }
        },
        
    }
};
var chart = new ApexCharts(document.querySelector("#health-activity-chart"), options);
chart.render();

//Operation Success Chart
var options = {
    series: [60, 40, 50],
    chart: {
        type: 'polarArea',
        height: 300,
    },
    labels: ['Male', 'Female', 'Kids'],
    colors: ['#1F5FFF', '#04CE78', '#791'], // Blue for Male and Green for Female
    stroke: {
        colors: ['#fff']
    },
    fill: {
        opacity: 0.8
    },
    legend: {
        show: false,
    },
    tooltip: {
        style: {
            fontSize: '13px',
            colors: ['#fff']
        },
        y: {
            formatter: function(val) {
                return val + "%";
            }
        }
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            }
        }
    }]
};
var chart = new ApexCharts(document.querySelector("#operation-success-chart"), options);
chart.render();

// var options = {
//     series: [14, 23, 17],
//     chart: {
//         type: 'polarArea',
//         height: 300,
//     },
//     stroke: {
//         colors: ['#fff']
//     },
//     fill: {
//         opacity: 0.8
//     },
//     legend: {
//         show: false,
//     },
//     responsive: [{
//         breakpoint: 480,
//         options: {
//             chart: {
//                 width: 200
//             }
//         }
//     }]
// };

// var chart = new ApexCharts(document.querySelector("#operation-success-chart"), options);
// chart.render();
// var options = {
//     series: [14, 23],
//     chart: {
//         type: 'polarArea',
//     },
//     stroke: {
//         colors: ['#fff']
//     },
//     fill: {
//         opacity: 1
//     },
//     responsive: [{
//         breakpoint: 480,
//         options: {
//             chart: {
//                 width: 100
//             },
//             legend: {
//                 position: 'top'
//             }
//         }
//     }]
// };

// var chart = new ApexCharts(document.querySelector("#operation-success-chart"), options);
// chart.render();
// var ctx = document.getElementById('operation-success-chart').getContext('2d');
// var myChart = new Chart(ctx, {
//   type: 'polarArea',
//   data: {
//     labels:["Red","Blue"],
//     datasets:[{
//       label:'# of Votes',
//       data: [12,19,13],
//       backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(255, 159, 64, 0.2)'
//       ],
//       borderColor: [
//           'rgba(255,99,132,1)',
//           'rgba(255, 159, 64, 1)'
//       ],
//       borderWidth: 1
//     }]
//   },
//   options: {
//     scales: {
//       yAxes: [{
//         ticks: {
//           beginAtZero: true
//         }
//       }]
//     },
//     responsive: false
//   }
// });

//   var chart = new ApexCharts(document.querySelector("#operation-success-chart"), options);
//   chart.render();

//Patient BP Levels  Chart
var options = {
    series: [{
        name: 'BP Levels',
        data: [15, 20, 19, 22, 21, 23, 27,]
    }],
    chart: {
        height: 150,
        type: 'area',
        toolbar: {
            show: false
        },
    },
    grid: {
        padding: {
          left: -6,
          right: -6 // Adjust to remove extra space created by the legend
        },
        xaxis: {
            lines: {
                show: false 
            }
        },
        yaxis: {
            lines: {
                show: false 
            }
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        labels:{
            show: false,
        },
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    yaxis: {
        labels:{
            show: false,
        },
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.8,
            opacityTo: 0.7,
            stops: [0, 100]
        }
    },
    colors: ['#FF5A39'], // Green for the line color
};
var chart = new ApexCharts(document.querySelector("#patient-bp-chart"), options);
chart.render();

//Patient Sugar Levels  Chart
var options = {
    series: [{
        name: 'Sugar Levels',
        data: [15, 20, 19, 22, 21, 23, 27,]
    }],
    chart: {
        height: 150,
        type: 'area',
        toolbar: {
            show: false
        },
    },
    grid: {
        padding: {
          left: -6,
          right: -6 // Adjust to remove extra space created by the legend
        },
        xaxis: {
            lines: {
                show: false 
            }
        },
        yaxis: {
            lines: {
                show: false 
            }
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        labels:{
            show: false,
        },
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    yaxis: {
        labels:{
            show: false,
        },
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.8,
            opacityTo: 0.7,
            stops: [0, 100]
        }
    },
    colors: ['#039CE0'], // Green for the line color
};
var chart = new ApexCharts(document.querySelector("#patient-sugar-chart"), options);
chart.render();

//Patient Heart Rate  Chart
var options = {
    series: [{
        name: 'BP Levels',
        data: [15, 20, 19, 22, 21, 23, 27,]
    }],
    chart: {
        height: 150,
        type: 'area',
        toolbar: {
            show: false
        },
    },
    grid: {
        padding: {
          left: -6,
          right: -6 // Adjust to remove extra space created by the legend
        },
        xaxis: {
            lines: {
                show: false 
            }
        },
        yaxis: {
            lines: {
                show: false 
            }
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        labels:{
            show: false,
        },
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    yaxis: {
        labels:{
            show: false,
        },
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.8,
            opacityTo: 0.7,
            stops: [0, 100]
        }
    },
    colors: ['#AD63F6'], // Green for the line color
};
var chart = new ApexCharts(document.querySelector("#patient-heart-chart"), options);
chart.render();

//Patient Cholesterol Levels  Chart
var options = {
    series: [{
        name: 'Cholesterol Levels',
        data: [15, 20, 19, 22, 21, 23, 27,]
    }],
    chart: {
        height: 150,
        type: 'area',
        toolbar: {
            show: false
        },
    },
    grid: {
        padding: {
          left: -6,
          right: -6 // Adjust to remove extra space created by the legend
        },
        xaxis: {
            lines: {
                show: false 
            }
        },
        yaxis: {
            lines: {
                show: false 
            }
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        labels:{
            show: false,
        },
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    yaxis: {
        labels:{
            show: false,
        },
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
        }
    },
    colors: ['#EEBB30'], // Green for the line color
};
var chart = new ApexCharts(document.querySelector("#patient-cholesterol-chart"), options);
chart.render();


//Patient Insurance Claims Chart
// var ctx = document.getElementById('myChart').getContext('2d');
// var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'bar',

//     // The data for our dataset
//     data: {
//         labels: ['Standing costs', 'Running costs', 'Monthly Costs'],
//         datasets: [{
//             label: 'Traffic tickets',
//             data: [3, 2, 1],
//             backgroundColor: '#218380'
//         }, {
//             label: 'Tolls',
//             data: [0, 1, 1],
//             backgroundColor: '#FBB13C'
//         }, {
//             label: 'Parking',
//             data: [3, 2, 1],
//             backgroundColor: '#3DA5D9'
//         }]
//     },

//     options: {
//         legend: {
//             position: 'right' // place legend on the right side of chart
//         },
//         scales: {
//             xAxes: [{
//                 stacked: true // this should be set to make the bars stacked
//             }],
//             yAxes: [{
//                 stacked: true // this also..
//             }]
//         },
//         //causes chart to resize when its container resizes
//         responsive: true,
//         //setting to false will prevent the height of the chart from shrinking when resizing
//         maintainAspectRatio: false
//     }
// });

// var options = {
//     series: [{
//         name: 'Completed',
//         data: [30, 40, 35, 50, 49, 60, 70]
//     }, {
//         name: 'Requested',
//         data: [20, 35, 30, 40, 45, 55, 65]
//     }],
//     chart: {
//         type: 'bar',
//         height: 350,
//         stacked: true, // Enables stacked bars
//     },
//     colors: ['#00E396', '#008FFB'], // Green for Completed and Blue for Requested
//     plotOptions: {
//         bar: {
//             horizontal: false,
//             columnWidth: '55%',
//         },
//     },
//     dataLabels: {
//         enabled: false
//     },
//     stroke: {
//         show: true,
//         width: 2,
//         colors: ['transparent']
//     },
//     xaxis: {
//         categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan'],
//     },
//     yaxis: {
//         title: {
//             text: 'Counts'
//         }
//     },
//     fill: {
//         opacity: 1
//     },
//     tooltip: {
//         y: {
//             formatter: function (val) {
//                 return val;
//             }
//         }
//     }
// };

// var chart = new ApexCharts(document.querySelector("#stacked-bar-chart"), options);
// chart.render();

// var ctx = document.getElementById('stackedBarChart').getContext('2d');
//     var stackedBarChart = new Chart(ctx, {
//         type: 'bar',
//         data: {
//             labels: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan'],
//             datasets: [{
//                 label: 'Completed',
//                 data: [30, 40, 35, 50, 49, 60, 70],
//                 backgroundColor: '#00E396'
//             }, {
//                 label: 'Requested',
//                 data: [20, 35, 30, 40, 45, 55, 65],
//                 backgroundColor: '#008FFB'
//             },
//             {
//                 label: 'unwanted',
//                 data: [22, 32, 31, 45, 42, 54, 61],
//                 backgroundColor: '#f91'
//             }]
//         },
//         options: {
//             responsive: true,
//             plugins: {
//                 legend: {
//                     position: 'top',
//                 },
//                 tooltip: {
//                     callbacks: {
//                         label: function(context) {
//                             return context.dataset.label + ': ' + context.parsed.y;
//                         }
//                     }
//                 }
//             },
//             scales: {
//                 x: {
//                     stacked: true
//                 },
//                 y: {
//                     stacked: true
//                 }
//             }
//         }
//     });

//Patient Medical Expenses Chart
var options = {
    series: [{
        name: 'Cash',
        data: [44, 55, 41, 64, 22, 43, 21]
    }, {
        name: 'Card',
        data: [53, 32, 33, 52, 13, 44, 32]
    }],
    chart: {
        type: 'bar',
        height: 430,
        toolbar: {
            show:false
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
            dataLabels: {
                position: 'top',
            },
        }
    },
    fill: {
        opacity: 1
    },
    grid: {
        padding: {
          top: 0,
          right: -10,
          bottom: 0,
          left: -10, // Removes internal padding around the chart
        },
    },
    dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
            fontSize: '12px',
            colors: ['#fff']
        }
    },
    stroke: {
        show: true,
        width: 1,
        colors: ['#fff']
    },
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: function(val) {
                return "$" + val + "K"
            }
        }
    },
    legend : {
        show:false,
    },
    xaxis: {
        categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
        
    },
    yaxis: {
        labels: {
            show:false
        }
    },
    colors: ['#1F5FFF','#04CE78']
};

var chart = new ApexCharts(document.querySelector("#patient-medical-expense-chart"), options);
chart.render();


//Health Insurance Chart
var options = {
    series: [{
        data: [{
            x: 'Jan',
            y: [1, 5]
        }, {
            x: 'Feb',
            y: [4, 6]
        }, {
            x: 'Mar',
            y: [5, 8]
        }, {
            x: 'Apr',
            y: [3, 11]
        }]
    }, {
        data: [{
            x: 'May',
            y: [2, 6]
        }, {
            x: 'June',
            y: [1, 3]
        }, {
            x: 'July',
            y: [7, 8]
        }]
    }],
    chart: {
        type: 'rangeBar',
        height: 420,
        toolbar: {
            show: false
        }
    },
    grid: {
        padding: {
          top: 0,
          right: -8,
          bottom: 0,
          left: -8, // Removes internal padding around the chart
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55px',
            borderRadius: 5,
            borderRadiusApplication: 'around'
        }
    },
    dataLabels: {
        enabled: true
    },
    legend: {
        show: false
    },
    fill: {
        opacity: 1
    },
    colors: ['#1F5FFF', '#04CE78']
};

var chart = new ApexCharts(document.querySelector("#health-insurance-chart"), options);
chart.render();