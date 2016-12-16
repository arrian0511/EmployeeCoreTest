import {Component, OnInit}	from "@angular/core";
import {Router}		from "@angular/router";
import {Employee}	from "../../models/employee";
import {AppService}	from "../../services/app.service";

@Component({
	selector: "emp-index",
	templateUrl: "views/employee/emp-index.html"
})

export class EmpIndexComponent implements OnInit
{
	public mApiUrl:		string;
	public mTitle:		string;
	public mMessage:	string;
	public mItems:		Employee[];

	private mSub: any;
	private mService:	AppService;
	private mRouter:	Router;

	constructor(iService: AppService,
				iRouter: Router) {

		this.mApiUrl  = "api/employee/";
		this.mTitle   = "Welcome EMPLOYEE";
		this.mMessage = "This is just a sample"; 

		this.mService = iService;
		this.mRouter  = iRouter;
		this.mItems   = new Array();
	}

	ngOnInit() {

		/// Get All Records
		this._OnGetAllRecord ();
	}

	private errCord: any;

	private _OnGetAllRecord() {

		/// Get All Record
		var data = this.mService.GetAll (this.mApiUrl + "GetAll");
		this.mSub = data.subscribe(
			_data => {
				this.mItems = _data;
			},
			_error => {
				this.errCord = _error;
			}
		);
	}

	public OnNavigate(_link: string, _item: Employee) {
		var link = [_link, _item.Id];
		this.mRouter.navigate(link);
	}

	public OnDeleteRecord(_event: any, _item: Employee) {

		var err			= null;		// Error Message
		var res			= null;		// Response
		var isDelete	= false;	// Is Delete Flag

		/// Display Confirmation Message
		isDelete = confirm('You are about to delete ' + _item.FirstName + '. Are you sure?');

		/// Confirmed Deleted
		if (isDelete == true) {
			var data = this.mService.DeleteRecord(this.mApiUrl + "Delete/", _item.Id.toString ());
			this.mSub = data.subscribe(
				_data => {
					res = _data;
					this._OnGetAllRecord ();
				},
				_error => {
					err = _error;
				}
			);
		}
	}

	    ifTrue: boolean = false;

    change() {
        this.ifTrue = !this.ifTrue;
    }
}