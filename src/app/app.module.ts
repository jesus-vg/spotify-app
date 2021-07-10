import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// routs
import { AppRoutingModule } from './app-routing.module';

// services
import { HttpClientModule } from "@angular/common/http";

// pipes
import { NoimagePipe } from './pipes/noimage.pipe';

// masonry
import { NgxMasonryModule }        from 'ngx-masonry';
// the NgxMasonryModule library need the BrowserAnimationsModule module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// views
import { HomeComponent }   from './views/home/home.component';
import { SearchComponent } from './views/search/search.component';
import { ArtistComponent } from './views/artist/artist.component';

// components
import { AppComponent }        from './app.component';
import { NavbarComponent }     from './components/shared/navbar/navbar.component';
import { CardArtistComponent } from './components/card-artist/card-artist.component';
import { LoadingComponent }    from './components/loading/loading.component';

@NgModule( {
	declarations: [
		AppComponent,
		HomeComponent,
		SearchComponent,
		NavbarComponent,
		CardArtistComponent,
		NoimagePipe,
		LoadingComponent,
		ArtistComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		NgxMasonryModule,
		BrowserAnimationsModule,
		// MagicGrid
	],
	providers: [],
	bootstrap: [ AppComponent ]
} )
export class AppModule {
}
