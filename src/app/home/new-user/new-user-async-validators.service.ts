import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs';
import { NewUserService } from './new-user.service';

@Injectable({
	providedIn: 'root'
})
export class NewUserAsyncValidatorsService {

	constructor(private newUserService: NewUserService) { }

	userExists() {
		return (control: AbstractControl) => {
			return control.valueChanges.pipe(
				switchMap(userName => this.newUserService.checkIfExists(userName)),
				map(exists => exists ? { userExists: true } : false),
				first()
			)
		}
	}

}
