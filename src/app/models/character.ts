export class Character {
	id: string
	user: string
	userName: string
	name: string
	class: string
	exp: number = 0
	hp: number
	hpMax: number
	hpTemp: number
	deathSaveFails: number = 0
	deathSaveSuccesses: number = 0
	skills: object
	str: number
	strBonus: number
	dex: number
	dexBonus: number
	con: number
	conBonus: number
	int: number
	intBonus: number
	wis: number
	wisBonus: number
	cha: number
	chaBonus: number
	inspiration: boolean = false
	alignment: string
}