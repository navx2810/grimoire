import { Component, OnInit, Input } from "@angular/core";
import { Character } from "../../models/character";
import { CharacterService } from "../../services/character.service";
import { Router, ActivatedRoute } from "@angular/router";
import { CharacterDAO } from "../../dao/character";

@Component({
	selector: "grm-character-creator",
	templateUrl: "./character-creator.component.html",
	styleUrls: ["./character-creator.component.styl"]
})
export class CharacterCreatorComponent implements OnInit {
	character: Character = new Character();
	id: number = null;

	get skills() {
		return this.character.skills.sort((a, b) =>
			a.name.localeCompare(b.name)
		);
	}

	get health() {
		return this.character.hp.max;
	}
	/** Bind to both the current and max hp */
	set health(v) {
		this.character.hp.max = this.character.hp.current = v;
	}

	get stats() {
		const { str, dex, con, int, wis, cha } = this.character;
		return [
			{ name: "Strength", stat: str },
			{ name: "Dexterity", stat: dex },
			{ name: "Constitution", stat: con },
			{ name: "Intelligence", stat: int },
			{ name: "Wisdom", stat: wis },
			{ name: "Charisma", stat: cha }
		];
	}

	async save(character: Character) {
		let user = await this.characterSvc.save(character, this.id);
		if (user) {
			this.router.navigate(["character", "list"]);
		}
		// try to make a post to save a character.
	}

	constructor(
		private characterSvc: CharacterService,
		private router: Router,
		private route: ActivatedRoute
	) {}

	async ngOnInit() {
		let params = await new Promise( resolve => this.route.params.subscribe(params => resolve(params)) );
		if (params["id"]) {
			if ( this.characterSvc.selected && this.characterSvc.selected.id === params["id"] ) {
				this.character = this.characterSvc.selected.meta;
				this.id = this.characterSvc.selected.id
			} else {
				const char = await this.characterSvc.load(params["id"]);
				this.character = char.meta
				this.characterSvc.selected = char
				this.id = params["id"]
			}
		}
		// this.route.params.subscribe(async ({ id }) => {
		// 	if(id) {
		// 		this.id = id
		// 		if(this.characterSvc.selected && this.characterSvc.selected.id === id) {
		// 			this.character = this.characterSvc.selected.meta
		// 			this.id = id
		// 		} else {
		// 			// need to fetch a new character
		// 			this.character = await this.characterSvc.load(id)
		// 		}
		// 	}
		// })
	}
}
