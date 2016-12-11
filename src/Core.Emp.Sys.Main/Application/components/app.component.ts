import {Component, Input, trigger, state, style, transition, keyframes, animate, ChangeDetectorRef} from '@angular/core';

@Component({
	selector: 'app',
	// styleUrls: ["styles/site.css"],
	templateUrl: "views/app.html",
	animations: [
		trigger('OnCollapsed', [
			state('collapsed', style ({ margin: '0px 0px 0px 70px'})),
			state('expanded', style ({ margin: '0px 0px 0px 220px'})),
			transition('collapsed => expanded', animate('200ms ease-in')),
			transition('expanded => collapsed', animate('200ms 200ms ease-out'))
		]),
		trigger('OnToggleSideBar', [
			state('show', style({ transform: "translateX(0%)"})),
			state('hide', style({ transform: "translateX(-100%)"})),
			transition('show <=> hide', animate('300ms'))
		]),
		trigger('fade', [
			transition('void => *', [
				animate("2000ms", keyframes([
					style({opacity: 0, transform: 'translate3d(40px, 0, 0)', offset: 0}),
					style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1})
				]))
			]),
			transition('* => void', [
				animate("2000ms", keyframes([
					style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}),
					style({opacity: 0, transform: 'translate3d(40px, 0, 0)', offset: 1}),
				]))
			])
		])
	]
})

export class AppComponent
{
	public mUserName: 		string;
	public mStatus:			string;
	public mPosition:		string;
	public mImgUrl: 		string;

	public mSidebarStatus: 	string;

	constructor() {
		this.mUserName = "Arrian Pascual";
		this.mStatus = "Online";
		this.mPosition = "Software Developer";
		this.mImgUrl = "contents/img/user3-128x128.jpg";
		this.mSidebarStatus = "expanded";
	}

	private _OnGetSidebarToggle (_toggle: string)
	{
		this.mSidebarStatus = _toggle;
	}
}