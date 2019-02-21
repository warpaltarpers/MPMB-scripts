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
};

SpellsList["zone of lies"] = {
	name: "Zone of Lies",
	regExpSearch: /^(?=.*zone)(?=.*lies).*$/i,
	classes: ["bard", "warlock"],
	source: ["MeowMagic", 0],
	level: 2,
	school: "Ench",
	time: "1 action",
	range: "60 feet",
	components: "M\u0192",
	compMaterial: "A silver tongue",
	duration: "10 minutes",
	save: "Cha",
	description: "You make a 15 foot radius sphere. On a failed Cha save, creatures can't discern lies from truth.",
	descriptionMetric: "You make a 4.5 metre radius sphere. On a failed Cha save, creatures can't discern lies from truth.",
	descriptionFull: "You create a magical zone that fosters deceit in a 15-foot radius sphere centered on a point of your choice within range. " +
	"Until the spell ends, a creature that enters the spell's area for the first time on turn or starts its turn there must make a Charisma saving throw. " +
	"On a failed save, a creature can't discern lies from truth while in the radius, as with making a Wisdom (Insight) check or another way. " +
	"A creature that fails the save and that can automatically discern lies such as one with the Divine Awareness trait, can't automatically discern them," +
	" but can make Wisdom (Insight) checks to determine truth as normal.\nYou know whether each creature succeeds or fails on its saving throw. " +
	"However, creatures affected by this spell don't know if they are or not. Any Wisdom (Insight) checks they make to determine truth are inconclusive. " +
	"If this spell affects another player character, the DM makes their saving throw in secret.",
};

SpellsList["crown of ice"] = {
	name: "Crown of Ice",
	regExpSearch: /^(?=.*crown)(?=.*ice).*$/i,
	source: ["MeowMagic", 0],
	level: 4,
	school: "Abjur",
	time: "1 bonus action",
	range: "Self",
	components: "S",
	duration: "Concentration, up to 1 hour",
	save: "Con",
	description: "Any creature that targets you with an attack must first make a Con saving throw; speed is 0 and creature is prone on failed save",
	descriptionFull: "You don a crown of ice, marking your connection to an ancient ice monarch. Until the spell ends, any creature that targets you with an attack or a harmful spell must first make a Constitution saving throw. " +
	"On a failed save, their speed is reduced to 0 and they become prone before they make their attack roll or cast the spell, and you gain advantage on any saving throw you must make against the attack or spell. " +
	"Once a creature succeeds on the saving throw against this spell, it is immune to it for its duration.",
};

SpellsList["mass freeze"] = {
	name: "Mass Freeze",
	regExpSearch: /^(?=.*freeze)(?=.*mass).*$/i,
	source: ["MeowMagic", 0],
	level: 5,
	school: "Evoc",
	time: "1 action",
	range: "60 feet",
	components: "V, S",
	duration: "Concentration, up to 1 minute",
	save: "Con",
	description: "Choose up to 6 creatures to make a Con save; paralyzed on fail; second fail is turned to ice; effect ends on success",
	descriptionFull: "You choose up to 6 creatures within range who must each make a Constitution saving throw. Large and larger creatures have advantage on saving throws against this spell. " +
	"On a failure, they are paralyzed. At the end of their next turn, they must make another Constitution saving throw. The spell ends on a success, but on a failure, they are petrified, turned to ice. " +
	"The targets can repeat the saving throw at the end of each of their turns, ending the effect on a success.\nIf the spell lasts for its entire duration for a creature that failed every save, it is " +
	"permanently turned to ice, which does not melt naturally, even through a blazing summer.",
};

SpellsList["call of justice"] = {
	name: "Call of Justice",
	regExpSearch: /^(?=.*justice).*$/i,
	source: ["MeowMagic", 0],
	level: 9,
	school: "Conj",
	time: "1 minute",
	range: "Self",
	components: "V",
	duration: "Concentration, up to 1 hour",
	description: "You pray to a lesser deity or great celestial, calling for its aid.",
	descriptionFull: "You pray to a lesser deity or great celestial, calling for its aid. The being, or its avatar, appears in front of you. " +
	"It likely takes the statistics, abilities, actions, and so on of the solar (Monster Manual 18) but the DM can rule it to use the statistics of another creature (though it should not have a significantly higher or lower CR than the solar). " +,
	"It acts on your turn in combat. A lesser deity or great celestial has no binding to you or requirement to behave as you wish. You can ask the creature as part of casting the spell what you wish for it to do. " +
	"The creature can't exact payment or trade for its services—it will attempt to fulfill your prayer if it is in accordance with its ideals or not contrary." +
	"\nIf your prayer is contrary to its nature, or once your prayer is fulfilled or you lose concentration, the creature returns to its previous location, leaving a thin glowing halo on the ground where " +
	"it disappeared, which can't be dispelled and fades after seven days."
};
