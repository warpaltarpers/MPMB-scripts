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
	age : " mature at the rate of humans, but live up to 500 years",
	height : " stand between 5 and 6 feet tall",
	weight : " weigh around 155 lb",
	heightMetric : " stand between 1,5 and 1,8 metres tall",
	weightMetric : " weigh around 70 kg",
	scores : [0, 1, 0, 0, 0, 2],
	trait : "Satyr (+1 Dexterity, +2 Charisma)\nHeadbutt: Your set of horns is a natural weapon, which you can use to make unarmed strikes. If you hit with it, you deal bludgeoning damage equal to 1d6 + your Strength modifier.\nGoat's Stride: The Satyr can add its Dexterity modifier to its jumping distance.",
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
