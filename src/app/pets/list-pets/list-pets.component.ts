import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../authentication/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Pets } from '../pet';
import { PetsService } from '../pets.service';
import { User } from 'src/app/authentication/user/user';
import { switchMap, Observable } from 'rxjs';

@Component({
	selector: 'app-list-pets',
	templateUrl: './list-pets.component.html',
	styleUrls: ['./list-pets.component.css']
})
export class ListPetsComponent implements OnInit {

	pets!: Pets;

	constructor(private activatedRoute: ActivatedRoute) { }

	ngOnInit(): void {
		this.activatedRoute.params.subscribe({
			next: () => this.pets = this.activatedRoute.snapshot.data['pets']
		});
	}

}
