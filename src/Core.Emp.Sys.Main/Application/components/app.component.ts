import {Component, Input, trigger, state, style, transition, keyframes, animate, ChangeDetectorRef} from '@angular/core';

@Component({
	selector: 'app',
	// styleUrls: ["styles/site.css"],
	templateUrl: "views/app.html",
	animations: [
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

	public mSideToggleFlag: boolean;
	public mIsCollapse: boolean;

	public mToggleFlag:		boolean;	// Toggle Flag

	public mLgSideBar:		boolean;
	public Title:			string;		// Title
	public Message:			string;		// Message

	constructor() {
		this.mUserName = "Arrian Pascual";
		this.mStatus = "Online";
		this.mPosition = "Software Developer";
		this.mImgUrl = "contents/img/user3-128x128.jpg";

		this.mToggleFlag = true;
		this.mLgSideBar = false;
		this.Title = "EMPLOYEES MANAGEMENT SYSTEM"; 
		this.Message = "This will enable you to check each employee daily time record, or daily task with regards to their projects";

		this.mSideToggleFlag = true;
		this.mIsCollapse = false;
	}

	public OnCollapse() {
		this.mIsCollapse = !this.mIsCollapse;
		this.mToggleFlag = !this.mToggleFlag;
		this.mLgSideBar = !this.mLgSideBar;
	}

	public OnToggleSidebarEvent () {
		this.mToggleFlag = !this.mToggleFlag;
	}
}