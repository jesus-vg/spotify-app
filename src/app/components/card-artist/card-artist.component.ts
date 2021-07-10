import { Component, Input } from '@angular/core';
import MagicGrid            from "magic-grid";
import { Router }           from "@angular/router";

@Component( {
	selector: 'app-card-artist',
	templateUrl: './card-artist.component.html',
	styles: [ `
		.card {
			width: 230px;
			cursor: pointer;
		}

		.hideData {
			overflow: hidden;
			height: 0;
		}

		@media (max-width: 575px) {
			.card {
				width: 90%;
			}
		}
	` ]
} )

export class CardArtistComponent {
	showData: boolean;
	@Input() items: any = [];

	constructor( private router: Router ) {
		this.showData = false;

		setTimeout( () => {
			console.log( 'initMasonry' )
			this.initMasonry();
		}, 1_000 )

		setTimeout( () => {
			// fixing bug masonry effect for position elements
			if ( this.magicGrid.items.length > 0 ) {
				this.showData = true;
				console.log( 'positionItems' )
				this.magicGrid.positionItems();
			}
		}, 2_000 )
	}

	magicGrid: any;

	initMasonry() {
		this.magicGrid = new MagicGrid( {
			container: '.my-grid',// Required. Can be a class, id, or an HTMLElement
			static: true, // Required for static content. Default: false.
			items: 20, // Required for dynamic content. Initial number of items in the container.
			gutter: 15, // Optional. Space between items. Default: 25(px).
			maxColumns: 5, // Optional. Maximum number of columns. Default: Infinite.
			useMin: true, // Optional. Prioritize shorter columns when positioning items? Default: false.
			useTransform: true, // Optional. Position items using CSS transform? Default: True.
			animate: true, // Optional. Animate item positioning? Default: false.
		} );

		if ( this.magicGrid.items.length > 0 ) {
			this.magicGrid.listen();
			this.magicGrid.positionItems();
		}
	}

	showDataArtist( data: any ) {

		const idArtist = data.type === 'artist' ? data.id : data.artists[0].id
		this.router.navigate( [ '/artist', idArtist ] ).then();
		console.log( idArtist )
	}
}


