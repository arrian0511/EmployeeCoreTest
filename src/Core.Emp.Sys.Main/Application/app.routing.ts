import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {HomeComponent} from "./components/home/home.component";

import {EmpIndexComponent} from "./components/employee/emp-index.component";
import {EmpDetailsComponent} from "./components/employee/emp-details.component";
import {EmpCreateComponent} from "./components/employee/emp-create.component";
import {EmpUpdateComponent} from "./components/employee/emp-update.component";

import {SideNavComponent} from "./components/templates/side-nav.component";

const routes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'sidenav',
		component: SideNavComponent
	},	
	{
		path: 'employee',
		component: EmpIndexComponent
	},
	{
		path: 'employee/details/:id',
		component: EmpDetailsComponent
	},
	{
		path: 'employee/create',
		component: EmpCreateComponent
	},
	{
		path: 'employee/update/:id',
		component: EmpUpdateComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})

export class AppRouting { }