import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { LoginGuard } from './authentication/login.guard';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'home'
	},
	{
		path: 'home',
		canLoad: [ LoginGuard ],
		loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
	},
	{
		path: 'pets',
		canLoad: [ AuthenticationGuard ],
		loadChildren: () => import('./pets/pets.module').then(m => m.PetsModule)
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
