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
	components: "V, S, M",
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
	components: "M",
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
	classes: ["druid", "sorcerer"],
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
	classes: ["cleric"],
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

SpellsList["divine lance"] = {
	name: "Divine",
	regExpSearch: /^(?=.*divine)(?=.*lance).*$/i,
	classes: ["paladin", "warlock"],
	source: ["MeowMagic", 0],
	level: 3,
	school: "Conj",
	time: "1 action",
	range: "10 feet",
	components: "V, S",
	duration: "Instantaneous",
	description: "While impaled with the lance, it brilliantly shines within them, causing them to take 3d6 radiant damage at the start of each of their turns.",
};

SpellsList["profane lance"] = {
	name: "Profane",
	regExpSearch: /^(?=.*profane)(?=.*lance).*$/i,
	classes: ["paladin", "warlock"],
	source: ["MeowMagic", 0],
	level: 3,
	school: "Conj",
	time: "1 action",
	range: "10 feet",
	components: "V, S",
	duration: "Instantaneous",
	description: "While impaled with the lance, the target is crippled by a corruption running through them. The target's speed is halved, it can't take reactions, " +
	"and it has disadvantage on Strength (Athletics) and Dexterity (Acrobatics) checks.",
};

SpellsList["divine profane lance"] = {
	name: "Divine/Profane Lance",
	regExpSearch: /^(?=.*profane)(?=.*divine)(?=.*lance).*$/i,
	classes: ["paladin", "warlock"],
	source: ["MeowMagic", 0],
	level: 3,
	school: "Conj",
	time: "1 action",
	range: "10 feet",
	components: "V, S",
	duration: "Instantaneous",
	description: "You conjure a lance in two open hands, or enchant a lance you are already holding. " +
	"On a hit, you deal the normal damage of hitting the creature with the lance, an additional 5d6 damage, and you impale the target with the lance.",
	descriptionFull: "You conjure a lance in two open hands, or enchant a lance you are already holding. Make a melee attack with the weapon against a creature within range. " +
	"You ignore disadvantage on the attack roll from being within 5 feet of the target. On a hit, you deal the normal damage of hitting the creature with the lance, an additional 5d6 damage, and you impale the target with the lance. " +
	"On a miss it deals half as much damage, and the effect ends (the lance disappearing if conjured).\nA creature can remove the lance from the target as an action, causing the target no additional damage. " +
	"Additionally, choose divine or profane. The added damage is radiant for the former and necrotic for the latter. On a hit, the spell causes another effect.",
	dependencies: ["divine lance", "profane lance"],
};

SpellsList["dress undress"] = {
	name: "Dress/Undress",
	regExpSearch: /^(?=.*dress)(?=.*undress).*$/i,
	classes: ["bard", "sorcerer", "warlock", "wizard"],
	source: ["MeowMagic", 0],
	level: 0,
	school: "Trans",
	time: "1 action",
	range: "Touch",
	components: "V, S, M",
	compMaterial: "A safety pin",
	duration: "Instantaneous",
	description: "A willing creature you touch instantly dons up to 10 unworn and uncarried articles of clothing you can see within 30 feet of you, or doffs as many articles it is wearing.",
	descriptionMetric: "A willing creature you touch instantly dons up to 10 unworn and uncarried articles of clothing you can see within 9 metres of you, or doffs as many articles it is wearing.",
	descriptionFull: "A willing creature you touch instantly dons up to 10 unworn and uncarried articles of clothing you can see within 30 feet of you, or doffs as many articles it is wearing. " +
	"If you doff clothing from it, it appears folded at your feet. Any donned clothing is worn in the order you wish, with any twists, ties, bows, or specific spacing and detail you desire. " +
	"The clothing can't be behind glass or any other obstruction.\nWhen you reach 5th level, you can don or doff light armor when you cast this spell, At 11th, you can don or doff medium armor, and heavy armor at 17th.",
};

SpellsList["five point celestial brigade"] = {
	name: "Five Point Celestial Brigade",
	nameShort: "Celestial Brigade",
	regExpSearch: /^(?=.*five)(?=.*point)(?=.*celestial)(?=.*brigade).*$/i,
	classes: ["cleric", "paladin"],
	source: ["MeowMagic", 0],
	level: 5,
	school: "Conj",
	time: "1 action",
	range: "90 feet",
	components: "V, S, M",
	compMaterial: "A feather from a bird of prey",
	duration: "Instantaneous",
	save: "Cha",
	description: "You mark a creature within range for the wrath of heaven. On a failure, celestials appear around the creature, blitzing it with angelic weapons. " +
	"The target takes 546 radiant and 5d6 piercing damage, and it is knocked prone.",
	descriptionFull: "You mark a creature within range for the wrath of heaven. The target can make a Charisma saving throw to avoid the celestial incursion. " +
	"On a failure, celestials appear around the creature, blitzing it with angelic weapons. The target takes 546 radiant and 5d6 piercing damage, and it is knocked prone. " +
	"On a success, the creature takes half as much damage and isn't knocked prone. If the target has 30 hitpoints or fewer remaining after taking damage from this spell, it must succeed on a Constitution saving throw or die." +
	"\nWhen you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d6 radiant and 1d6 piercing for each slot level above 5th.",
};

SpellsList["palantirs inverse eye"] = {
	name: "Palantír's Inverse Eye",
	regExpSearch: /^(?=.palantir*)(?=.inverse*).*$/i,
	classes: ["wizard"],
	source: ["MeowMagic", 0],
	level: 5,
	school: "Div",
	time: "1 reaction, which you take when you realize you are being targeted by a scrying spell or being observed with a clairvoyance or arcane eye spell",
	range: "Self",
	components: "S",
	duration: "Up to 1 minute",
	description: "You create a visible sensor of your own; they must make a Cha saving throw or take 5d6 force damage, or half as much on a success.",
	descriptionFull: "When you take the reaction to cast this spell, you create a visible sensor of your own that appears in the hands of whoever is observing you and cast the spell that triggered your reaction. " +
	"For the duration, you can see the creature even if they go invisible or into the Ethereal Plane and can use your action to attempt to harm them with the sensor. " +
	"They must make a Charisma saving throw or take 5d6 force damage, or half as much on a success. The sensor moves with them, following them if they move. " +
	"If they teleport away, the sensor fades immediately after.\nWhen you cast this spell using a spell slot of 6th level or higher, the force damage you deal with spell increases by 1 d6 per slot level above 5th.",
};

SpellsList["eyes of ichor"] = {
	name: "Eyes of Ichor",
	regExpSearch: /^(?=.eyes*)(?=.ichor*).*$/i,
	classes: ["cleric", "druid", "paladin"],
	source: ["MeowMagic", 0],
	level: 2,
	school: "Div",
	time: "1 bonus action",
	range: "Self",
	components: "S",
	duration: "Up to 1 round",
	description: "Until the end of your next turn, you are blinded, but know the location of every creature within 60 feet of you not behind full cover from you.",
	descriptionMetric: "Until the end of your next turn, you are blinded, but know the location of every creature within 18 metres of you not behind full cover from you.",
	descriptionFull: "For the duration, your eyes cover in a golden light. Until the end of your next turn, you are blinded, but know the location of every creature within 60 feet of you not behind full cover from you. " +
	"You know the size, type, and potential race of these creatures, can determine if they are shapechangers and using a false or true form, and can see these creatures even into the Ethereal Plane. " +
	"While blinded from this spell, you can see. the creatures within range and you don't make attacks against them with disadvantage, nor do they attack you with advantage. " +
	"Finally, you have advantage on Wisdom (Insight) checks made against any creature you can see with this spell.",
};

SpellsList["true dragons breath"] = {
	name: "True Dragon's Breath",
	regExpSearch: /^(?=.dragon*)(?=.breath*).*$/i,
	classes: ["sorcerer", "wizard"],
	source: ["MeowMagic", 0],
	level: 8,
	school: "Trans",
	time: "1 bonus action",
	range: "Touch",
	components: "V, S, M\u2020",
	compMaterial: "A ghost pepper",
	duration: "Concentration, up to 10 minutes",
	save: "Dex",
	description: "Willing touched creature can use an action to exhale energy of the chosen type; each targeted creature makes Dex save; 12d6 if failed, half if success.",
	descriptionFull: "You touch one willing creature and imbue it with the immense power to breathe out a magical frenzy from its mouth, provided it has one. Choose acid, cold, fire, lightning, or poison. " +
	"Until the spell ends, the creature can use an action to exhale energy of the chosen type in a 30-foot cone or 30 foot long, 5 foot wide line (it chooses each time it takes the action). " +
	"Each creature in that area must make a Dexterity saving throw, taking 12d6 damage of the chosen type on a failed save, or half as much damage on a successful one.",
};

SpellsList["blood money"] = {
	name: "Blood Money",
	regExpSearch: /^(?=.blood*)(?=.money*).*$/i,
	classes: ["warlock", "wizard"],
	source: ["MeowMagic", 0],
	level: 3,
	school: "Conj",
	time: "1 action",
	range: "60 feet",
	components: "V, S, M\u2020",
	compMaterial: "up to 30gp",
	duration: "Instantaneous",
	save: "Dex",
	description: "Target makes Dex save; On fail, damage equal to number of coins used to cast, half if succeed",
	descriptionFull: "You vaporize a bag of money, only for it to hail down in a torrent on a creature within range. The target must make a Dexterity saving throw. " +
	"On a failure, it is magically dealt slashing damage equal to the number of coins you used to cast this spell, or half as much damage on a success. " +
	"Dragons, goblins, and xorns have disadvantage on their saving throw against this spell If you reduce one of those creatures to 0 hitpoints with this spell, one newly minted gold coin emerges from its corpse. " +
	"After the damage is dealt, the coins splash around the target, and can he picked up and reused with this spell.\nWhen you cast this spell using a spell slot of 4th level or higher, you can use up to 5 additional coins for the spell for each slot level above 3rd.",
};
