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

	// error validation
	errorService: boolean
	errorMessage: string

	constructor( private spotify: SpotifyService ) {
		this.loading = true;
		this.noData = false;

		this.errorService = false
		this.errorMessage = '';
	}

	searchArtists( search: string ) {
		if ( search.trim() !== '' ) {
			this.loading = true;
			this.spotify.searchArtists( search )
				.subscribe( ( data: any ) => {
					// console.log( data )
					this.loading = false;
					this.noData = data.length === 0;
					this.artists = data;
				}, error => {
					this.errorService = true
					this.errorMessage = error.error.message
				} );
		}
	}

	timer: any;

	restrictNumeric( e: any, text: string ) {
		if ( /[A-Za-z\d\s]/.test( e.key ) ) {
			clearTimeout( this.timer );
			this.timer = setTimeout( () => {
				// console.log('searching');
				this.searchArtists( text );
			}, 500 )

			return true;
		} else {
			return false;
		}
	}
}
