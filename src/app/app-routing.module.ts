import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// views
import { HomeComponent }   from "./views/home/home.component";
import { SearchComponent } from "./views/search/search.component";

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'search', component: SearchComponent },
	{ path: '', pathMatch: 'full', redirectTo: 'home' },
	{ path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule( {
	imports: [ RouterModule.forRoot( routes ) ],
	exports: [ RouterModule ]
} )

export class AppRoutingModule {
}
