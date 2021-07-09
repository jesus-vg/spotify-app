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

	constructor( private spotify: SpotifyService ) {
		this.loading = true;
		this.spotify.getNewReleases()
			.subscribe( ( data: any ) => {
				console.log( data );
				this.loading = false;
				this.newReleases = data;
			} );
	}

}
