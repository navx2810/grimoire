import { Injectable, OnInit } from '@angular/core'
import { database } from "firebase"
import { RepoService } from "./repo.service"

@Injectable()
export class CharactersService {

	characters = []
	private characterRef: database.Reference

	constructor(public repo: RepoService) {
		this.characterRef = this.repo.db.ref("characters")
		this.characterRef.on('value', (data) => {
			const chars = data.val()
			this.characters = chars
		})
	}
}
