import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comment, Comments } from './comments';

const API = environment.apiUrl;

@Injectable({
	providedIn: 'root'
})
export class CommentsService {

	constructor(private httpClient: HttpClient) { }

	petList(petId: number): Observable<Comments> {
		return this.httpClient.get<Comments>(`${API}/photos/${petId}/comments`);
	}

	addComment(petId: number, text: string): Observable<Comment> {
		return this.httpClient.post<Comment>(`${API}/photos/${petId}/comments`, { commentText: text });
	}
}
