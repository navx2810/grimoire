import { Skills, Skill } from "./skills";

export class Character {
	name: string
	class: string
	speed: string
	exp: number = 0
	hp = {
		temp: 0,
		current: 0,
		max: 0
	}
	deathSaves = {
		fails: 0,
		successes: 0
	}
	skills: Skill[] = Object.assign([], Skills)
	str = { score: 10, bonus: 0, proficientSave: false }
	dex = { score: 10, bonus: 0, proficientSave: false }
	con = { score: 10, bonus: 0, proficientSave: false }
	int = { score: 10, bonus: 0, proficientSave: false }
	wis = { score: 10, bonus: 0, proficientSave: false }
	cha = { score: 10, bonus: 0, proficientSave: false }
	inspiration: boolean = false
	alignment: 'LG'|'NG'|'CG'|'LN'|'N'|'CN'|'LE'|'NE'|'CE' = "N"
}