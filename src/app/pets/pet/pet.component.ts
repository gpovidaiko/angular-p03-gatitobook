import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl;

@Component({
	selector: 'app-pet',
	templateUrl: './pet.component.html',
	styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

	private _imgUrl: string = '';

	@Input() imgDescription: string = '';

	@Input() set imgUrl(imgUrl: string) {
		if (imgUrl.startsWith('data')) {
			this._imgUrl = imgUrl;
		} else {
			this._imgUrl = `${API}/imgs/${imgUrl}`
		}
	}

	get imgUrl(): string {
		return this._imgUrl;
	}

	constructor() { }

	ngOnInit(): void {
	}

}
