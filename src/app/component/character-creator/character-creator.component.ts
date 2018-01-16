import { Component, OnInit } from "@angular/core";
import { Character } from "../../models/character";

@Component({
	selector: "grm-character-creator",
	templateUrl: "./character-creator.component.html",
	styleUrls: ["./character-creator.component.styl"]
})
export class CharacterCreatorComponent implements OnInit {

	character: Character = new Character()

	get skills() {
		return this.character.skills.sort((a,b) => a.name.localeCompare(b.name))
	}

	get health() { return this.character.hp.max }
	/** Bind to both the current and max hp */
	set health(v) { this.character.hp.max = this.character.hp.current = v }

	get stats() {
		const { str, dex, con, int, wis, cha } = this.character
		return [
			{name: "Strength", stat: str},
			{name: "Dexterity", stat: dex},
			{name: "Constitution", stat: con},
			{name: "Intelligence", stat: int},
			{name: "Wisdom", stat: wis},
			{name: "Charisma", stat: cha}
		]
	}

	save(character: Character) {
		// try to make a post to save a character.
	}

	constructor() {}

	ngOnInit() {}
}
