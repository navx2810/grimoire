export type Skill = { name: string, stat: 'cha'|'wis'|'str'|'con'|'dex'|'int', proficent: boolean }
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
	skills: Skill[] = [
		{ name: "Athletics", stat: 'str', proficent: false },
		{ name: "Acrobatics", stat: 'dex', proficent: false },
		{ name: "Sleight of Hand", stat: 'dex', proficent: false },
		{ name: "Stealth", stat: 'dex', proficent: false },
		{ name: "Arcana", stat: 'int', proficent: false },
		{ name: "History", stat: 'int', proficent: false },
		{ name: "Investigation", stat: 'int', proficent: false },
		{ name: "Nature", stat: 'int', proficent: false },
		{ name: "Religion", stat: 'int', proficent: false },
		{ name: "Animal Handling", stat: 'wis', proficent: false },
		{ name: "Insight", stat: 'wis', proficent: false },
		{ name: "Medicine", stat: 'wis', proficent: false },
		{ name: "Perception", stat: 'wis', proficent: false },
		{ name: "Survival", stat: 'wis', proficent: false },
		{ name: "Deception", stat: 'cha', proficent: false },
		{ name: "Intimidation", stat: 'cha', proficent: false },
		{ name: "Performance", stat: 'cha', proficent: false },
		{ name: "Persuasion", stat: 'cha', proficent: false },
	]
	str = { score: 10, bonus: 0, proficientSave: false }
	dex = { score: 10, bonus: 0, proficientSave: false }
	con = { score: 10, bonus: 0, proficientSave: false }
	int = { score: 10, bonus: 0, proficientSave: false }
	wis = { score: 10, bonus: 0, proficientSave: false }
	cha = { score: 10, bonus: 0, proficientSave: false }
	inspiration: boolean = false
	alignment: 'LG'|'NG'|'CG'|'LN'|'N'|'CN'|'LE'|'NE'|'CE' = "N"
}