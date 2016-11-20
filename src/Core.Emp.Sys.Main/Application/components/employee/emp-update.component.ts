import {Router, ActivatedRoute}		from "@angular/router";
import {Component, OnInit, OnDestroy}	from "@angular/core";
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";

import {Employee}	from "../../models/employee";
import {AppService}	from "../../services/app.service";

@Component({
	selector: "emp-update",
	templateUrl: "views/employee/emp-update.html"
})

export class EmpUpdateComponent implements OnInit
{
	// Public Properties
	public		mApiUrl:		string;
	public		mTitle:			string;
	public		mMessage:		string;
	public		mResponse:		string;
	public		mFormCreate:	FormGroup;

	// Private Properties
	private		_mActId:		number;

	// Providers
	private		_mService:		AppService;
	private		_mRouter:		Router;
	private		_mFb:			FormBuilder;
	private		_mActiveRoute:	ActivatedRoute;

	// Controls
	private		_mTxtUserId:	FormControl;
	private		_mTxtFirstName:	FormControl;
	private		_mTxtLastName:	FormControl;
	private		_mTxtCity:		FormControl;

	/// Constructor
	constructor(iService:		AppService,
				iRouter:		Router,
				iFb:			FormBuilder,
				iActiveRoute:	ActivatedRoute) {

		this._mService		= iService;
		this._mRouter		= iRouter;
		this._mFb			= iFb;
		this._mActiveRoute	= iActiveRoute;

		this._mActId	= 0;
		this.mResponse	= "";
		this.mApiUrl	= "api/employee";
		this.mTitle		= "Update Employee";
		this.mMessage	= "Edit the corresponding data based on your inputs.";
	}

	ngOnInit() {

		/// Initialize Form Conrols
		this._OnInitForm ();

		/// Set Form Data
		this._mActiveRoute.params.subscribe(params => {
			this._mActId = +params['id'];
			var	data = this._mService.GetById (this.mApiUrl + "/GetById/", this._mActId);

			// Set Data to forms
			data.subscribe(item => {
				var	emp = item as Employee;		// Employee Data

				this._mTxtUserId.setValue (emp.UserID);
				this._mTxtFirstName.setValue (emp.FirstName);
				this._mTxtLastName.setValue (emp.LastName);
				this._mTxtCity.setValue (emp.City);
			});
		});
	}

	private _OnInitForm() {

		/// Set Control
		this._mTxtUserId	= new FormControl (null, Validators.required);
		this._mTxtFirstName	= new FormControl (null, Validators.required);
		this._mTxtLastName	= new FormControl (null, Validators.required);
		this._mTxtCity		= new FormControl (null, Validators.required);

		/// Set Form Data
		this.mFormCreate = this._mFb.group({
			UserID:		this._mTxtUserId,
			FirstName:	this._mTxtFirstName,
			LastName:	this._mTxtLastName,
			City:		this._mTxtCity
		});
	}

	public OnSubmitForm(_event: any, _value: any) {

		let		_item: Employee = new Employee ();		// Employee

		/// Set Employee data based on Form values
		_item.Id			= this._mActId;
		_item.UserID		= this._mTxtUserId.value;
		_item.FirstName		= this._mTxtFirstName.value;
		_item.LastName		= this._mTxtLastName.value;
		_item.City			= this._mTxtCity.value;

		/// Update Database Data
		var data = this._mService.UpdateRecord (this.mApiUrl + "/Update/", 
												_item, this._mActId);
		data.subscribe(response => {
			this.mResponse = response;
			this._mRouter.navigate( ['/employee'] );
		});
	}
}