import {Router}		from "@angular/router";
import {Component, OnInit, OnDestroy}	from "@angular/core";
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";

import {Employee}	from "../../models/employee";
import {AppService}	from "../../services/app.service";

@Component({
	selector: "emp-create",
	templateUrl: "views/employee/emp-create.html"
})

export class EmpCreateComponent implements OnInit
{
	// Bindings Property
	public		mApiUrl:		string;
	public		mTitle:			string;
	public		mMessage:		string;
	public		mIsActive:		boolean;
	public		mFormCreate:	FormGroup;

	// Providers
	private		_mService:		AppService;
	private		_mRouter:		Router;
	private		_mFb:			FormBuilder;

	// Controls
	private		_mTxtUserId:	FormControl;
	private		_mTxtFirstName:	FormControl;
	private		_mTxtLastName:	FormControl;
	private		_mTxtCity:		FormControl;

	/// Constructor
	constructor(iService:	AppService,
				iRouter:	Router,
				iFb:		FormBuilder) {
		this._mService	= iService;
		this._mRouter	= iRouter;
		this._mFb		= iFb;

		this.mApiUrl	= "api/employee/";
		this.mTitle		= "Create EMPLOYEE";
		this.mMessage	= "This is just a sample";
		this.mIsActive	= false;
	}

	ngOnInit() {

		/// Initialize Form Conrols
		this._OnInitForm ();
	}

	ngOnDestroy() {
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

	private _OnClearFormCtl() {

		/// Clear Form Control
		this._mTxtUserId.reset ();
		this._mTxtUserId.reset ();
		this._mTxtFirstName.reset ();
		this._mTxtLastName.reset ();
		this._mTxtCity.reset ();
	}

	public OnSubmitForm(_event: any, _value: any) {

		let		_item: Employee = new Employee ();		// Employee

		/// Set Employee data based on Form values
		_item.UserID		= this._mTxtUserId.value;
		_item.FirstName		= this._mTxtFirstName.value;
		_item.LastName		= this._mTxtLastName.value;
		_item.City			= this._mTxtCity.value;

		/// Update Database Data
		var data = this._mService.CreateRecord (this.mApiUrl + "Create", _item);
		data.subscribe(response => {
			this.mIsActive = false;
			setTimeout (() => this.mIsActive = true, 0);
		});
		
		/// Clear Form Data
		this._OnClearFormCtl ();
	}
}