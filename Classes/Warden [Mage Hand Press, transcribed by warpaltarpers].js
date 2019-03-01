var iFileName = "Warden [Mage Hand Press, transcribed by warpaltarpers].js";
RequiredSheetVersion(12.999);
// TODO: Solve nulls

SourceList["MHP:W"] = {
	name : "Mage Hand Press: Warden",
	abbreviation : "MHP:W",
	url: "https://store.magehandpress.com/products/warden",
};

ClassList["warden"] = {
	regExpSearch: /^(?=.*warden).*$/i,
	name: "Warden",
	source: ["MHP:W", 2],
	primaryAbility: "\n	\u2022	Warden: Constitution;",
	prereqs: null,
	die: 10,
	improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves: ["Str", "Con"],
	skills: ["\n\n" + toUni("Warden") + ": Choose two from Animal Handling, Athletics, Nature, Perception, and Survival", null],

	armor: [[true, true, false, true], null],
	weapons: [[true, true, false], null],
	equipment: "Warden starting equipment:\n	\u2022	A shield and any martial weapon;\n	\u2022	chain shirt -or- leather armor and a spear -or- chain mail (if proficient);\n	\u2022	two light hammers -or- any simple melee weapon;\n	\u2022	a dungeoneer's pack -or- an explorer's pack.",
	subclasses: ["Champion's Call", ["bloodwrath guardian", "verdant protector"]],

	attacks: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features: {
		"sentinels stand": {
			name: "Sentinel's Stand",
			source: ["MHP:W", 3],
			minLevel: 1,
			description: "\n	Choose one of the following features.",
			choices: ["Armor Proficiency", "Primal Toughness", "Stalwart Spirit"],
			"armor proficiency": {
				name: "Armor Proficiency",
				description: "\n	You gain proficiency with heavy armor.",
				armor: [[true, true, true, true], null],
			},
			"primal toughness": {
				name: "Primal Toughness",
				description: "\n	Your hit point maximum increases by 1 + your Constitution modifier, and it increases by 1 every time you gain a level in this class.",
				// TODO: Add HPM changes
			},
			"stalwart spirit": {
				name: "Stalwart Spirit",
				description: "\n	You gain proficiency in one saving throw of your choice.",
				// TODO: Add prof throw change
			},
		},

		"wardens mark": {
			name: "Warden's Mark",
			source: ["MHP:W", 3],
			minLevel: 1,
			description: "\n	At 1st level, you can use your bonus action to mark one creature you can see within 30 feet. Whenever you make a weapon attack against a creature you have marked, you gain a +2 bonus on the damage roll. The mark ends if you can no longer see the marked creature, if the marked creature dies, or if you use your bonus action to mark a different creature.\nAt 11th level, whenever you take the Attack action on your turn, you can make an additional attack against a creature you have marked.",
		},

		"duel": {
			name: "Duel",
			source: ["MHP:W", 3],
			minLevel: 2,
			description: "\n	At 2nd level, as a bonus action once per turn, when you make a melee weapon attack against a creature you have marked, you can compel it into a duel. Until the beginning of your next turn, while that creature is marked, it has disadvantage on attack rolls against any creature other than you.",
		},

		"fighting style": {
			name: "Fighting Style",
			source: ["MHP:W", 3],
			minLevel: 2,
			description: "\n	Choose one of the following styles.",
			choices: ["Crippling", "Great Weapon Fighting", "Protection", "Titan Fighting"],
			"crippling": {
				name: "Crippling",
				description: "\n	When you hit a creature with a melee weapon attack, its speed is reduced by 10 feet, to a minimum of 0, and it can’t take the Dash action until the end of its turn.",
			},
			"great weapon fighting": {
				name: "Great Weapon Fighting",
				description: "\n	When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll. The weapon must have the two-handed or versatile property for you to gain this benefit."
			},
			"protection": {
				name: "Protection",
				description: "\n	When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a weapon or shield.",
			},
			"titan fighting": {
				name: "Titan Fighting",
				description: "\n	You gain a +2 bonus to melee weapon attack rolls you make against Large or larger creatures.",
			},
		},

		
	},
};
