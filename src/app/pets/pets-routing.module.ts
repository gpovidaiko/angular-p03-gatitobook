import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPetsComponent } from './list-pets/list-pets.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';

const routes: Routes = [
	{
		path: '',
		component: ListPetsComponent,
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
