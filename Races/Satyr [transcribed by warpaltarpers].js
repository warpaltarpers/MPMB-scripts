var iFileName = "Satyr [transcribed by warpaltarpers].js";
RequiredSheetVersion(13);

SourceList["DnDB:S"] = {
	name : "DnD Beyond Satyr",
	abbreviation : "DnDB:S",
	url : "https://www.dndbeyond.com/races/8140-satyr",
	date : "9/7/2019"
};

RaceList["satyr"] = {
	regExpSearch : /satyr/i,
	name : "Satyr",
	source : ["DnDB:S", 0],
	plural : "Satyrs",
	size : 3,
	speed : {
		walk : { spd : 35, enc : 25 }
	},
	languageProfs : ["Common", "Sylvan"],
	vision : [["Darkvision", 60]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	toolProfs : [["Musical instrument", 1]],
	weaponsAdd : ["Satyr Headbutt"],
	skillstxt: "Choose one skill from: Acrobatics, Deception, Persuasion, Performance and Stealth.",
	age : " mature at the rate of humans, but live up to 500 years",
	height : " stand between 5 and 6 feet tall",
	weight : " weigh around 155 lb",
	heightMetric : " stand between 1,5 and 1,8 metres tall",
	weightMetric : " weigh around 70 kg",
	improvements: "Satyr: +1 Dexterity",
	scores : [0, 1, 0, 0, 0, 0],
	variants: ["highland satyr", "woodland satyr"],
	trait : "Satyr (+1 Dexterity)\nHeadbutt: Your set of horns is a natural weapon, which you can use to make unarmed strikes. If you hit with it, you deal bludgeoning damage equal to 1d6 + your Strength modifier.\nGoat's Stride: The Satyr can add its Dexterity modifier to its jumping distance.",
};

WeaponsList["satyr headbutt"] = {
	regExpSearch : /^(?=.*satyr)(?=.*headbutt).*$/i,
	name : "Satyr Headbutt",
	source : ["DnDB:S", 0],
	ability : 1,
	type : "Natural",
	damage : [1, 6, "bludgeoning"],
	range : "Melee",
	description : "Your set of horns is a natural weapon, which you can use to make unarmed strikes",
	abilitytodamage : true
};

// Highland Satyr
AddRacialVariant(
	"satyr",
	"highland satyr",
	{
		regExpSearch : /^(?=.*highland)(?=.*satyr).*$/i,
		name: "Highland Satyr",
		source: ["DnDB:S", 0],
		plural: "Highland Satyrs",
		improvements: "Highland Satyr: +1 Dexterity, +2 Constitution",
		scores: [0, 1, 2, 0, 0, 0],
		weaponprofs: [false, false, ["greataxe", "handaxe", "longsword", "longbow"]],
		trait : "Highland Satyr (+1 Dexterity, +2 Constitution)\nHeadbutt: Your set of horns is a natural weapon, which you can use to make unarmed strikes. If you hit with it, you deal bludgeoning damage equal to 1d6 + your Strength modifier.\nGoat's Stride: The Satyr can add its Dexterity modifier to its jumping distance.\nSure Footed: You suffer no penalty to your speed when moving through rough or difficult terrain.\nCharger: When you use your action to Dash, you can use a bonus action to make one melee weapon attack or to shove a creature. If you move at least 10 feet in a straight line immediately before taking this bonus action, you either gain a +5 bonus to the attack's damage roll (if you chose to make a melee attack and hit) or push the target up to 10 feet away from you (if you chose to shove and you succeed). At 5th level you can make an intimidating charge once per short rest. If you are successful with either a shove or an attack on your charge. The creature must succeed on Wisdom saving throw or become frightened of you for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
	}
);

// Woodland Satyr
AddRacialVariant(
	"satyr",
	"woodland satyr",
	{
		regExpSearch : /^(?=.*woodland)(?=.*satyr).*$/i,
		name: "Woodland Satyr",
		source: ["DnDB:S", 0],
		plural: "Woodland Satyrs",
		improvements: "Woodland Satyr: +1 Dexterity, +2 Charisma",
		scores: [0, 1, 0, 0, 0, 2],
		weaponprofs: [false, false, ["longbow", "shortbow", "shortsword", "spear"]],
		trait : "Woodland Satyr (+1 Dexterity, +2 Charisma)\nHeadbutt: Your set of horns is a natural weapon, which you can use to make unarmed strikes. If you hit with it, you deal bludgeoning damage equal to 1d6 + your Strength modifier.\nGoat's Stride: The Satyr can add its Dexterity modifier to its jumping distance.\nMask of the Wild: You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.\nFey Magic: You know the vicious mockery cantrip. Once you reach 3rd level, you can cast charm person once with this trait, and you regain the ability to do so when you finish a long rest. Once you reach 5th level you can cast the hypnotic pattern once with this trait as a 3rd level spell, and you regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
	}
);