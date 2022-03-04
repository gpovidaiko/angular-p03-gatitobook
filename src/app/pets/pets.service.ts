import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, mapTo, Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pet, Pets } from './pet';

const API = environment.apiUrl;
const NOT_MODIFIED = 304;

@Injectable({
	providedIn: 'root'
})
export class PetsService {

	constructor(private http: HttpClient) { }

	userList(userName: string): Observable<Pets> {
		return this.http.get<Pets>(`${API}/${userName}/photos`);
	}

	byId(id: number): Observable<Pet> {
		return this.http.get<Pet>(`${API}/photos/${id}`);
	}

	delete(id: number): Observable<Pet> {
		return this.http.delete<Pet>(`${API}/photos/${id}`);
	}

	like(id: number): Observable<boolean> {
		return this.http.post<boolean>(`${API}/photos/${id}/like`, { }, { observe: 'response' }).pipe(
			mapTo(true),
			catchError((error) => {
				return error.status === NOT_MODIFIED ? of(false) : throwError(error);
			})
		);
	}

}
