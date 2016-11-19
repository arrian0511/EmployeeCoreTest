import {Component} from '@angular/core';

@Component({
	selector: 'app',
	styleUrls: ["styles/site.css"],
	templateUrl: "views/app.html",
})

export class AppComponent
{
	public Title:		string;		// Title
	public Message:		string;		// Message

	constructor() {
		this.Title = "EMPLOYEES MANAGEMENT SYSTEM"; 
		this.Message = "This will enable you to check each employee daily time record, or daily task with regards to their projects";
	}
}