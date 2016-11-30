import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ChartsModule} from "ng2-charts/ng2-charts";
import {Ng2BootstrapModule} from "ng2-bootstrap/ng2-bootstrap";
import {Angular2FontawesomeModule} from 'angular2-fontawesome/angular2-fontawesome'
import "rxjs/Rx";

import {AppService} from "./services/app.service";

import {AppComponent} from "./components/app.component";

import {HomeComponent} from "./components/home/home.component";

import {EmpIndexComponent} from "./components/employee/emp-index.component";
import {EmpDetailsComponent} from "./components/employee/emp-details.component";
import {EmpCreateComponent} from "./components/employee/emp-create.component";
import {EmpUpdateComponent} from "./components/employee/emp-update.component";

import {FormInputComponent} from "./components/templates/form-input.component";

import {SideBarComponent} from "./components/templates/side-bar.component";

import {SidebarModule} from 'ng2-sidebar';

import {AppRouting} from "./app.routing";

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		EmpIndexComponent,
		EmpDetailsComponent,
		EmpCreateComponent,
		EmpUpdateComponent,
		FormInputComponent,
		SideBarComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		FormsModule,
		ReactiveFormsModule,
		Ng2BootstrapModule,
		ChartsModule,
		SidebarModule,
		Angular2FontawesomeModule,
		AppRouting
	],
	providers: [
		AppService
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule { }