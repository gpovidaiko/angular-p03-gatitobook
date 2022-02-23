import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewUser } from './new-user';

const API = environment.apiUrl;

@Injectable({
	providedIn: 'root'
})
export class NewUserService {

	constructor(private httpClient: HttpClient) { }

	register(newUser: NewUser) {
		return this.httpClient.post(`${API}/user/signup`, newUser);
	}

	checkIfExists(userName: string) {
		return this.httpClient.get(`${API}/user/exists/${userName}`);
	}

}
