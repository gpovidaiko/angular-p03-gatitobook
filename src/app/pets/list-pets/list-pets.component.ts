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

	pets$!: Observable<Pets>;

	constructor(
		private userService: UserService,
		private petsService: PetsService
	) { }

	ngOnInit(): void {
		this.pets$ = this.userService.getUser().pipe(
			switchMap((user: User) => {
				const userName = user.name ?? '';
				return this.petsService.userList(userName);
			})
		);
	}

}
