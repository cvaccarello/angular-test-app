"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var core_2 = require('@angular/core');
var angular2_highcharts_1 = require('angular2-highcharts');
// Turned off encapsulation so that I could style the entire document at the body element
var AppComponent = (function () {
    function AppComponent() {
        this.client_name = 'Client Name';
        this.customer_name = 'Customer Name';
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
            title: {
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
                            fontWeight: 'bold',
                            textShadow: '',
                        },
                        // This funtion could likely be optimized if the "max value" was determined on load...
                        // NOTE:  This also could display multiple values if several series are tied for the top value
                        formatter: function () {
                            // get max value of all series in use
                            var series = this.series.chart.series;
                            var max_value = series[0].dataMax;
                            for (var i = 1; i < series.length; i++) {
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
                }, {
                    name: 'item #2',
                    data: [48, 38, 30, 40, 48, 65, 58, 90]
                }]
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [angular2_highcharts_1.CHART_DIRECTIVES],
            template: require('./app.component.html'),
            styles: [require('./../styles/app.scss')],
            encapsulation: core_2.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map