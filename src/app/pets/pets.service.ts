import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pets } from './pet';
import { TokenService } from '../authentication/token.service';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl;

@Injectable({
	providedIn: 'root'
})
export class PetsService {

	constructor(
		private http: HttpClient,
		private tokenService: TokenService
	) { }

	userList(userName: string): Observable<Pets> {
		const headers = this.getHeaders();
		return this.http.get<Pets>(`${API}/${userName}/photos`, { headers });
	}

	getHeaders(): HttpHeaders {
		const token = this.tokenService.getToken();
		const headers = new HttpHeaders().append('x-access-token', token);
		return headers;
	}

}
