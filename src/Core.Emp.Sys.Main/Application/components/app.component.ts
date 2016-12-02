﻿import {Component, Input, trigger, state, style, transition, animate} from '@angular/core';

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
		trigger('OnAnimateUserPanel', [
			state('in', style({ opacity: 1, transform: "translateX(40)"})),
			transition('void => *', [style({opacity: 0, transform: 'translateX(100%)'}), animate('0.5s')]),
			transition('* => void', [style({opacity: 0, transform: 'translateX(0%)'}), animate('0.5s')]),
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

	public mToggleMode:		string;		// Side Bar Toggle Mode
	public mToggleFlag:		boolean;	// Toggle Flag
	public Title:			string;		// Title
	public Message:			string;		// Message

	constructor() {
		this.mUserName = "Arrian Pascual";
		this.mStatus = "Online";
		this.mPosition = "Software Developer";
		this.mImgUrl = "contents/img/user3-128x128.jpg";

		this.mToggleFlag = true;
		this.mToggleMode = "show";
		this.Title = "EMPLOYEES MANAGEMENT SYSTEM"; 
		this.Message = "This will enable you to check each employee daily time record, or daily task with regards to their projects";

		this.mSideToggleFlag = true;
		this.mIsCollapse = false;
	}

	public OnCollapse() {
		this.mIsCollapse = !this.mIsCollapse;
	}

	public OnToggleSidebarEvent () {
		this.mToggleFlag = !this.mToggleFlag;
		this.mToggleMode = this.mToggleMode == 'show' ? 'hide' : 'show';
	}
}