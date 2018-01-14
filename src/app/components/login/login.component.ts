import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";

@Component({
	selector: "grm-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.styl"]
})
export class LoginComponent implements OnInit {
	constructor(private userSvc: UserService, private router: Router) {}

	ngOnInit() {}

	async fbLogin() {
		try {
			const user = await this.userSvc.TryToGetUser()
			this.router.navigate(['auth'])
		} catch(e) {
			
		}
	}
}
