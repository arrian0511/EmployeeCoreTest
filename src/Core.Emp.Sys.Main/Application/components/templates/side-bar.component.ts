import {Component, Input, trigger, state, style, transition, animate} from '@angular/core';

@Component({
	selector: 'side-bar',
	templateUrl: "views/templates/side-bar.html",
	inputs: [
		'iToggleFlag'
	],
	animations: [
		trigger("OnToggleSideBar", [
			state("show", style({ transform: "translateX(0%)"})),
			state("hide", style({ transform: "translateX(-100%)"})),
			transition("show <=> hide", animate('300ms'))
		])
	]
})

export class SideBarComponent {
	public		mToggleMode: string;
	public		iToggleFlag: boolean;

	constructor () {
		this.mToggleMode	= "show";
		this.iToggleFlag	= true;
	}

	public _OnToggleSideBarEvent () {
		this.iToggleFlag = !this.iToggleFlag;

		if (this.iToggleFlag == true) {
			this.mToggleMode = "show";
		}
		else {
			this.mToggleMode = "hide";
		}
	}
}
