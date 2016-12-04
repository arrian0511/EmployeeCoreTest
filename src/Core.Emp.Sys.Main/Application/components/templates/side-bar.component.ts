import {Component, Input, OnInit, trigger, state, style, transition, keyframes, animate} from '@angular/core';

@Component({
	selector: 'side-bar',
	templateUrl: "views/templates/side-bar.html",
	inputs: [
		'iToggleMode'
	],
	animations: [
  trigger('fade', [
		transition('* => fadeInRight', [
			animate("2000ms", keyframes([
				style({opacity: 0, transform: 'translate3d(40%, 0, 0)', offset: 0}),
				style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1})
			]))
		]),
		transition(":enter", [
  			style({ opacity: 0 }),
  			animate(500, style({ opacity: 1 }))
		]),
		transition(":leave", [
  			animate(500, style({ opacity: 0 }))
		])
  ])
	// 	trigger("OnToggleSideBar", [
	// 		 state("in", style({ transform: "translateX(50%)"})),
	// 		// //state("hide", style({ transform: "translateX(100%)"})),
	// 		 transition("* => void", [style({transform: "translateX(100%)"}), animate('5s')]),
	// 		 transition("void => *", [animate('5s'), style({transform: "translateX(100%)"})])
    // // transition('* => fadeInDown', [

    // //     animate(('5s'), keyframes([

    // //         style({opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 0}),

    // //         style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1})

    // //     ]))

    // // ]),			
		// ])
	]
})

export class SideBarComponent {

	public mDisplay: string;
	constructor () {

	}

	onClickState() {
		this.mDisplay = this.mDisplay == 'show'? 'hide' : 'show';
	}
}
