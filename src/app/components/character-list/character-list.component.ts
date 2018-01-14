import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "grm-character-list",
	templateUrl: "./character-list.component.html",
	styleUrls: ["./character-list.component.styl"]
})
export class CharacterListComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit() {}
}
