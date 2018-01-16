import { Component, OnInit, Input } from "@angular/core";
import { Character } from "../../../models/character";

@Component({
	selector: "grm-cs-scores-skills",
	templateUrl: "./scores-skills.component.html",
	styleUrls: ["./scores-skills.component.styl"]
})
export class ScoresSkillsComponent implements OnInit {

	@Input() character: Character

	constructor() {}

	ngOnInit() {}
}
