import {Component, Input, Output, EventEmitter, OnInit, trigger, state, style, transition, keyframes, animate} from '@angular/core';

@Component({
	selector: 'topbar',
	templateUrl: "views/templates/topbar.html",
	inputs: [
		'InToggleMode'
	],
	outputs: [
	],
	animations: [
		trigger('OnCollapsed', [
			state('collapsed', style ({ margin: '0px 0px 0px 70px'})),
			state('expanded', style ({ margin: '0px 0px 0px 220px'})),
			transition('collapsed => expanded', animate('200ms ease-in')),
			transition('expanded => collapsed', animate('200ms 200ms ease-out'))
		])
	]
})

export class TopBarComponent implements OnInit {

	public mUserName: 		string;
	public mStatus:			string;
	public mPosition:		string;
	public mImgUrl: 		string;

	public InToggleMode: 		string;

	constructor() {
		/// Initialize Services Member
		this.InToggleMode = "collapsed";
	}

	ngOnInit () {

	}

}
