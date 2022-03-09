import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot, Resolve,
	RouterStateSnapshot
} from '@angular/router';
import { Observable, switchMap, take } from 'rxjs';
import { Pets } from '../pet';
import { UserService } from './../../authentication/user/user.service';
import { PetsService } from './../pets.service';

@Injectable({
	providedIn: 'root'
})
export class ListPetsResolver implements Resolve<Pets> {

	constructor(
		private petsService: PetsService,
		private userService: UserService
	) { }

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pets> {
		return this.userService.getUser().pipe(
			switchMap((user) => this.petsService.userList(user.name ?? '')),
			take(1)
		);
	}
}
