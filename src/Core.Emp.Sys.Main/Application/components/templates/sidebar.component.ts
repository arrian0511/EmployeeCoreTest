import {Component, Input, Output, EventEmitter, OnInit, trigger, state, style, transition, keyframes, animate} from '@angular/core';

export class SidebarItem
{
	public	Title:		string;
	public	IsCollapse: boolean;

	constructor(_title: string, _collapse: boolean) {
		this.Title		= _title;
		this.IsCollapse = _collapse;
	}
};

@Component({
	selector: 'sidebar',
	templateUrl: "views/templates/sidebar.html",
	inputs: [
	],
	outputs: [
		'OnToggleMode'
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

export class SideBarComponent implements OnInit {

	public mUserName: 		string;
	public mStatus:			string;
	public mPosition:		string;
	public mImgUrl: 		string;

	public mIsLarge:		boolean;
	public mToggleMode: 	string;

	public OnToggleMode:	EventEmitter<string>;

	private _SidebarItemList: 	Array<SidebarItem>;

	constructor() {
		/// Initialize Services Member
		this.OnToggleMode = new EventEmitter<string>();
	}

	ngOnInit () {
		/// Initialize Member Variables
		this.mUserName			= "Arrian Pascual";
		this.mStatus			= "Online";
		this.mPosition			= "Software Developer";
		this.mImgUrl			= "contents/img/user3-128x128.jpg";

		this.mIsLarge 			= true;
		this.mToggleMode 		= "expanded";
		this._SidebarItemList	= new Array<SidebarItem>();
	}

	private _OnClickCollapse () {
		this.mIsLarge	 = !this.mIsLarge;
		this.mToggleMode = this.mToggleMode == "expanded" ? "collapsed" : "expanded";
		this.OnToggleMode.emit (this.mToggleMode);
		this._CloseMenuItems ();
	}

	private _CloseMenuItems () {
		/// Close All Other Panel Items
		for (var _idx = 0; _idx < this._SidebarItemList.length; _idx++) {
			this._SidebarItemList[_idx].IsCollapse = true;
		}
	}

	private _ToggleSidebarItem (_title: string): void {
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

	private _RefreshSidebarItem (_title: string): boolean {
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
