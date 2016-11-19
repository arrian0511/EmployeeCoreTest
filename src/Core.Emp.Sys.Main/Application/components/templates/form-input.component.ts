import {Component}					from "@angular/core";
import {FormControl, Validators}	from "@angular/forms";

@Component({
	selector: 'form-input',
	templateUrl: "views/templates/form-input.html",
	inputs: [
		"TextLabel",
		"IsError",
		"TextControl",
		"PlaceHolder"
	]
})

export class FormInputComponent
{
	public	TextLabel:		string;
	public	IsError:		boolean;
	public	TextControl:	FormControl;
	public	PlaceHolder:	string;

	constructor() {
		this.IsError		= false;
		this.TextLabel		= "";
		this.PlaceHolder	= "";
		this.TextControl	= new FormControl (null, Validators.required);
	}
}