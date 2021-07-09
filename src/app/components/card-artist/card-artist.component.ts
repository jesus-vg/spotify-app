import { Component, Input, OnInit } from '@angular/core';
import MagicGrid                    from "magic-grid";

@Component( {
	selector: 'app-card-artist',
	templateUrl: './card-artist.component.html',
	styles: [ `
		.card {
			width: 230px;
		}

		.gallery {
			transition: height 3s ease-in;
			overflow: hidden;
		}

		.showData {
			height: 100%;
		}

		.hideData {
			height: 0;
		}

		@media (max-width: 575px) {
			.card {
				width: 90%;
			}
		}
	` ]
} )

export class CardArtistComponent implements OnInit {
	showData: boolean;

	ngOnInit(): void {
		console.log( 'init' )
		setTimeout( () => {
			this.initMasonry();
			this.showData = true;
		}, 1_000 )
	}

	@Input() items: any = [];

	constructor() {
		this.showData = false;
	}

	initMasonry() {
		const magicGrid: any = new MagicGrid( {
			container: '.my-grid',// Required. Can be a class, id, or an HTMLElement
			static: true, // Required for static content. Default: false.
			// items: 30, // Required for dynamic content. Initial number of items in the container.
			gutter: 15, // Optional. Space between items. Default: 25(px).
			maxColumns: 5, // Optional. Maximum number of columns. Default: Infinite.
			useMin: false, // Optional. Prioritize shorter columns when positioning items? Default: false.
			useTransform: true, // Optional. Position items using CSS transform? Default: True.
			animate: true, // Optional. Animate item positioning? Default: false.
		} );

		if ( magicGrid.items.length > 0 ) {
			magicGrid.listen();
			magicGrid.positionItems();
		}
	}
}


