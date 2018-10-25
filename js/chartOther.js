Highcharts.chart('containerChartOther', {
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
        },
        max: 100


    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: false,
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
                    "name": "Portuguese",
                    "y": 99.9,
                    "level": "Native",
                    "drilldown": null
                },
                {
                    "name": "English",
                    "y": 75.0,
                    "level": "Intermediate",
                    "drilldown": null
                },
                {
                    "name": "Spanish",
                    "y": 45,
                    "level": "Basic",
                    "drilldown": null
                },
                {
                    "name": "communicability",
                    "y": 80,
                    "level": "Intermediate",
                    "drilldown": null
                },
                {
                    "name": "PhotoShop",
                    "y": 65,
                    "level": "Intermediate",
                    "drilldown": null
                }
            ]
        }
    ]});