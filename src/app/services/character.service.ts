import { Injectable } from "@angular/core";
import { Character } from "../models/character";
import { UserToken, UserService } from "./user.service";
import { HttpClient } from "@angular/common/http";
import { CharacterDAO } from "../dao/character";

@Injectable()
export class CharacterService {

	selected: CharacterDAO = null
	list: Character[] = null

	constructor(private http: HttpClient, private userSvc: UserService) {}

	async save(meta: Character, id: number = 0) {
		try {
			return await this.http.post('/api/character', { meta, user: this.userSvc.user.userID, id }).toPromise()
		} catch(e) {
			return { errors: e }
		}
	}

	async load(id: number): Promise<CharacterDAO> {
		try {
			const char = await this.http.get(`/api/character/${id}`).toPromise() as CharacterDAO
			return char
		} catch(e) {
			return null
		}
	}
	
	async loadAll(force: boolean = false): Promise<Character[]> {
		if(force || !this.list) {
			const { userID } = await this.userSvc.TryToGetUser()
			if(userID) {
				try {
					const chars = await this.http.get(`/api/character/mine?user=${userID}`).toPromise() as Character[]
					return this.list = chars
				} catch(e) {
					return this.list = []
				}
			}
		} else {
			return this.list
		}
		
	}
}
