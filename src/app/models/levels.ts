type Level = {
	level: number
	currentLevelXp: number
	proficencyBonus: number
}

export default new class {
	private levels: Level[] = [
		{ level: 1, currentLevelXp: 0, proficencyBonus: 2 },
		{ level: 2, currentLevelXp: 300, proficencyBonus: 2 },
		{ level: 3, currentLevelXp: 900, proficencyBonus: 2 },
		{ level: 4, currentLevelXp: 2700, proficencyBonus: 2 },
		{ level: 5, currentLevelXp: 6500, proficencyBonus: 3 },
		{ level: 6, currentLevelXp: 14000, proficencyBonus: 3 },
		{ level: 7, currentLevelXp: 23000, proficencyBonus: 3 },
		{ level: 8, currentLevelXp: 34000, proficencyBonus: 3 },
		{ level: 9, currentLevelXp: 48000, proficencyBonus: 4 },
		{ level: 10, currentLevelXp: 64000, proficencyBonus: 4 },
		{ level: 11, currentLevelXp: 85000, proficencyBonus: 4 },
		{ level: 12, currentLevelXp: 100000, proficencyBonus: 4 },
		{ level: 13, currentLevelXp: 120000, proficencyBonus: 5 },
		{ level: 14, currentLevelXp: 140000, proficencyBonus: 5 },
		{ level: 15, currentLevelXp: 165000, proficencyBonus: 5 },
		{ level: 16, currentLevelXp: 195000, proficencyBonus: 5 },
		{ level: 17, currentLevelXp: 225000, proficencyBonus: 6 },
		{ level: 18, currentLevelXp: 265000, proficencyBonus: 6 },
		{ level: 19, currentLevelXp: 305000, proficencyBonus: 6 },
		{ level: 20, currentLevelXp: 355000, proficencyBonus: 6 }
	]

	getLevelFor(level: number) {
		return this.levels[level-1]
	}

	getCurrentLevel(exp: number) {
		this.levels.find(it => it.currentLevelXp >= exp)
	}
}