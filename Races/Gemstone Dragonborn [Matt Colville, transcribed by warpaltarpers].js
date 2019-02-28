var iFileName = "Gemstone Dragonborn [Matt Colville, transcribed by warpaltarpers].js";
RequiredSheetVersion(12.999);

// Source
SourceList["DnD-B:GD"] = {
	name : "D&D Beyond: Gemstone Dragonborn",
	abbreviation : "DnD-B:GD",
	group: "D&D Beyond",
	url: "https://www.dndbeyond.com/characters/subraces/56123-gemstone-dragonborn",
};

// Psionic abilities
SpellsList["distance"] = {
	name: "Distance",
	regExpSearch: /^(?=.*distance).*$/i,
	classes: [],
	source: ["DnD-B:GD", 0],
	level: 0,
	time: "1 a",
	range: "30 feet",
	duration: "Instantaneous",
	save: "Int",
	description: "Space contorts and twists. Choose any number of targets the dragon can see within 30 feet. Each target must succeed on an Intelligence saving throw or be pushed back 30 feet.",
	firstCol: "1/target",
	psionic: true,
};

SpellsList["flay"] = {
	name: "Flay",
	regExpSearch: /^(?=.*flay).*$/i,
	classes: [],
	source: ["DnD-B:GD", 0],
	level: 0,
	time: "1 bns",
	range: "Self",
	duration: "1 round",
	save: "Int",
	description: "As a bonus action, the dragon blasts pure psionic energy from its eyes, frying the brains of all creatures in a 60-foot cone. Each creature in that area must make an Intelligence saving throw. On a failed save, it takes psychic damage of a d6 per 2 charges spent, or half as much damage on a successful one.",
	firstCol: "2/d6",
	psionic: true,
};

// Crystal Armor
ArmourList["crystal armor"] = {
	regExpSearch: /^(?=.*crystal).*$/i,
	name: "Crystal Armor",
	source: ["DnD-B:GD", 0],
	type: "",
	ac: 12,
	stealthdis: false,
}

// Race
RaceList["gemstone dragonborn"] = {
	regExpSearch: /^(?=.*gemstone)(?=.*dragonborn).*$/i,
	name: "Gemstone Dragonborn",
	source: ["DnD-B:GD", 0], // Don't currently have access to source, will adjust in future
	plural: "Gemstone Dragonborns",
	size: 3,
	speed: {
		walk: {spd: 30}
	},
	languageProfs: ["Common", "Draconic", "Gemstone Dragon Mindspeech"],
	addarmor: "Crystal Armor",
	age: " mature quickly; their reptilian ancestry produces children who can walk and talk only a few months after birth. They reach adulthood at the age of seven and live to be around 115, longer than their cousins",
	height: " are on average as tall as a normal human",
	improvements: "Gemstone Dragonborn: +2 Intelligence, +1 Wisdom;",
	scores: [0, 0, 0, 2, 1, 0],
	trait: "Gemstone Dragonborn (+2 Intelligence, +1 Wisdom)\nCrystal Armor:\n	Gemstone dragonborn pride themselves on the vibrant, glowing crystals embedded in their skin. The gems fuel their limited psionic abilities and grant them a natural armor bonus. They gain a +1 bonus to AC.\nLimited Psionics\n	You have 4 psionic charges, which refresh when you finish a long rest. You know flay and amplify. At your GM’s discretion, you may learn more through adventuring and research. The DC for your psionic saving throws equals 8 + your Intelligence modifier + your proficiency bonus.",
	spellcastingAbility: 4,
	spellcastingBonus: {
		name: "Limited Psionics",
		spells: ["distance", "flay"],
		times: 2,
		prepared: true,
		oncelr: true,
	}
}
