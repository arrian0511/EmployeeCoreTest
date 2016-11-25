import {Component, OnInit, OnChanges, OnDestroy, Input, SimpleChanges,
		trigger, state, style, transition, animate} from '@angular/core';

@Component({
	selector: 'side-bar',
	inputs: [
		"iPosition",
		"iToggle",
	],
	styles: [ `
		.side-bar {
			overflow: auto;
			position: fixed;
		}
		.side-bar-style {
			background: #fff;
			box-shadow: 0 0 2.5em rgba(85, 85, 85, 0.5);
		}
		.side-bar-left {
			bottom: 0;
			left: 0;
			top: 0;
			padding-right: 5px;
		}
		.side-bar-right {
			bottom: 0;
			right: 0;
			top: 0;
			padding-left: 5px;
		}
	`
	],
	template: `
	<aside	class="side-bar side-bar-style side-bar-{{iPosition}}"
			role="navigation"
			[@OnSideBarDisplay]="OnSideBarDisplay">

			<ng-content></ng-content>
	</aside>
		<div class="row row-offcanvas row-offcanvas-left">
			<div class="col-xs-6 col-sm-3 sidebar-offcanvas" role="navigation">
				<ul class="list-group panel">
					<li class="list-group-item"><ng-content></ng-content></li>
				</ul>
			</div>
		</div>
	`,
	animations: [
		trigger('OnSideBarDisplay', [
			state('display--left', style({ transform: 'translateX(0%)' })),
			state('display--right', style({ transform: 'translateX(100%)' })),
			state('hide--left', style({ transform: 'translateX(-110%)' })),
			state('hide--right', style({ transform: 'translateX(110%)' })),
			transition('display--left <=> hide--left', animate(200)),
			transition('display--right <=> hide--right', animate(200)),
		])
	]
})

export class SideBarComponent implements OnInit, OnDestroy, OnChanges {

	public	iPosition:	string;
	public	iToggle:	boolean;

	constructor () {

		/// Set Default
		this.iPosition	= "right";
		this.iToggle	= true;
	}

	ngOnChanges(_changes: SimpleChanges) {
	}

	ngOnDestroy () {
	}

	ngOnInit () {
	}
}