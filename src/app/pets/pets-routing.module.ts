import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPetsComponent } from './list-pets/list-pets.component';
import { ListPetsResolver } from './list-pets/list-pets.resolver';
import { PetDetailComponent } from './pet-detail/pet-detail.component';

const routes: Routes = [
	{
		path: '',
		component: ListPetsComponent,
		resolve: {
			pets: ListPetsResolver
		}
	},
	{
		path: ':id',
		component: PetDetailComponent,
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetsRoutingModule { }
