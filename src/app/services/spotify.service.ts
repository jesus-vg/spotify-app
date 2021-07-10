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
		this.token = 'BQCkkm8Bs1Zh2Z0HYC8JhDkTeK15oMuTtixnaznPjvWsJ-nHjKBqBdbaU8hcWP0B3a6s4T2Joo-Nw_pDdFo';
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
		return this.getQuery( `search?q=${ search }&type=artist&limit=10&offset=5` )
			.pipe(
				map( ( data: any ) => data.artists.items )
			);
	}

	getDataArtist( idArtist: string ) {
		return this.getQuery( `artists/${ idArtist }` );
	}

	getTopTracks( idArtist: string ) {
		return this.getQuery( `artists/${ idArtist }/top-tracks?market=us` )
		.pipe(
			map( ( data: any ) => data.tracks)
		)
	}

}
