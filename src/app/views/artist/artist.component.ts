import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { SpotifyService }         from "../../services/spotify.service";

@Component( {
	selector: 'app-artist',
	templateUrl: './artist.component.html',
	styleUrls: [ './artist.component.css' ]
} )
export class ArtistComponent implements OnInit {

	ngOnInit(): void {
		// this.initPlayer();
	}

	loading: boolean;
	dataArtist: any = [];
	topTracks: any = [];


	constructor( private routerActivatedRoute: ActivatedRoute,
				 private router: Router,
				 private spotify: SpotifyService ) {
		this.loading = true;


		routerActivatedRoute.params
			.subscribe( params => {
				this.getDataArtist( params['id'] );
				this.getTopTracks( params['id'] );
			});

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
			console.log( 'data topTracks' )
			console.log( topTracks );
			this.topTracks = topTracks;
		} )
	}

	showDataArtist( idArtist: string ) {
		this.router.navigate( [ '/artist', idArtist ] ).then();
		// console.log( idArtist )
	}

}
