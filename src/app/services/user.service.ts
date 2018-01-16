import { Injectable } from "@angular/core";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

export type UserToken = { accessToken: string; userID: string };

@Injectable()
export class UserService {
	private userToken: UserToken = null;

	get user() {
		return this.userToken;
	}

	constructor() {}

	async TryToGetUser() {
		let user = this.userToken;
		if (!user) {
			try {
				user = await this.checkLoginStatus();
			} catch (e) {
				try {
					user = await this.LogIn();
				} catch (e) {
					console.error(e);
					throw new Error("You could not log in.");
				}
			}
		}
		return (this.userToken = user);
	}

	private checkLoginStatus() {
		return new Promise<UserToken>((resolve, reject) => {
			FB.getLoginStatus(({ status, authResponse }: LoginStatusCB) => {
				switch (status) {
					case "connected":
						const { accessToken, userID } = authResponse;
						resolve({ accessToken, userID });
						break;
					default:
						reject();
				}
			});
		});
	}

	LogIn(): Promise<UserToken> {
		return new Promise(resolve => {
			FB.login(
				cb => {
					if (cb.status === "success") {
						resolve(cb.authResponse);
					} else {
						resolve(cb);
					}
				},
				{ scope: "email" }
			);
		});
	}
}
