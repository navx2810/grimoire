import { Injectable } from "@angular/core";
import { Character } from "../models/character";
import { UserToken } from "./user.service";
import { HttpClient } from "@angular/common/http/src/client";

@Injectable()
export class CharacterService {
	constructor(private http: HttpClient) {}

	async save(meta: Character, user: UserToken, id: number = 0) {
		if(!id) {
			try {
				const res = await this.http.post('/api/character', { meta, user: user.userID, id }).toPromise()
			} catch(e) {
				return { errors: e }
			}
		}
	}
}
