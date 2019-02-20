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
	descriptionFull: "Describe or name a specific kind of aberration, fey, or elemental. You " +
	"learn the location of the closest creature of that kind to you within 10 miles, if at least one is present." +
	"An unwilling creature can make an Intelligence saving throw to avoid being located," +
	" and if successful, knows your location at the moment of casting the spell," +
	" knows that you attempted to locate it, and is immune to this spell cast by you for 24 hours.",
}
