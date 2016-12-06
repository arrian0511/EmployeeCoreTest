import {Component, Input, trigger, state, style, transition, keyframes, animate, ChangeDetectorRef} from '@angular/core';

// export const SidebarItem = 
// {
// 	Title:		'',
// 	ToggleFlag: 'false'
// };
export class SidebarItem
{
	public	Title:		string;
	public	IsCollapse: boolean;

	constructor(_title: string, _toggle: boolean) {
		this.Title		= _title;
		this.IsCollapse = _toggle;
	}
};

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

	public mIsCollapse: 	boolean;
	public mToggleFlag:		boolean;	// Toggle Flag
	public mLgSideBar:		boolean;

	private _SidebarItemList: 	Array<SidebarItem>;

	constructor() {
		this.mUserName = "Arrian Pascual";
		this.mStatus = "Online";
		this.mPosition = "Software Developer";
		this.mImgUrl = "contents/img/user3-128x128.jpg";

		this.mLgSideBar = true;
		this.mIsCollapse = false;
		this._SidebarItemList = new Array<SidebarItem>();
	}

	public OnCollapse() {
		this.mIsCollapse = !this.mIsCollapse;
		this.mToggleFlag = !this.mToggleFlag;
		this.mLgSideBar = !this.mLgSideBar;
	}

	public OnToggleSidebarItem (_title: string): void {

		/// Add Record if it is not exist
		var sidebarItem = this._SidebarItemList.find (_value => {
			return _value.Title == _title;
		});
		if (sidebarItem == null) {
			this._SidebarItemList.push (new SidebarItem (_title, true));
		}

		/// Close All Other Panel Items
		for (var _idx = 0; _idx < this._SidebarItemList.length; _idx++) {
			if (this._SidebarItemList[_idx].Title == _title) {
				this._SidebarItemList[_idx].IsCollapse = !this._SidebarItemList[_idx].IsCollapse;
			}
			else {
				this._SidebarItemList[_idx].IsCollapse = true;
			}
		}
	}

	public OnRefreshSidebarItem (_title: string): boolean {
		let		isCollapse: boolean = true;	// Toggle Flag

		/// Find Sidebar Item
		var sidebarItem = this._SidebarItemList.find (_value => {
			return _value.Title == _title;
		});

		/// Set Toggle Flag
		if (sidebarItem != null) {
			isCollapse = sidebarItem.IsCollapse;
		}

		/// Return ToggleFlag
		return isCollapse;
	}
}