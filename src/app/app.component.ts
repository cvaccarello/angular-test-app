import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

// Turned off encapsulation so that I could style the entire document at the body element
@Component({
	selector: 'my-app',
	template: require('./app.component.html'),
	styles: [require('./../styles/app.scss')],
	encapsulation: ViewEncapsulation.None
})

export class AppComponent {
	client_name = 'Client Name';
	customer_name = 'Customer Name';
}
