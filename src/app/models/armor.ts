export class Armor {
	id: string
	name: string
	cost: string
	// 0 means any strength
	strRequired: number
	// Shields use this field to represent how much bonus they give.
	ac: number
	// Dex Mod is the modifier the AC can be added with. So Hide can add a max of 2. 0 is no dex mod. MaxInt is any mod number.
	maxDexMod: number
	stealthDisadvantage: boolean
	weight: number
	category: 'Light'|'Medium'|'Heavy'|'Misc'|'Shield'
}