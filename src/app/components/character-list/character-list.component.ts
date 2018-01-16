import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CharacterService } from "../../services/character.service";
import { Character } from "../../models/character";
import { CharacterDAO } from "../../dao/character";

@Component({
	selector: "grm-character-list",
	templateUrl: "./character-list.component.html",
	styleUrls: ["./character-list.component.styl"]
})
export class CharacterListComponent implements OnInit {

	characters: Character[] = []

	constructor(private router: Router, private characterSvc: CharacterService) {}

	async ngOnInit() {
		let chars = await this.characterSvc.loadAll()
		this.characters = chars
		this.characterSvc.selected = null
	}

	edit(char: CharacterDAO) {
		this.characterSvc.selected = char
		this.router.navigate(['character', 'edit', char.id])
	}

	select(char: CharacterDAO) {
		this.characterSvc.selected = char
		this.router.navigate(["character", char.id])
	}
}
