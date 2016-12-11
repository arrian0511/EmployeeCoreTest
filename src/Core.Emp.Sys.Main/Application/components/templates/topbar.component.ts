import {Component, Input, Output, EventEmitter, OnInit, trigger, state, style, transition, keyframes, animate} from '@angular/core';

@Component({
	selector: 'topbar',
	templateUrl: "views/templates/topbar.html",
	inputs: [
	],
	outputs: [
	],
	animations: [
		trigger('OnRotateIcon', [
			state('true', style ({ transform: 'rotate(0deg)' })),
			state('false', style ({ transform: 'rotate(180deg)' })),
			transition('true => false', animate('200ms ease-in')),
			transition('false => true', animate('200ms ease-out'))
		]),
		trigger('OnCollapsed', [
			state('collapsed', style ({ width: '70px'})),
			state('expanded', style ({ width: '220px'})),
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

	constructor() {
		/// Initialize Services Member
		
	}

	ngOnInit () {

	}

}
