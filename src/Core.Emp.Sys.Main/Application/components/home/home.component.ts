import {Component} from "@angular/core";

@Component({
	selector: "home",
	templateUrl: "views/home/home.html"
})

export class HomeComponent
{
	public Title:		string;
	public Message:		string;

	constructor() {
		this.Title = "Welcome HOME";
		this.Message = "This is just a sample";
	}
}