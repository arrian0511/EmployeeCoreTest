import {Router, ActivatedRoute}		from "@angular/router";
import {Component, OnInit}			from "@angular/core";

import {Employee}	from "../../models/employee";
import {AppService}	from "../../services/app.service";

@Component({
	selector: "emp-details",
	templateUrl: "views/employee/emp-details.html"
})

export class EmpDetailsComponent implements OnInit
{
	// Public Properties
	public		mApiUrl:		string;
	public		mTitle:			string;
	public		mMessage:		string;
	public		mResponse:		string;
	public		mEmployee:		Employee;

	// Private Properties
	private		_mActId:		number;

	// Providers
	private		_mService:		AppService;
	private		_mRouter:		Router;
	private		_mActiveRoute:	ActivatedRoute;

	/// Constructor
	constructor(iService:		AppService,
				iRouter:		Router,
				iActiveRoute:	ActivatedRoute) {

		this._mService		= iService;
		this._mRouter		= iRouter;
		this._mActiveRoute	= iActiveRoute;

		this._mActId	= 0;
		this.mResponse	= "";
		this.mApiUrl	= "api/employee";
		this.mTitle		= "Update Employee";
		this.mMessage	= "Edit the corresponding data based on your inputs.";
		this.mEmployee	= new Employee ();
	}

	ngOnInit() {

		/// Set Form Data
		this._mActiveRoute.params.subscribe(params => {
			this._mActId = +params['id'];
			var	data = this._mService.GetById (this.mApiUrl + "/GetById/", this._mActId);

			// Set Data to forms
			data.subscribe(item => {
				var	emp = item as Employee;		// Employee Data

				this.mEmployee.UserID = emp.UserID;
				this.mEmployee.FirstName = emp.FirstName;
				this.mEmployee.LastName = emp.LastName;
				this.mEmployee.City = emp.City;
			});
		});
	}

	public OnNavigate(_link: string) {
		var link = [_link];
		this._mRouter.navigate(link);
	}
}