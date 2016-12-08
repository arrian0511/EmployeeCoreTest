import {Component, Input, OnInit, trigger, state, style, transition, keyframes, animate} from '@angular/core';

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
	selector: 'sidebar',
	templateUrl: "views/templates/sidebar.html",
	inputs: [
	]
})

export class SideBarComponent implements OnInit {

	public mUserName: 		string;
	public mStatus:			string;
	public mPosition:		string;
	public mImgUrl: 		string;

	public mIsCollapse: 	boolean;
	public mToggleFlag:		boolean;	// Toggle Flag
	public mIsLarge:		boolean;

	private _SidebarItemList: 	Array<SidebarItem>;

	constructor() {
		/// Initialize Services Member
	}

	ngOnInit () {
		/// Initialize Member Variables
		this.mUserName			= "Arrian Pascual";
		this.mStatus			= "Online";
		this.mPosition			= "Software Developer";
		this.mImgUrl			= "contents/img/user3-128x128.jpg";

		this.mIsLarge 			= true;
		this.mIsCollapse		= false;
		this._SidebarItemList	= new Array<SidebarItem>();
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
