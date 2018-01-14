export class Weapon {
	id: string
	name: string
	cost: string
	damage: string
	type: 'Bludgeoning'|'Piercing'|'Slashing'|'Special'
	category: 'Simple Melee'|'Martial Melee'|'Simple Ranged'|'Martial Ranged'
	weight: number
	range?: string
}