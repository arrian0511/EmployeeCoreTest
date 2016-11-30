import {Component, Input, ElementRef, OnInit, trigger, state, style, transition, animate} from '@angular/core';

@Component({
	selector: 'side-bar',
	templateUrl: "views/templates/side-bar.html",
	inputs: [
		'iToggleMode'
	],
	animations: [
		trigger("OnToggleSideBar", [
			state("show", style({ transform: "translateX(0%)"})),
			state("hide", style({ transform: "translateX(-100%)"})),
			transition("show <=> hide", animate('300ms'))
		])
	]
})

export class SideBarComponent implements OnInit {
	public		iToggleMode: string;		// Toggle Mode

	private	_mElement: ElementRef;
	constructor (_iElementRef: ElementRef) {

		this._mElement = _iElementRef;
		this.iToggleMode = "show";
	}

	ngOnInit () {

	}
}
