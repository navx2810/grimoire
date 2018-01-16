import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";

/**
 * Auth component will be used to determine who you are and route you appropriately.
 * Dungeon Masters may want to go to their own screen, but they might want to choose to play as players
 * which will take them to the character select screen.
 */

@Component({
	selector: "grm-auth",
	templateUrl: "./auth.component.html",
	styleUrls: ["./auth.component.styl"]
})
export class AuthComponent implements OnInit {
	constructor(private userSvc: UserService, private router: Router) {}

	ngOnInit() {
		if(this.userSvc.user) {
			this.router.navigate(['character'])
		} else {
			this.router.navigate(['login'])
		}
	}
}
