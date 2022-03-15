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
				return error.status === NOT_MODIFIED ? of(false) : throwError(() => error);
			})
		);
	}

	upload(description: string, allowComments: boolean, file: File) {
		const formData = new FormData();
		formData.append('description', description);
		formData.append('allowComments', allowComments ? 'true' : 'false');
		formData.append('imageFile', file);

		return this.http.post(`${API}/photos/upload`, formData, { observe: 'events', reportProgress: true });
	}

}
