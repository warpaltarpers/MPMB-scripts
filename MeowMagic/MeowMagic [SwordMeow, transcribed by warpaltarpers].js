/*	-INFORMATION-
	Subject:	Spells by SwordMeow
	Effect:		Made by SwordMeow and found on reddit.com/r/meowmagic; permission given by SwordMeow
	Sheet:		v12.999 (2018-02-19)

	Please note that there is no code here to update drop-down boxes because the rop-down boxes in the spell selection dialogues are generated automatically and will include any spells you add correctly

	If you are looking for a way to add a cantrip/spell to the drop-down boxes in the attack sections, then you will have to look at the WeaponsList syntax and add the cantrip/spell as a weapon (as well)
*/

var iFileName = "MeowMagic [SwordMeow, transcribed by warpaltarpers]"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned

SourceList["MeowMagic"] = {
	name : "MeowMagic Subreddit",
	abbreviation : "MeowMagic",
	url : "https://www.reddit.com/r/meowmagic/",
	date : "2019/2/20"
};

SpellsList["locate bizarre creature"] = {
	name: "Locate Bizarre Creature",
	regExpSearch: /^(?=.*bizarre)(?=.*creature).*$/i,
	classes: ["druid", "ranger", "wizard"],
	source: ["MeowMagic", 0],
	level: 4,
	school: "Div",
	time: "1 min",
	range: "Self",
	components: "V",
	duration: "Instantaneous",
	save: "Int",
	description: "Find closest aberration, fey, or elemental within 10 miles; creature can make Int saving throw to avoid being detected",
	descriptionMetric: "Find closest aberration, fey, or elemental within 16 kilometres; creature can make Int saving throw to avoid being detected",
	descriptionFull: "Describe or name a specific kind of aberration, fey, or elemental. You " +
	"learn the location of the closest creature of that kind to you within 10 miles, if at least one is present." +
	"An unwilling creature can make an Intelligence saving throw to avoid being located," +
	" and if successful, knows your location at the moment of casting the spell," +
	" knows that you attempted to locate it, and is immune to this spell cast by you for 24 hours.",
};

SpellsList["wheel of force"] = {
	name: "Wheel of Force",
	regExpSearch: /^(?=.*wheel)(?=.*force).*$/i,
	classes: ["druid", "sorcerer", "wizard"],
	source: ["MeowMagic", 0],
	level: 3,
	school: "Evoc",
	time: "1 action",
	range: "Self (30 ft. radius)",
	components: "V, S, M\u0192",
	compMaterial: "A fan",
	duration: "Instantaneous",
	save: "Str",
	description: "Each creature within 30 feet must make Str save; creatures that fail save are incapcitated until end of their next turn",
	descriptionMetric: "Each creature within 9 metres must make Str save; creatures that fail save are incapcitated until end of their next turn",
	descriptionFull: "A swirl of wind erupts from you. Choose clockwise or counterclockwise " +
	"when you cast this spell. Each creature in a 30 foot radius around you must make a " +
	"Strength saving throw. Huge and larger creatures automatically succeed. On a failed save, " +
	"a creature is rotated around you in the direction of your choice half or a quarter " +
	"of the circumference of the circle (you choose when you cast the spell). Each creature " +
	"that failed the save is then incapcitated until the end of their next turn. While incapcitated " +
	"by this spell, a creature has a speed of 0, and attack rolls against it have advantage.",
}