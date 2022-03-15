import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from '../components/card/card.module';
import { SharedModule } from '../shared/shared.module';
import { ListPetsComponent } from './list-pets/list-pets.component';
import { CommentsComponent } from './pet-detail/comments/comments.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { PetComponent } from './pet/pet.component';
import { PetsRoutingModule } from './pets-routing.module';
import { PhotoGridComponent } from './photo-grid/photo-grid.component';
import { NewPetComponent } from './new-pet/new-pet.component';



@NgModule({
  declarations: [
    ListPetsComponent,
    PetComponent,
    PhotoGridComponent,
    PetDetailComponent,
    CommentsComponent,
    NewPetComponent
  ],
  imports: [
    CommonModule,
    PetsRoutingModule,
	CardModule,
	SharedModule
  ]
})
export class PetsModule { }
