import { Component }      from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";

@Component( {
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ]
} )

export class HomeComponent {
	newReleases: any[] = [];
	loading: boolean;

	// error validation
	errorService: boolean
	errorMessage: string

	constructor( private spotify: SpotifyService ) {
		this.loading = true;
		this.errorService = false
		this.errorMessage = '';

		this.spotify.getNewReleases()
			.subscribe( ( data: any ) => {
				// console.log( data );
				this.loading = false;
				this.newReleases = data;
			}, error => {
				console.log(error)
				// console.log(error.error.error.message)
				this.errorService = true
				this.errorMessage = error.error.error.message
			} );
	}

}
