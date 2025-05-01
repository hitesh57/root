//Patient Chart
var options = {
    series: [{
        name: 'New Patients',
        type: 'column',
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
    }, {
        name: 'Return Patients',
        type: 'line',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
    }],
    grid: {
        padding: {
          left: -10,
          right: -10 
        }
    },
    chart: {
        height: 395,
        type: 'line',
        toolbar: {
            show: false 
        },
    },
    plotOptions: {
        bar: {
            borderRadius: 5,
            columnWidth: '65%',
            stroke: {
                show: false // Disable the column stroke
            }
        }
    },
    stroke: {
        width: 2, // Adjust the line thickness
        colors: ['#1F5FFF'] // Custom color for the connecting line
    },
    markers: {
        size: 2, // Adjust the dot size
        colors: ['#1F5FFF'], // Customize dot color
        strokeWidth: 0,
        strokeColors: ['#dddddd']
    },
    legend: {
        show: false,
    },
    dataLabels: {
        enabled: false,
        enabledOnSeries: [1]
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    colors: ['#04CE78', '#1F5FFF'],
    tooltip: {
        style: {
            fontSize: '11px',
        }, 
    },
    xaxis: {
        labels: {
            style: {
                colors: ['#555', '#555', '#555', '#555', '#555', '#555', '#555', '#555', '#555', '#555', '#555', '#555',],
                fontSize: '11px',
            },
        },
    },
    yaxis: [{
        labels: {
            offsetX: -32,
            style: {
                colors: ['#555'],
            }, 
        }

    }, {
        opposite: true,
        show: false
    }],
};

var chart = new ApexCharts(document.querySelector("#patient-chart"), options);
chart.render();

//Hospital Treatment Type
var options = {
    series: [
        {
            name: 'Surgery',
            data: [25, 37, 30, 40, 35, 45, 40, 50, 45] // Example data for Surgery
        },
        {
            name: 'General',
            data: [60, 70, 65, 72, 70, 78, 75, 79, 75] // Example data for General
        },
        {
            name: 'ICU',
            data: [30, 42, 35, 45, 55, 48, 45, 50, 52] // Example data for ICU
        }
    ],
    chart: {
        type: 'area',
        stacked: false,
        height: 370,
        toolbar : {
            show: false
        },
        zoom: {
            enabled: false
        },
    },
    dataLabels: {
        enabled: false
    },
    markers: {
        size: 0,
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.65,
            opacityTo: 0.65,
        },
    },
    grid: {
        padding: {
            top: 0,
            right: -5,
            bottom: 0,
            left: -10,
        },
    },
    yaxis: {
        labels: {
            style: {
                colors: '#555',
            },
            offsetX: -23,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false
        }
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        labels: {
            style: {
                colors: '#555',
            },
        }
    },
    tooltip: {
        style: {
            fontSize: '11px',
        }, 
    },
    legend: {
        show: false
    },
    colors: ['#04CE78', '#1F5FFF', '#FF5A39'], // Red for ICU, Green for Surgery, Blue for General
};

var chart = new ApexCharts(document.querySelector("#treatment-type-chart"), options);
chart.render(); 

//Hospital Available Chart 
var options = {
    series: [{
        name: 'Available',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 69, 65, 62]
    }, {
        name: 'Reserved',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 110, 90, 100]
    }, {
        name: 'Others',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 48, 55, 49]
    }],
    chart: {
        type: 'bar',
        height: 400,
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '35%',
            borderRadius: 0,
            borderRadiusApplication: 'end'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        labels: {
            style: {
                fontSize : '11px',
                colors: ['#555']
            }, 
        }
    },
    yaxis: {
        labels: {
            offsetX: -23,
            style: {
                fontSize : '11px',
                colors: ['#555'],
            }, 
        }
    },
    fill: {
        opacity: 1
    },
    grid: {
        padding: {
            top: 0,
            right: -5,
            bottom: 0,
            left: -10,
        },
    },
    legend: {
        show: false
    },
    tooltip: {
        y: {
            formatter: function(val) {
                return "$ " + val + " thousands"
            }
        },
        style: {
            fontSize: '11px',
            fontFamily: 'Inter, Serif'
        },
    },
    colors : ['#1F5FFF','#04CE78','#FF5A39']
};
var chart = new ApexCharts(document.querySelector("#available-bed-chart"), options);
chart.render();

//Hospital Insurance claims Chart
var options = {
    series: [{
        name: "Claims",
        data: [10, 41, 35, 51, 49, 62, 69]
    }],
    chart: {
        height: 350,
        type: 'line',
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    grid: {
        padding: {
            top: 0,
            right: -5,
            bottom: 0,
            left: -10, // Removes internal padding around the chart
        },
    },
    tooltip: {
        style: {
            fontSize: '11px',
            fontFamily: 'Inter, Serif'
        },
    },
    xaxis: {
        categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    },
    yaxis: {
        labels: {
            offsetX: -23,
            style: {
                colors: ['#555'],
            }, 
        }
    },
    colors: ['#04CE78']
};
var chart = new ApexCharts(document.querySelector("#hospital-insurance-chart"), options);
chart.render();

//Patients Gender Chart
var options = {
    series: [44, 25, 31], // Data for Male, Female, and Kids
    chart: {
        type: 'donut',
        width: 365
    },
    labels: ['Male', 'Female', 'Kids'], // Legend labels
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }],
    dataLabels: {
        enabled: false // Disable percentage digits on the chart
    },
    tooltip: {
        enabled: true,
        y: {
            formatter: function(val) {
                return val + "%"
            }
        }
    },
    legend: {
        show: false,
    },
    // colors: ['#1F5FFF', '#FF5A39', '#04CE78'],
    colors: ['#04CE78', '#1F5FFF', '#FF5A39'],
};
var chart = new ApexCharts(document.querySelector("#patient-gender-chart"), options);
chart.render();