var iFileName = "Gemstone Dragonborn [Matt Colville, transcribed by warpaltarpers].js";
RequiredSheetVersion(12.999);

SourceList["MCSF"] = {
	name : "Matt Colville's Strongholds and Followers",
	abbreviation : "MCSF",
};

RaceList["gemstone dragonborn"] = {
	regExpSearch: /^(?=.*gemstone)(?=.*dragonborn).*$/i,
	name: "Gemstone Dragonborn",
	source: ["MCSF", 0], // Don't currently have access to source, will adjust in future
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
	scores: [0, 0, 0, 2, 1, 0]
}
