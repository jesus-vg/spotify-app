import { Component }                        from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from "@angular/router";
import { SpotifyService }                   from "../../services/spotify.service";

@Component( {
	selector: 'app-artist',
	templateUrl: './artist.component.html',
	styleUrls: [ './artist.component.css' ]
} )
export class ArtistComponent {

	loading: boolean;
	dataArtist: any = [];
	topTracks: any = [];

	constructor( private router: ActivatedRoute,
				 private spotify: SpotifyService ) {
		this.loading = true;

		router.params.subscribe( params => {
			this.getDataArtist( params['id'] );
			this.getTopTracks( params['id'] );
		} )
	}

	getDataArtist( idArtist: string ) {
		this.spotify.getDataArtist( idArtist ).subscribe( dataArtist => {
			console.log( dataArtist )
			this.loading = false;
			this.dataArtist = dataArtist;
		} )
	}

	getTopTracks( idArtist: string ) {
		this.spotify.getTopTracks( idArtist ).subscribe( topTracks => {
			console.log('data topTracks')
			console.log(topTracks)
			this.topTracks = topTracks;
		} )
	}

}
