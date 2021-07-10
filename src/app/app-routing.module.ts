import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// views or pages
import { HomeComponent }   from "./views/home/home.component";
import { SearchComponent } from "./views/search/search.component";
import { ArtistComponent } from "./views/artist/artist.component";

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'search', component: SearchComponent },
	{ path: 'artist/:id', component: ArtistComponent },
	{ path: '', pathMatch: 'full', redirectTo: 'home' },
	{ path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule( {
	imports: [ RouterModule.forRoot( routes ) ],
	exports: [ RouterModule ]
} )

export class AppRoutingModule {
}
