import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { PetsService } from './../pets.service';

@Component({
	selector: 'app-new-pet',
	templateUrl: './new-pet.component.html',
	styleUrls: ['./new-pet.component.css']
})
export class NewPetComponent implements OnInit {

	form!: FormGroup;
	file!: File;
	preview!: string;
	progress: number = 0;

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private petsService: PetsService
	) { }

	ngOnInit(): void {
		this.form = this.formBuilder.group({
			file: ['', Validators.required],
			description: ['', Validators.maxLength(300)],
			allowComments: [true]
		});
	}

	upload() {
		const description = this.form.get('description')?.value ?? '';
		const allowComments = this.form.get('allowComments')?.value ?? false;

		this.petsService.upload(description, allowComments, this.file).pipe(
			finalize(() => this.router.navigate(['pets']))
		).subscribe({
			next: (event: HttpEvent<any>) => {
				if (event.type === HttpEventType.UploadProgress) {
					const total = event.total ?? 1;
					this.progress = Math.round(100 * (event.loaded / total));
				}
			},
			error: (error) => console.log(error)
		});
	}

	load(eventTarget: any) {
		const [file] = eventTarget?.files;
		this.file = file;
		const reader = new FileReader();
		reader.onload = (event: any) => (this.preview = event.target.result);
		reader.readAsDataURL(file);
	}
}
