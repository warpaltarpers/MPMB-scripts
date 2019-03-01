var iFileName = "Warden [Mage Hand Press, transcribed by warpaltarpers].js";
RequiredSheetVersion(12.999);
// TODO: Solve nulls

// Mage Hand Press Source
SourceList["MHP:W"] = {
	name : "Mage Hand Press: Warden",
	abbreviation : "MHP:W",
	url: "https://store.magehandpress.com/products/warden",
};

// Champion's Call - Bloodwrath Guardian
AddSubClass(
	"warden",
	"bloodwrath guardian",
	{
		regExpSearch: /^(?=.*bloodwrath)(?=.*guardian).*$/i,
		subname: "Bloodwrath Guardian",
		source: ["MHP:W", 4],
		features: {
			"subclassfeature3": {
				name: "Feral Trance",
				source: ["MHP:W", 4],
				minLevel: 3,
				description: "\n	Starting at 3rd level, you can fall into a primal battle trance as a bonus action. While in your trance, you gain the following benefits if you aren’t holding a shield or wearing heavy armor:\n	\u2022	You have advantage on Strength checks and Strength saving throws.\n	\u2022	Your base movement speed increases by 10 feet.\n	\u2022	Once per turn, when you make an attack roll against a creature, you can end your current mark, and mark that creature instead.\n	\u2022	When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you.\n	Your trance lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven’t attacked a hostile creature since your last turn or taken damage since then. You can also end your trance on your turn as a bonus action.\n	Once you use this ability, you can't use it again until you finish a short or long rest.",
			},
			"subclassfeature6": {
				name: "Predator's Scent",
				source: ["MHP:W", 4],
				minLevel: 6,
				description: "\n	By 6th level, you hunt like an animal. A creature you have marked remains marked for 24 hours, even if it moves out of your sight and further than 30 feet away. You gain no damage bonus against the creature while it is out of range, but you can track it effortlessly. While this creature is marked, you know the direction of, but not the distance to, the creature.",
			},
			"subclassfeature13": {
				name: "Evasion",
				source: ["MHP:W", 5],
				minLevel: 13,
				description: "\n	Beginning at 13th level, you can nimbly dodge out of the way of certain area effects, such as a red dragon’s fiery breath or an ice storm spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.",
			},
			"subclassfeature20": {
				name: "Form of the Primal Beast",
				source: ["MHP:W", 5],
				minLevel: 20,
				description: "\n	At 20th level, as an action, you can transform into a hunched thing of fur and shadow, an echo of the Primal Beast. For 1 minute, you gain the following features:\n	\u2022	You gain all the benefits of Feral Trance.\n	\u2022	You gain temporary HP equal to twice your level.\n	\u2022	Once per turn, when you hit a creature with a melee weapon attack, you can wound the target. At the start of each of the wounded creature's turns, it takes 1d8 necrotic damage for each time you've wounded it, and it can then make a Constitution saving throw (save DC equals 8 + your proficiency bonus + your Strength modifier), ending the effect of all such wounds on itself on a success. Alternatively, the wounded creature, or a creature within 5 feet of it, can use an action to make a DC 15 Wisdom (Medicine) check, ending the effect of such wounds on it on a success.\n	Once you use this feature, you can't use it again until you finish a long rest.",
			},
		}
	}
);

// Champion's Call - Verdant Protector
AddSubClass(
	"warden",
	"verdant protector",
	{
		regExpSearch: /^(?=.*verdant)(?=.*protector).*$/i,
		subname: "Verdant Protector",
		source: ["MHP:W", 5],
		features: {
			"subclassfeature3": {
				name: "Green Mark",
				source: ["MHP:W", 5],
				minLevel: 3,
				description: "\n	Starting at 3rd level, when you mark a creature, the plants of the earth come alive to hinder its progress. While this creature is within 30 feet of you, the ground it walks on is difficult terrain.",
			},
			"subclassfeature6": {
				name: "Verdant Skin",
				source: ["MHP:W", 5],
				minLevel: 6,
				description: "\n	At 6th level, you gain proficiency in the Stealth skill, if you did not have it before. Additionally, you can use your action to draw a thick mass of vines and leaves to conceal you. Until you move, you have a advantage on Dexterity (Stealth) checks you make to hide among vegetation.",
			},
			"subclassfeature13": {
				name: "Mettle",
				source: ["MHP:W", 5],
				minLevel: 13,
				description: "\n	At 13th level, your determination allows you to shrug off effects that would otherwise harm you. When you are subjected to an effect that allows you to make a Constitution saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.",
			},
			"subclassfeature20": {
				name: "Form of the Oak Sentinel",
				source: ["MHP:W", 5],
				minLevel: 20,
				description: "\n	Starting at 20th level, you can use your action to transform into an oak sentinel, a bark-covered titan of the forest. For 1 minute, you gain the following features:\n	\u2022	Your AC becomes 20, if it was lower.\n	\u2022	Your attacks have Reach, if they did not have it before.\n	\u2022	When you use Warden’s Grasp as a bonus action, you can make an attack against each creature affected, with a separate attack roll for each target.\n	Once you use this feature, you can't use it again until you finish a long rest.",
			},
		}
	}
);

// Warden class
ClassList["warden"] = {
	regExpSearch: /^(?=.*warden).*$/i,
	name: "Warden",
	source: ["MHP:W", 1],
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
			source: ["MHP:W", 2],
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
			source: ["MHP:W", 2],
			minLevel: 1,
			description: "\n	At 1st level, you can use your bonus action to mark one creature you can see within 30 feet. Whenever you make a weapon attack against a creature you have marked, you gain a +2 bonus on the damage roll. The mark ends if you can no longer see the marked creature, if the marked creature dies, or if you use your bonus action to mark a different creature.\nAt 11th level, whenever you take the Attack action on your turn, you can make an additional attack against a creature you have marked.",
		},

		"duel": {
			name: "Duel",
			source: ["MHP:W", 2],
			minLevel: 2,
			description: "\n	At 2nd level, as a bonus action once per turn, when you make a melee weapon attack against a creature you have marked, you can compel it into a duel. Until the beginning of your next turn, while that creature is marked, it has disadvantage on attack rolls against any creature other than you.",
		},

		"fighting style": {
			name: "Fighting Style",
			source: ["MHP:W", 2],
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

		"warden's grasp": {
			name: "Warden's Grasp",
			source: ["MHP:W", 3],
			minLevel: 2,
			description: "\n	By 2nd level, as a bonus action, you can use the force of your daunting presence to ensnare nearby enemies into combat. Until the beginning of your next turn, you can’t move, and each Large or smaller creature you choose within 5 feet can't willingly move away from you unless it first takes the Disengage action.\nAt 14th level, the range of this ability increases to 10 feet.",
		},

		"subclassfeature3": {
			name: "Champion's Call",
			source: ["MHP:W", 3],
			minLevel: 3,
			description: "\n	By the time you reach 3rd level, you feel the inexorable pull of an important duty or task that you assume as your own. No outside force compels your choice or enforces your conduct; if you fail in your charge, you alone are responsible.\nYour choice grants you features at 3rd level and again at 6th, 13th, and 20th level.\nPut it in the \"Class\" field.",
		},
	},
};
