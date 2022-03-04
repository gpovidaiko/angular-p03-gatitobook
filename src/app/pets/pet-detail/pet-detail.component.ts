import { PetsService } from './../pets.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-pet-detail',
	templateUrl: './pet-detail.component.html',
	styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {

	id!: number;
	pet$!: Observable<Pet>;

	constructor(
		private petsService: PetsService,
		private activatedRoute: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit(): void {
		this.id = this.activatedRoute.snapshot.params['id'];
		this.pet$ = this.petsService.byId(this.id);
	}

	like() {
		this.petsService.like(this.id).subscribe({
			next: (liked) => {
				if (liked) this.pet$ = this.petsService.byId(this.id)
			},
			error: (error) => console.log(error)
		})
	}

	delete() {
		this.petsService.delete(this.id).subscribe({
			next: () => this.router.navigate(['/pets/']),
			error: (error) => console.log(error)
		})
	}

}
