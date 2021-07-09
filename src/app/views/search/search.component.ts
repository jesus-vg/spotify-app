import { Component }      from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";

@Component( {
	selector: 'app-search',
	templateUrl: './search.component.html',
	styles: []
} )
export class SearchComponent {

	artists: any[] = [];

	loading: boolean;
	noData: boolean;

	constructor( private spotify: SpotifyService ) {
		this.loading = true;
		this.noData = false;
	}

	searchArtists( search: string ) {
		if ( search.trim() !== '' ) {
			this.loading = true;
			this.spotify.searchArtists( search )
				.subscribe( ( data: any ) => {
					console.log( data )
					this.loading = false;
					this.noData = data.length === 0;
					this.artists = data;
				} )
		}
	}

	restrictNumeric( e: any, text: string ) {
		if ( /[A-Za-z\d\s]/.test( e.key ) ) {
			this.searchArtists( text );
			return true;
		} else {
			return false;
		}
	}
}
