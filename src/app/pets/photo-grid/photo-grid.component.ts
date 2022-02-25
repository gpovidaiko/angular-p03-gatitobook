import { Component, Input, OnInit } from '@angular/core';
import { Pets } from '../pet';

@Component({
	selector: 'app-photo-grid',
	templateUrl: './photo-grid.component.html',
	styleUrls: ['./photo-grid.component.css']
})
export class PhotoGridComponent implements OnInit {

	@Input() pets: Pets = [];

	constructor() { }

	ngOnInit(): void {
	}

}
