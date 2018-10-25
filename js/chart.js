Highcharts.chart('containerChart', {
    chart: {
        backgroundColor: '#726e6a',
        type: 'column'

    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        type: 'category',
        labels: {
                style:{
                    color:'white',
                    fontSize: '12px' 
                    
                }
        }
    },
    yAxis: {
        labels: false,
        title: {
            text: ''
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: false,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{Programming}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.level}</b><br/>'
    },

    "series": [
        {
            "name": "Browsers",
            "colorByPoint": true,
            "data": [
                {
                    "name": "HTML/CSS",
                    "y": 85.0,
                    "level": "Advanced",
                    "drilldown": null
                },
                {
                    "name": "JavaScript",
                    "y": 85.0,
                    "level": "Advanced",
                    "drilldown": null
                },
                {
                    "name": "React",
                    "y": 50,
                    "level": "Intermediate",
                    "drilldown": null
                },
                {
                    "name": "Python",
                    "y": 50,
                    "level": "Intermediate",
                    "drilldown": null
                },
                {
                    "name": "C/C++",
                    "y": 40,
                    "level": "Basic",
                    "drilldown": null
                },
                {
                    "name": "Java",
                    "y": 20,
                    "level": "Basic",
                    "drilldown": null
                }
            ]
        }
    ]});