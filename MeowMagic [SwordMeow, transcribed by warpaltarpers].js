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

SpellsList["animate lord"] = {
	name: "Animate Lord",
	regExpSearch: /^(?=.animate*)(?=.lord*).*$/i,
	classes: ["cleric", "warlock", "wizard"],
	source: ["MeowMagic", 0],
	level: 9,
	school: "Necro",
	time: "1 minute",
	range: "Touch",
	components: "V, S, M\u2020",
	compMaterial: "A black diamond worth at least 10,000gp, which the spell consumes",
	duration: "Concentration, special",
	description: "You control an undead mummy lord with a telepathic link; the spell continues for 24 hours, even if concentration is dropped, though you lose control until concentrating again.",
	descriptionFull: "This spell can only be cast in a desert or similarly dry environment. You instill great power into a mummified Medium or Small humanoid. You must have that humanoid's heart to cast this spell and you cast it on their corpse. The corpse becomes a mummy lord under your control (the DM has the statistics for the creature). " +
	"\nYou form a telepathic link with the mummy lord and can communicate back and forth across any distance if you are both on the same plane. You can issue basic or complex orders, from guarding a corridor, to animating lesser undead in a certain time and place, or even greater intelligent commands, such as forming a cult. " +
	"It acts on your initiative while controlled by you.\nIf the mummy lord dies, it isn't gone forever. It rises from dust in close proximity to its heart. If you still have its heart, it remains under your control Its heart has 5 AC, 25 hitpoints, and immunity to all damage except fire. If it is destroyed, the spell ends, and the mummy lord perishes. " +
	"\nYou can drop concentration on this spell at any point and the spell will not end. If you are no longer concentrating on it, the mummy lord acts of its own accord, and the mummy lord is no longer under your direct control. It may well continue to follow your direction, or it may plot to take its heart from you. " +
	"Once animated, you can't dismiss or deanimate the mummy lord.\nYou can't cast this spell again while the mummy lord you animated previously still exists, even if you don't control it anymore. The creature is animated for 24 hours, after which it and its heart would turn to dust. " +
	"To keep the creature animated for another 24 hours, you must cast this spell on the creature before the current 24-hour period ends. When you cast the spell on a mummy lord you animated, the range is unlimited if you are both on the same plane. This use of the spell keeps the current mummy lord animated rather than animating a new one.",
};

SpellsList["deadline"] = {
	name: "Deadline",
	regExpSearch: /^(?=.deadline*).*$/i,
	classes: ["warlock", "wizard"],
	source: ["MeowMagic", 0],
	level: 1,
	school: "Necro",
	time: "1 action",
	range: "Self (15 foot line)",
	components: "V, S",
	duration: "Instantaneous",
	save: "Con",
	description: "Creatures make Con save; 3d6 necrotic on fail; gain 1d6 hitpoints if at least on target takes damage",
	descriptionFull: "You attempt to pull the life from creatures in a line 15 feet long and 5 feet wide in a direction you choose. Each creature in the line must make a Constitution saving throw taking 3d6 necrotic damage on a failed save. " +
	"If at least one target takes damage from this spell, you additionally regain 1d6 hitpoints.\nWhen you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 2nd.",
};

SpellsList["greater entomb"] = {
	name: "Greater Entomb",
	regExpSearch: /^(?=.greater*)(?=.entomb*).*$/i,
	classes: ["cleric", "druid", "paladin", "ranger", "warlock"],
	source: ["MeowMagic", 0],
	level: 5,
	school: "Necro",
	time: "1 action",
	range: "30 feet",
	components: "V, S, M",
	compMaterial: "A lock",
	duration: "Concentration, up to 1 minute",
	save: "Con",
	description: "You entomb a creature; on a failed Con save, creature takes 5d12 damage; damage continues on each failed save, until success",
	descriptionFull: "You choose a creature within range to construct a tomb around, keeping them trapped inside its walls. The target must make a Constitution saving throw. On a failure, it is locked within and pierced with a thousand spikes, and magically dealt 5d12 piercing damage. " +
	"The target makes the saving throw at the end of each of its turns, taking the same damage on a failure. On any success, the tomb shatters apart and fades away, freeing the target. The creature has total cover while the tomb lasts and can't move or escape by any means other than teleporting. " +
	"\nAn undead target has disadvantage on its first saving throw against this spell.\nA creature that fails every save against this spell or is reduced to 0 hitpoints while inside is locked within. The duration becomes permanent. A dispel magic spell can end the spell only if it is cast at 5th-level or higher on the tomb. " +
	"The tomb has 50 hitpoints, 15 AC, immunity to poison and psychic damage, and resistance to all other damage except force.\nWhen you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d12 for each slot level above 5th.",
  };

SpellsList["black fireball"] = {
	name: "Black Fireball",
	regExpSearch: /^(?=.black*)(?=.fireball*).*$/i,
	classes: ["sorcerer", "warlock", "wizard"],
	source: ["MeowMagic", 0],
	level: 5,
	school: "Evoc",
	time: "1 action",
	range: "180 feet",
	components: "V, S, M",
	compMaterial: "Sulfur and ash",
	duration: "Concentration, up to 1 round",
	save: "Dex",
	description: "Each creature makes Dex save, takes 6d6 fire and 6d6 necrotic on fail, half on save",
	descriptionFull: "A maelstrom of swirling black fire appears near your hands. On your next turn, you choose a spot within range as an action, provided this spell hasn't ended. The maelstrom disappears from your hands and reappears centered on that point, grown exponentially. " +
	"Each creature in a 30-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 6d6 fire and 6d6 necrotic damage on a failed save, or half as much damage on a successful one. " +
	"\nThe maelstrom spreads around corners. It ignites flammable objects in the area that aren't being worn or carried, and it withers nonmagical, normal plants.\nWhen you cast this spell using a spell slot of 6th level or higher, the fire damage or the necrotic damage (your choice) increases by 1d6 for each slot level above 5th.",
};

SpellsList["mustangs flame alchemy"] = {
	name: "Mustang's Flame Alchemy",
	regExpSearch: /^(?=.mustang*)(?=.flame*)(?=.alchemy*).*$/i,
	classes: ["sorcerer", "wizard"],
	source: ["MeowMagic", 0],
	level: 3,
	school: "Trans",
	time: "1 action",
	range: "60 feet",
	components: "S, M",
	compMaterial: "An inscribed magic circle",
	duration: "Instantaneous",
	save: "Con",
	description: "Any creature chosen or in a chosen space is a target and must make a Con save; 3d10 on fail and is blinded or deafened until next turn; half on save with no effects",
	descriptionFull: "A spark erupts into a torrent of flame from your hand. Choose up to eight creatures within range. If you don't know their location or can't see them, you can choose a 5 foot cube in place of one or more of the creatures. " +
	"Any creature chosen or in a chosen space is a target and must make a Constitution saving throw. A target takes 3d10 fire damage on a failed saving throw and is blinded or deafened (your choice) until the start of their next turn, or takes half as much damage on a success and isn't blinded or deafened.\n" +
	"When you cast this spell using a spell slot of 4th level or higher, the fire damage increases by 1d10 for each slot level above 3rd.",
};

SpellsList["onyx skull"] = {
	name: "Onyx Skull",
	regExpSearch: /^(?=.onyx*)(?=.skull*).*$/i,
	classes: ["cleric", "paladin", "sorcerer", "warlock", "wizard"],
	source: ["MeowMagic", 0],
	level: 3,
	school: "Necro",
	time: "1 action",
	range: "Self (30 foot radius)",
	components: "V, S",
	duration: "Instantaneous",
	save: "Con",
	description: "Each creature caught in half-ring makes Con save; on fail, 5d10 necrotic, half on save",
	descriptionFull: "An ethereal onyx skull spawns all around you and bites down. You choose a half ring 60 feet in diameter, 10 feet high, and 1 foot thick within range. The ring must be centered on you. Each creature caught with any part of the half ring in their space must make a Constitution saving throw. " +
	"On a failure, the onyx skull's teeth scissor and crunch, and each creature takes 5d10 necrotic damage or half as much on a success. Undead creatures take an additional d10 of damage. The skull then collapses, leaving a thin layer of ash behind.\n" +
	"When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d10 for every second slot level above 3rd.",
};

SpellsList["starsee"] = {
	name: "Starsee",
	regExpSearch: /^(?=.starsee*).*$/i,
	classes: ["druid", "ranger", "warlock", "wizard"],
	source: ["MeowMagic", 0],
	level: 1,
	school: "Div",
	time: "1 action",
	range: "Self",
	components: "S",
	duration: "Concentration, up to 1 minute",
	description: "A stellar map appears above your head; you can see in dim as if bright; +5 to passive perception and any Search action",
	descriptionFull: "You can only cast this spell at dusk, night, or dawn. A stellar map appears above your head, revealing stars and constellations, named as they are in this land (or else unnamed). Until the spell ends, you add +5 to your passive perception and any ability check made with the Search action, and you can see in dim light as if it were bright.",
};

SpellsList["storm of crows"] = {
	name: "Storm of Crows",
	regExpSearch: /^(?=.storm*)(?=.crows*).*$/i,
	classes: ["druid", "cleric", "sorcerer", "warlock"],
	source: ["MeowMagic", 0],
	level: 5,
	school: "Conj",
	time: "1 action",
	range: "180 feet",
	components: "V, S",
	duration: "Concentration, up to 1 minute",
	save: "Con",
	description: "A murder of crows appears; any creature under cloud makes Con save; blinded on fail, end on success",
	descriptionFull: "A tempestuous murder of crows appears, centered on a point you can see within range and spreading to a radius of 45 feet. Crows cry, winds buffer, and fire roars. Each creature under the cloud (no more than 90 feet beneath the cloud) when it appears must make a Constitution saving throw. " +
	"On a failed save, a creature becomes blinded for 1 minute. A blinded creature can repeat the save at the end of each of their turns, ending the effect on a success. At the start of each of your turns until the spell ends, the following effects alternate taking place. When you cast this spell, choose the order of the effects.\n" +
	"Flock\nCrows dive and swarm. The area under the cloud becomes complete magical darkness until the start of your next turn and each creature takes 1d6 slashing damage.\n" +
	"Flames\nYou call five pillars of fire from the cloud to strike five creatures or objects of your choice beneath the cloud. A given creature or object can't he struck by more than one pillar. A struck creature must make a Dexterity saving throw. The creature takes 5d6 fire damage on a failed save, or half as much damage on a successful one.",
};

SpellsList["glasswings"] = {
	name: "Glasswings",
	regExpSearch: /^(?=.glasswings*).*$/i,
	classes: ["bard", "wizard"],
	source: ["MeowMagic", 0],
	level: 2,
	school: "Conj",
	time: "1 action",
	range: "Self",
	components: "S",
	duration: "Instantaneous",
	description: "",
	descriptionFull: "Wings of glass unfold from your back. You gain a flying speed of 30 feet. Additionally, if you are adjacent to a creature, you can give up some or all of your " +
	"remaining flying speed to strike it with your glass cut wings. Make a melee spell attack against the creature. On a hit, it takes 1d6 slashing damage for every 5 remaining movement you gave up, to a maximum of 30. " +
	"Additionally, the creature's speed is reduced by 15 until the end of its next turn. The spell ends at the end of your turn, the wings shattering to glitter and fading away.\n" +
	"When you cast this spell using a spell slot of 3rd level or higher, you gain an additional 10 feet of flying speed for each slot level above 2nd, and you can gain damage to a maximum increased by the same amount.",
};

SpellsList["maegis"] = {
	name: "Maegis",
	regExpSearch: /^(?=.maegis*).*$/i,
	classes: ["sorcerer", "warlock", "wizard"],
	source: ["MeowMagic", 0],
	level: 7,
	school: "Abjur",
	time: "1 action",
	range: "Touch",
	components: "V, S, M\u2020",
	compMaterial: "An ornate shield worth 1,000sp, which the spell consumes",
	duration: "Concentration, up to 1 hour",
	save: "Dex",
	description: "Each targeted creature must make Dex save; 6d12 force damage on fail, half on save",
	descriptionFull: "You shatter a valuable shield, moving its thousand tiny pieces over the skin of a creature, a protective magic filling in the gaps between each piece, forming its aegis. " +
	"Until the spell ends, the target has resistance to all damage except force damage. As an action, you can dismiss this spell and cause the aegis to explode. " +
	"Each creature of your choice that you can see within 30 feet of the aegis wearer must make a Dexterity saving throw. On a failure, they take 6d12 force damage, or half as much on a success.",
};

SpellsList["call treant spirit"] = {
	name: "Call Treant Spirit",
	regExpSearch: /^(?=.treant*)(?=.spirit*).*$/i,
	classes: ["druid", "ranger", "wizard"],
	source: ["MeowMagic", 0],
	level: 4,
	school: "Conj",
	time: "1 action",
	range: "Touch",
	components: "V, S",
	duration: "Instantaneous",
	description: "You awaken a tree's spirit; it will answer three questions or fight for you (for two attacks)",
	descriptionFull: "You touch a Large or Huge tree, awakening its spirit for a moment. You must immediately direct it to fight with you or to answer up to 3 questions it may or may not know the answer to, but will " +
	"generally attempt to answer honestly unless you are known by it to be an enemy of wilderness. If you direct it to fight, you choose a target within 30 feet of the tree, and the tree animates, uprooting itself, charging towards the target. " +
	"The treant spirit has 50 hitpoints, AC of 15, and resistance  to all damage except fire. It can make two attacks against the target, forgoing either or both for a shove or grapple attempt as normal. " +
	"The treant spirit uses your spellcasting ability modifier for all its saves, ability checks, and attack rolls, and is proficient with its attacks and Athletics (your proficiency bonus). " +
	"On a hit, the target takes 3d6+6 force damage, or half as much on a miss. After answering 3 questions or making its attacks, the tree takes root in its current location, ends any grapples, becomes a normal tree once again, and the spell ends.",
};

SpellsList["prayer for the wicked"] = {
	name: "Prayer for the Wicked",
	regExpSearch: /^(?=.prayer*)(?=.wicked*).*$/i,
	classes: ["bard", "cleric", "druid", "sorcerer", "warlock", "wizard"],
	source: ["MeowMagic", 0],
	level: 9,
	school: "Abjur",
	time: "1 hour",
	range: "Sight",
	components: "V, M\u2020",
	compMaterial: "A magic weapon, thrust into the heart of a titan, laid upon an altar to an extraplanar deity, all of which the spell consumes by burning it to ash when the spell is cast",
	duration: "Until the army is no more",
	description: "Any creature in sight are now your soldiers; can't be dispelled by dispel magic",
	descriptionFull: "You prepare an army for interplanar war. Until the spell ends, any number of creatures you choose that you can see are soldiers in this army. Choose aberrations, celestials, elementals, fey, fiends, or undead. " +
	"A soldier gains resistance to the damage dealt by the chosen type, has advantage on saving throws against those creatures, and any attack a soldier hits them with becomes a critical hit. " +
	"Finally, the soldiers attacks become magical.\nThis spell can't be dispelled by dispel magic. You can discharge any number of soldiers at any time or disband the army, causing them to lose the benefits of the spell. " +
	"A soldier who dies also loses the spell's benefits. You can't cast this spell again while any creature remains in the army.",
};

SpellsList["corrode inner flesh"] = {
	name: "Corrode Inner Flesh",
	regExpSearch: /^(?=.corrode*)(?=.flesh*).*$/i,
	classes: ["druid", "sorcerer", "warlock", "wizard"],
	source: ["MeowMagic", 0],
	level: 5,
	school: "Evoc",
	time: "1 action",
	range: "Touch",
	components: "V, S, M\u2020",
	compMaterial: "A vial of acid worth 25gp or more, which the spell consumes",
	duration: "Instantaneous",
	save: "Con",
	description: "A creature you touch must make Con save; on fail, 12d4 acid damage and 6d4 acid damage at end of turn; half initial and no damage at end on success",
	descriptionFull: "You shove an acid vial inside the body of a creature and exponentially intensify the acid within. Any creature that lacks an organic body is immune to this spell, such as elementals, constructs, and creatures with the incorporeal movement feature. " +
	"A creature you touch must make a Constitution saving throw. On a failed save, the target is eaten from the inside out by corrosion, taking 12d4 acid damage and another 6d4 acid damage at the end of its next turn. " +
	"On a success, a creature takes half the initial damage and no damage at the end of its next turn. If a creature is reduced to 0 hitpoints by the acid damage from this spell, it explodes in a radius of 15 feet. " +
	"Any creature other than you caught in the radius must make a Constitution saving throw, taking 4d4 acid damage and another 2d4 acid damage at the end of its next turn, or half the initial damage on and no damage at the end of its next turn a success.\n" +
	"When you cast this spell using a spell slot of 6th level or higher, the initial damage the first target takes increases by 2d4 for each slot level above 5th.",
};

SpellsList["mantis knight blade"] = {
	name: "Mantis Knight Blade",
	regExpSearch: /^(?=.mantis*)(?=.knight*)(?=.blade*).*$/i,
	classes: ["druid", "ranger"],
	source: ["MeowMagic", 0],
	level: 2,
	school: "Conj",
	time: "1 bonus action",
	range: "Self",
	components: "V, S, M\u0192",
	compMaterial: "A staff worth at least 5gp",
	duration: "Concentration, up to 1 minute",
	description: "You summon a blade capable of 2d6 slashing damage; if you roll same result on both dice, you make another attack.",
	descriptionFull: "You magically part a nonmagical staff, summoning a weapon of the feywild used by the nimblest of their knights, the Mantis. This magic weapon counts as a simple melee weapon with which you are proficient. It deals 2d6 slashing damage on a hit and has the finesse property. " +
	"When you roll the same result on both of the first two damage dice, you can immediately make another attack against the same target, potentially provoking this feature again. Additionally, when you attack charmed targets with this weapon, you make the attack roll with advantage. " +
	"The spell ends if you cast it again or if you let go of the weapon. When the spell ends, the staff grows back together, the weapon returning to its Mantis in the feywild.\n" +
	"When you cast this spell using a 3rd-or 4th-level spell slot, the damage increases to 3d6. When you cast it using a 5th- or 6th-level spell slot, the damage increases to 4d6. When you cast it using a spell slot of 7th level or higher, the damage increases to 5d6.",
};
