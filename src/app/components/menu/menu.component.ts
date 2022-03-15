import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

	show = false;

	constructor() { }

	ngOnInit(): void {
	}

	toggle() {
		this.show = !this.show;
	}

}
