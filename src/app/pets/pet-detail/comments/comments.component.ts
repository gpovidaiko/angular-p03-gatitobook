import { CommentsService } from './comments.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, switchMap, tap } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Comments } from './comments';

@Component({
	selector: 'app-comments',
	templateUrl: './comments.component.html',
	styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

	@Input() petId!: number;

	comments$!: Observable<Comments>;
	commentForm!: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private commentsService: CommentsService
	) { }

	ngOnInit(): void {
		this.comments$ = this.commentsService.petList(this.petId);
		this.commentForm = this.formBuilder.group({
			comment: ['', Validators.maxLength(300)]
		});
	}

	add() {
		const comment = this.commentForm.get('comment')?.value ?? '';
		this.comments$ = this.commentsService.addComment(this.petId, comment).pipe(
			switchMap(() => this.commentsService.petList(this.petId)),
			tap(() => {
				this.commentForm.reset();
				alert('Comentário registrado');
			})
		);
	}

}
