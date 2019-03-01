var iFileName = "Warden [Mage Hand Press, transcribed by warpaltarpers].js";
RequiredSheetVersion(12.999);

SourceList["MHP"] = {
	name : "Mage Hand Press",
	abbreviation : "MHP",
	url: "https://store.magehandpress.com/",
};

ClassList["warden"] = {
	regExpSearch: /^(?=.*warden).*$/i,
	name: "Warden",
	source: ["MHP", 0],
	primaryAbility: "\n	\u2022	Warden: Constitution;",
	prereqs: null,
	die: 10,
	improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves: ["Str", "Con"],
	skills: 
};
