import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character';
import { CharacterService } from '../../services/character.service';
import { RouterLink } from '@angular/router/src/directives/router_link';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'grm-character-sheet',
	templateUrl: './character-sheet.component.html',
	styleUrls: ['./character-sheet.component.styl']
})
export class CharacterSheetComponent implements OnInit {

	character: Character

	constructor(private characterSvc: CharacterService, private route: ActivatedRoute) { }

	async ngOnInit() {
		let params = await new Promise( resolve => this.route.params.subscribe(params => resolve(params)) );
		if (params["id"]) {
			if ( this.characterSvc.selected && this.characterSvc.selected.id === params["id"] ) {
				this.character = this.characterSvc.selected.meta;
			} else {
				const char = await this.characterSvc.load(params["id"]);
				this.characterSvc.selected = char
				this.character = char.meta
			}
		}
	}

}
