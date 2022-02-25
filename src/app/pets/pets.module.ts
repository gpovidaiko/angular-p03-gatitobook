import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetsRoutingModule } from './pets-routing.module';
import { ListPetsComponent } from './list-pets/list-pets.component';
import { PetComponent } from './pet/pet.component';
import { PhotoGridComponent } from './photo-grid/photo-grid.component';
import { CardModule } from '../components/card/card.module';


@NgModule({
  declarations: [
    ListPetsComponent,
    PetComponent,
    PhotoGridComponent
  ],
  imports: [
    CommonModule,
    PetsRoutingModule,
	CardModule
  ]
})
export class PetsModule { }
