import { UserService } from './user/user.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl;

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {

	constructor(
		private httpClient: HttpClient,
		private userService: UserService
	) { }

	authenticate(user: string, password: string): Observable<HttpResponse<any>> {
		return this.httpClient.post(`${API}/user/login`, { userName: user, password: password }, { observe: 'response' }).pipe(
			tap((response) => {
				const authToken = response.headers.get('x-access-token') ?? '';
				this.userService.saveToken(authToken);
			})
		);
	}

}
