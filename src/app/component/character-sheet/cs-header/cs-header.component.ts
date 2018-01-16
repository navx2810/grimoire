import { Component, OnInit, Input } from "@angular/core";
import { CharacterService } from "../../../services/character.service";
import { Character } from "../../../models/character";

@Component({
	selector: "grm-cs-header",
	templateUrl: "./cs-header.component.html",
	styleUrls: ["./cs-header.component.styl"]
})
export class CsHeaderComponent implements OnInit {

	@Input() character: Character

	constructor() {}

	ngOnInit() {}
}
