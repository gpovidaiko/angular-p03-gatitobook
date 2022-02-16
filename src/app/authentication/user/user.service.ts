import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	private userSubject = new BehaviorSubject<User>({});

	constructor(private tokenService: TokenService) {
		if (this.tokenService.hasToken()) {
			this.decodeJwt();
		}
	}

	private decodeJwt() {
		const token = this.tokenService.getToken();
		const user = jwt_decode(token) as User;
		this.userSubject.next(user)
	}

	getUser() {
		return this.userSubject.asObservable();
	}

	saveToken(token: string) {
		this.tokenService.setToken(token);
		this.decodeJwt();
	}

	logout() {
		this.tokenService.deleteToken();
		this.userSubject.next({});
	}

	isLogged() {
		return this.tokenService.hasToken();
	}
}
