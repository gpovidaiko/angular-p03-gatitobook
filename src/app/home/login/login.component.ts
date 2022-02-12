import { AuthenticationService } from './../../authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	user: string = '';
	password: string = '';

	constructor(
		private authenticationService: AuthenticationService,
		private router: Router
	) { }

	ngOnInit(): void {
	}

	login() {
		this.authenticationService.authenticate(this.user, this.password).subscribe(
			() => this.router.navigate(['pets']),
			(error) => {
				alert('Usuário ou senha inválidos!');
				console.error(error);
			}
		);
	}

}
