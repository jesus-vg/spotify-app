import { Injectable }              from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map }                     from "rxjs/operators";

@Injectable( {
	providedIn: 'root'
} )

export class SpotifyService {
	token: string;

	constructor( private http: HttpClient ) {
		console.log( 'Spotify service working' )
		this.token = 'BQAmhslVq1a9-1ZoptBMTUpydMButHUTDxzEdM1PFZXK7MVzBHRGtLrrh_UCg18O8QHxkQyBQ_rSr1G0u9A';
	}

	getQuery( query: string ) {
		const url = `https://api.spotify.com/v1/${ query }`;

		const headers = new HttpHeaders( {
			'Authorization': `Bearer ${ this.token }`
		} );

		return this.http.get( url, { headers } );
	}

	getNewReleases() {
		return this.getQuery( 'browse/new-releases' )
			.pipe(
				map( ( data: any ) => data.albums.items )
			);
	}

	searchArtists( search: string ) {
		return this.getQuery( `search?q=${ search }&type=track%2Cartist&limit=10&offset=5` )
			.pipe(
				map( ( data: any ) => data.artists.items )
			);
	}
}
