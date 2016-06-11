import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { CHART_DIRECTIVES } from 'angular2-highcharts';

// Turned off encapsulation so that I could style the entire document at the body element
@Component({
	selector: 'my-app',
	directives: [CHART_DIRECTIVES],
	template: require('./app.component.html'),
	styles: [require('./../styles/app.scss')],
	encapsulation: ViewEncapsulation.None
})

export class AppComponent {
	client_name = 'Client Name';
	customer_name = 'Customer Name';

	constructor() {
        this.options = {
			colors: ['#5c2946', '#b2ba1c'],
			chart: {
				renderTo: 'highchart-columnchart-container',
				type: 'column'
			},
			credits: {
				enabled: false
			},
			legend: {
				enabled: false
			},
            title : {
				text: null
			},
			xAxis: {
				title: {
					text: null
				},
				categories: ['Nov', 'Dec', 'Jan', 'Fed', 'Mar', 'Apr', 'May', 'Jun']
	        },
	        yAxis: {
				min: 0,
				max: 100,
				title: {
					text: null
				}
	        },
			plotOptions: {
                series: {
                    marker: {
                        enabled: false
                    },
                    dataLabels: {
                        enabled: true,
						color: '#b2ba1c',
						style: {
							fontSize: '16px',
							fontWeight:'bold',
							textShadow: '',
						},
						// This funtion could likely be optimized if the "max value" was determined on load...
						// NOTE:  This also could display multiple values if several series are tied for the top value
                        formatter: function () {
							// get max value of all series in use
							var series = this.series.chart.series;
							var max_value = series[0].dataMax;
							for (var i=1; i<series.length; i++) {
								var s = series[i];
								max_value = Math.max(max_value, s.dataMax);
							}

							if (this.y == max_value) {
								return this.y + '%';
							}

							return null;
                        }
                    }
                }
            },
			series: [{
			    name: 'item #1',
			    data: [42, 40, 37, 40, 45, 50, 60, 77]
			},{
				name: 'item #2',
				data: [48, 38, 30, 40, 48, 65, 58, 90]
			}]
        };
    }

    options: Object;
}
