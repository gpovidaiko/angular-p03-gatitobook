import { NewUserService } from './new-user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUser } from './new-user';
import { lowercaseValidator } from './lowercase.validator';
import { NewUserAsyncValidatorsService } from './new-user-async-validators.service';
import { equalsUserNamePasswordValidator } from './equals-username-password.validator';
import { Router } from '@angular/router';

@Component({
	selector: 'app-new-user',
	templateUrl: './new-user.component.html',
	styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

	public newUserForm!: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private newUserService: NewUserService,
		private newUserAsyncValidatorsService: NewUserAsyncValidatorsService,
		private router: Router
	) { }

	ngOnInit(): void {
		this.newUserForm = this.formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
			fullName: ['', [Validators.required, Validators.minLength(4)]],
			userName: ['', [lowercaseValidator], [this.newUserAsyncValidatorsService.userExists()]],
			password: ['']
		}, {
			validators: [equalsUserNamePasswordValidator]
		});
	}

	register() {
		if (this.newUserForm.valid) {
			const newUser = this.newUserForm.getRawValue() as NewUser;
			this.newUserService.register(newUser).subscribe(
				() => this.router.navigate(['']),
				(error) => console.error(error)
			)
		}
	}
}
