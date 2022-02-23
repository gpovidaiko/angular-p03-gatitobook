import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetsRoutingModule } from './pets-routing.module';
import { ListPetsComponent } from './list-pets/list-pets.component';
import { PetComponent } from './pet/pet.component';


@NgModule({
  declarations: [
    ListPetsComponent,
    PetComponent
  ],
  imports: [
    CommonModule,
    PetsRoutingModule
  ]
})
export class PetsModule { }
