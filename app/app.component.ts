import { Component } from '@angular/core';
	
@Component({
    selector: 'my-app',
	template: `<app-header></app-header>
			   <label>Enter name:</label>
			   <input [(ngModel)]="name" placeholder="name">
			   <h1>Hello, {{name}}! Welcome to Angular development!</h1>`
})
export class AppComponent { 
	name = 'world';
}