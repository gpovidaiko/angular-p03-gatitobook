import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from './new-user';

@Injectable({
	providedIn: 'root'
})
export class NewUserService {

	constructor(private httpClient: HttpClient) { }

	register(newUser: NewUser) {
		return this.httpClient.post('http://localhost:3000/user/signup', newUser);
	}

	checkIfExists(userName: string) {
		return this.httpClient.get(`http://localhost:3000/user/exists/${userName}`);
	}

}
