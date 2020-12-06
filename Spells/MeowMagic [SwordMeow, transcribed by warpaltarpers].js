/*	-INFORMATION-
	Subject:	Spells by SwordMeow
	Effect:		Made by SwordMeow and found on reddit.com/r/meowmagic; permission given by SwordMeow
	Sheet:		v12.999 (2018-02-19)
*/

var iFileName = "MeowMagic [SwordMeow, transcribed by warpaltarpers].js";
RequiredSheetVersion(12.999);

// MeowMagic Subreddit Source
SourceList["MMSR"] = {
	name : "MeowMagic Subreddit",
	abbreviation : "MMSR",
	url : "https://www.reddit.com/r/meowmagic/",
	date : "2019/2/13"
};

SpellsList["locate bizarre creature"] = {
	name: "Locate Bizarre Creature",
	classes: ["druid", "ranger", "wizard"],
	source: ["MMSR", 0],
	level: 4,
	school: "Div",
	time: "1 min",
	range: "Self",
	components: "V",
	duration: "Instantaneous",
	save: "Int",
	description: "Find closest aberration, fey, or elemental within 10 miles; creature can make Int saving throw to avoid being detected",
	descriptionFull: "Describe or name a specific kind of aberration, fey, or elemental. You learn the location of the closest creature of that kind to you within 10 miles, if at least one is present. An unwilling creature can make an Intelligence saving throw to avoid being located, and if successful, knows your location at the moment of casting the spell, knows that you attempted to locate it, and is immune to this spell cast by you for 24 hr.",
};

SpellsList["wheel of force"] = {
	name: "Wheel of Force",
	classes: ["druid", "sorcerer", "wizard"],
	source: ["MMSR", 0],
	level: 3,
	school: "Evoc",
	time: "1 a",
	range: "Self",
	components: "V,S,M",
	compMaterial: "A fan",
	duration: "Instantaneous",
	save: "Str",
	description: "Each creature within 30 ft must make Str save; creatures that fail save are incapcitated until end of their next turn",
	descriptionFull: "A swirl of wind erupts from you. Choose clockwise or counterclockwise when you cast this spell. Each creature in a 30 ft radius around you must make a Strength saving throw. Huge and larger creatures automatically succeed. On a failed save, a creature is rotated around you in the direction of your choice half or a quarter of the circumference of the circle (you choose when you cast the spell). Each creature that failed the save is then incapcitated until the end of their next turn. While incapcitated by this spell, a creature has a speed of 0, and attack rolls against it have advantage.",
};

SpellsList["zone of lies"] = {
	name: "Zone of Lies",
	classes: ["bard", "warlock"],
	source: ["MMSR", 0],
	level: 2,
	school: "Ench",
	time: "1 a",
	range: "60 ft",
	components: "M",
	compMaterial: "A silver tongue",
	duration: "10 min",
	save: "Cha",
	description: "You make a 15 ft radius sphere. On a failed Cha save, creatures can't discern lies from truth.",
	descriptionFull: "You create a magical zone that fosters deceit in a 15 ft radius sphere centered on a point of your choice within range. Until the spell ends, a creature that enters the spell's area for the first time on turn or starts its turn there must make a Charisma saving throw. On a failed save, a creature can't discern lies from truth while in the radius, as with making a Wisdom (Insight) check or another way. A creature that fails the save and that can automatically discern lies such as one with the Divine Awareness trait, can't automatically discern them, but can make Wisdom (Insight) checks to determine truth as normal.\n  You know whether each creature succeeds or fails on its saving throw. However, creatures affected by this spell don't know if they are or not. Any Wisdom (Insight) checks they make to determine truth are inconclusive. If this spell affects another player character, the DM makes their saving throw in secret.",
};

SpellsList["crown of ice"] = {
	name: "Crown of Ice",
	source: ["MMSR", 0],
	level: 4,
	school: "Abjur",
	time: "1 bns",
	range: "Self",
	components: "S",
	duration: "conc, 1 hr",
	save: "Con",
	description: "Any creature that targets you with an attack must first make a Con saving throw; speed is 0 and creature is prone on failed save",
	descriptionFull: "You don a crown of ice, marking your connection to an ancient ice monarch. Until the spell ends, any creature that targets you with an attack or a harmful spell must first make a Constitution saving throw. On a failed save, their speed is reduced to 0 and they become prone before they make their attack roll or cast the spell, and you gain advantage on any saving throw you must make against the attack or spell. Once a creature succeeds on the saving throw against this spell, it is immune to it for its duration.",
};

SpellsList["mass freeze"] = {
	name: "Mass Freeze",
	classes: ["druid", "sorcerer"],
	source: ["MMSR", 0],
	level: 5,
	school: "Evoc",
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "conc, 1 min",
	save: "Con",
	description: "Choose up to 6 creatures to make a Con save; paralyzed on fail; second fail is turned to ice; effect ends on success",
	descriptionFull: "You choose up to 6 creatures within range who must each make a Constitution saving throw. Large and larger creatures have advantage on saving throws against this spell. On a failure, they are paralyzed. At the end of their next turn, they must make another Constitution saving throw. The spell ends on a success, but on a failure, they are petrified, turned to ice. The targets can repeat the saving throw at the end of each of their turns, ending the effect on a success.\n  If the spell lasts for its entire duration for a creature that failed every save, it is permanently turned to ice, which does not melt naturally, even through a blazing summer.",
};

SpellsList["call of justice"] = {
	name: "Call of Justice",
	classes: ["cleric"],
	source: ["MMSR", 0],
	level: 9,
	school: "Conj",
	time: "1 min",
	range: "Self",
	components: "V",
	duration: "conc, 1 hr",
	description: "You pray to a lesser deity or great celestial, calling for its aid.",
	descriptionFull: "You pray to a lesser deity or great celestial, calling for its aid. The being, or its avatar, appears in front of you. It likely takes the statistics, abilities, actions, and so on of the solar (Monster Manual 18) but the DM can rule it to use the statistics of another creature (though it should not have a significantly higher or lower CR than the solar). It acts on your turn in combat. A lesser deity or great celestial has no binding to you or requirement to behave as you wish. You can ask the creature as part of casting the spell what you wish for it to do. The creature can't exact payment or trade for its services—it will attempt to fulfill your prayer if it is in accordance with its ideals or not contrary.\n  If your prayer is contrary to its nature, or once your prayer is fulfilled or you lose concentration, the creature returns to its previous location, leaving a thin glowing halo on the ground where it disappeared, which can't be dispelled and fades after seven days."
};

SpellsList["divine lance"] = {
	name: "Divine",
	classes: ["paladin", "warlock"],
	source: ["MMSR", 0],
	level: 3,
	school: "Conj",
	time: "1 a",
	range: "10 ft",
	components: "V,S",
	duration: "Instantaneous",
	description: "While impaled with the lance, it brilliantly shines within them, causing them to take 3d6 radiant damage at the start of each of their turns.",
};

SpellsList["profane lance"] = {
	name: "Profane",
	classes: ["paladin", "warlock"],
	source: ["MMSR", 0],
	level: 3,
	school: "Conj",
	time: "1 a",
	range: "10 ft",
	components: "V,S",
	duration: "Instantaneous",
	description: "While impaled with the lance, the target is crippled by a corruption running through them. The target's speed is halved, it can't take reactions, and it has disadvantage on Strength (Athletics) and Dexterity (Acrobatics) checks.",
};

SpellsList["divine profane lance"] = {
	name: "Divine/Profane Lance",
	classes: ["paladin", "warlock"],
	source: ["MMSR", 0],
	level: 3,
	school: "Conj",
	time: "1 a",
	range: "10 ft",
	components: "V,S",
	duration: "Instantaneous",
	description: "You conjure a lance in two open hands, or enchant a lance you are already holding. " +
	"On a hit, you deal the normal damage of hitting the creature with the lance, an additional 5d6 damage, and you impale the target with the lance.",
	descriptionFull: "You conjure a lance in two open hands, or enchant a lance you are already holding. Make a melee attack with the weapon against a creature within range. You ignore disadvantage on the attack roll from being within 5 ft of the target. On a hit, you deal the normal damage of hitting the creature with the lance, an additional 5d6 damage, and you impale the target with the lance. On a miss it deals half as much damage, and the effect ends (the lance disappearing if conjured).\n  A creature can remove the lance from the target as an action, causing the target no additional damage. Additionally, choose divine or profane. The added damage is radiant for the former and necrotic for the latter. On a hit, the spell causes another effect.",
	dependencies: ["divine lance", "profane lance"],
};

SpellsList["dress undress"] = {
	name: "Dress/Undress",
	classes: ["bard", "sorcerer", "warlock", "wizard"],
	source: ["MMSR", 0],
	level: 0,
	school: "Trans",
	time: "1 a",
	range: "Touch",
	components: "V,S,M",
	compMaterial: "A safety pin",
	duration: "Instantaneous",
	description: "A willing creature you touch instantly dons up to 10 unworn and uncarried articles of clothing you can see within 30 ft of you, or doffs as many articles it is wearing.",
	descriptionFull: "A willing creature you touch instantly dons up to 10 unworn and uncarried articles of clothing you can see within 30 ft of you, or doffs as many articles it is wearing. If you doff clothing from it, it appears folded at your feet. Any donned clothing is worn in the order you wish, with any twists, ties, bows, or specific spacing and detail you desire. The clothing can't be behind glass or any other obstruction.\n  When you reach 5th level, you can don or doff light armor when you cast this spell, At 11th, you can don or doff medium armor, and heavy armor at 17th.",
};

SpellsList["five point celestial brigade"] = {
	name: "Five Point Celestial Brigade",
	nameShort: "Celestial Brigade",
	classes: ["cleric", "paladin"],
	source: ["MMSR", 0],
	level: 5,
	school: "Conj",
	time: "1 a",
	range: "90 ft",
	components: "V,S,M",
	compMaterial: "A feather from a bird of prey",
	duration: "Instantaneous",
	save: "Cha",
	description: "You mark a creature within range for the wrath of heaven. On a failure, celestials appear around the creature, blitzing it with angelic weapons. " +
	"The target takes 546 radiant and 5d6 piercing damage, and it is knocked prone.",
	descriptionFull: "You mark a creature within range for the wrath of heaven. The target can make a Charisma saving throw to avoid the celestial incursion. On a failure, celestials appear around the creature, blitzing it with angelic weapons. The target takes 546 radiant and 5d6 piercing damage, and it is knocked prone. On a success, the creature takes half as much damage and isn't knocked prone. If the target has 30 hitpoints or fewer remaining after taking damage from this spell, it must succeed on a Constitution saving throw or die.\n  When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d6 radiant and 1d6 piercing for each slot level above 5th.",
};

SpellsList["palantirs inverse eye"] = {
	name: "Palantír's Inverse Eye",
	classes: ["wizard"],
	source: ["MMSR", 0],
	level: 5,
	school: "Div",
	time: "1 reaction, which you take when you realize you are being targeted by a scrying spell or being observed with a clairvoyance or arcane eye spell",
	range: "Self",
	components: "S",
	duration: "Up to 1 min",
	description: "You create a visible sensor of your own; they must make a Cha saving throw or take 5d6 force damage, or half as much on a success.",
	descriptionFull: "When you take the reaction to cast this spell, you create a visible sensor of your own that appears in the hands of whoever is observing you and cast the spell that triggered your reaction. For the duration, you can see the creature even if they go invisible or into the Ethereal Plane and can use your action to attempt to harm them with the sensor. They must make a Charisma saving throw or take 5d6 force damage, or half as much on a success. The sensor moves with them, following them if they move. If they teleport away, the sensor fades immediately after.\n  When you cast this spell using a spell slot of 6th level or higher, the force damage you deal with spell increases by 1 d6 per slot level above 5th.",
};

SpellsList["eyes of ichor"] = {
	name: "Eyes of Ichor",
	classes: ["cleric", "druid", "paladin"],
	source: ["MMSR", 0],
	level: 2,
	school: "Div",
	time: "1 bns",
	range: "Self",
	components: "S",
	duration: "Up to 1 round",
	description: "Until the end of your next turn, you are blinded, but know the location of every creature within 60 ft of you not behind full cover from you.",
	descriptionFull: "For the duration, your eyes cover in a golden light. Until the end of your next turn, you are blinded, but know the location of every creature within 60 ft of you not behind full cover from you. You know the size, type, and potential race of these creatures, can determine if they are shapechangers and using a false or true form, and can see these creatures even into the Ethereal Plane. While blinded from this spell, you can see. the creatures within range and you don't make attacks against them with disadvantage, nor do they attack you with advantage. Finally, you have advantage on Wisdom (Insight) checks made against any creature you can see with this spell.",
};

SpellsList["true dragons breath"] = {
	name: "True Dragon's Breath",
	classes: ["sorcerer", "wizard"],
	source: ["MMSR", 0],
	level: 8,
	school: "Trans",
	time: "1 bns",
	range: "Touch",
	components: "V,S,M\u2020",
	compMaterial: "A ghost pepper",
	duration: "conc, 10 min",
	save: "Dex",
	description: "Willing touched creature can use an action to exhale energy of the chosen type; each targeted creature makes Dex save; 12d6 if failed, half if success.",
	descriptionFull: "You touch one willing creature and imbue it with the immense power to breathe out a magical frenzy from its mouth, provided it has one. Choose acid, cold, fire, lightning, or poison. Until the spell ends, the creature can use an action to exhale energy of the chosen type in a 30 ft cone or 30 ft long, 5 ft wide line (it chooses each time it takes the action). Each creature in that area must make a Dexterity saving throw, taking 12d6 damage of the chosen type on a failed save, or half as much damage on a successful one.",
};

SpellsList["blood money"] = {
	name: "Blood Money",
	classes: ["warlock", "wizard"],
	source: ["MMSR", 0],
	level: 3,
	school: "Conj",
	time: "1 a",
	range: "60 ft",
	components: "V,S,M\u2020",
	compMaterial: "up to 30gp",
	duration: "Instantaneous",
	save: "Dex",
	description: "Target makes Dex save; On fail, damage equal to number of coins used to cast, half if succeed",
	descriptionFull: "You vaporize a bag of money, only for it to hail down in a torrent on a creature within range. The target must make a Dexterity saving throw. On a failure, it is magically dealt slashing damage equal to the number of coins you used to cast this spell, or half as much damage on a success. Dragons, goblins, and xorns have disadvantage on their saving throw against this spell If you reduce one of those creatures to 0 hitpoints with this spell, one newly minted gold coin emerges from its corpse. After the damage is dealt, the coins splash around the target, and can he picked up and reused with this spell.\n  When you cast this spell using a spell slot of 4th level or higher, you can use up to 5 additional coins for the spell for each slot level above 3rd.",
};

SpellsList["animate lord"] = {
	name: "Animate Lord",
	classes: ["cleric", "warlock", "wizard"],
	source: ["MMSR", 0],
	level: 9,
	school: "Necro",
	time: "1 min",
	range: "Touch",
	components: "V,S,M\u2020",
	compMaterial: "A black diamond worth at least 10,000gp, which the spell consumes",
	duration: "Concentration, special",
	description: "You control an undead mummy lord with a telepathic link; the spell continues for 24 hr, even if concentration is dropped, though you lose control until concentrating again.",
	descriptionFull: "This spell can only be cast in a desert or similarly dry environment. You instill great power into a mummified Medium or Small humanoid. You must have that humanoid's heart to cast this spell and you cast it on their corpse. The corpse becomes a mummy lord under your control (the DM has the statistics for the creature).\n  You form a telepathic link with the mummy lord and can communicate back and forth across any distance if you are both on the same plane. You can issue basic or complex orders, from guarding a corridor, to animating lesser undead in a certain time and place, or even greater intelligent commands, such as forming a cult. It acts on your initiative while controlled by you.\n  If the mummy lord dies, it isn't gone forever. It rises from dust in close proximity to its heart. If you still have its heart, it remains under your control Its heart has 5 AC, 25 hitpoints, and immunity to all damage except fire. If it is destroyed, the spell ends, and the mummy lord perishes.\n  You can drop concentration on this spell at any point and the spell will not end. If you are no longer concentrating on it, the mummy lord acts of its own accord, and the mummy lord is no longer under your direct control. It may well continue to follow your direction, or it may plot to take its heart from you. Once animated, you can't dismiss or deanimate the mummy lord.\n  You can't cast this spell again while the mummy lord you animated previously still exists, even if you don't control it anymore. The creature is animated for 24 hr, after which it and its heart would turn to dust. To keep the creature animated for another 24 hr, you must cast this spell on the creature before the current 24- hr period ends. When you cast the spell on a mummy lord you animated, the range is unlimited if you are both on the same plane. This use of the spell keeps the current mummy lord animated rather than animating a new one.",
};

SpellsList["deadline"] = {
	name: "Deadline",
	classes: ["warlock", "wizard"],
	source: ["MMSR", 0],
	level: 1,
	school: "Necro",
	time: "1 a",
	range: "Self",
	components: "V,S",
	duration: "Instantaneous",
	save: "Con",
	description: "Creatures make Con save; 3d6 necrotic on fail; gain 1d6 hitpoints if at least on target takes damage",
	descriptionFull: "You attempt to pull the life from creatures in a line 15 ft long and 5 ft wide in a direction you choose. Each creature in the line must make a Constitution saving throw taking 3d6 necrotic damage on a failed save. If at least one target takes damage from this spell, you additionally regain 1d6 hitpoints.\n  When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 2nd.",
};

SpellsList["greater entomb"] = {
	name: "Greater Entomb",
	classes: ["cleric", "druid", "paladin", "ranger", "warlock"],
	source: ["MMSR", 0],
	level: 5,
	school: "Necro",
	time: "1 a",
	range: "30 ft",
	components: "V,S,M",
	compMaterial: "A lock",
	duration: "conc, 1 min",
	save: "Con",
	description: "You entomb a creature; on a failed Con save, creature takes 5d12 damage; damage continues on each failed save, until success",
	descriptionFull: "You choose a creature within range to construct a tomb around, keeping them trapped inside its walls. The target must make a Constitution saving throw. On a failure, it is locked within and pierced with a thousand spikes, and magically dealt 5d12 piercing damage. The target makes the saving throw at the end of each of its turns, taking the same damage on a failure. On any success, the tomb shatters apart and fades away, freeing the target. The creature has total cover while the tomb lasts and can't move or escape by any means other than teleporting.\n  An undead target has disadvantage on its first saving throw against this spell.\n  A creature that fails every save against this spell or is reduced to 0 hitpoints while inside is locked within. The duration becomes permanent. A dispel magic spell can end the spell only if it is cast at 5th-level or higher on the tomb. The tomb has 50 hitpoints, 15 AC, immunity to poison and psychic damage, and resistance to all other damage except force.\n  When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d12 for each slot level above 5th.",
  };

SpellsList["black fireball"] = {
	name: "Black Fireball",
	classes: ["sorcerer", "warlock", "wizard"],
	source: ["MMSR", 0],
	level: 5,
	school: "Evoc",
	time: "1 a",
	range: "180 ft",
	components: "V,S,M",
	compMaterial: "Sulfur and ash",
	duration: "conc, 1 round",
	save: "Dex",
	description: "Each creature makes Dex save, takes 6d6 fire and 6d6 necrotic on fail, half on save",
	descriptionFull: "A maelstrom of swirling black fire appears near your hands. On your next turn, you choose a spot within range as an action, provided this spell hasn't ended. The maelstrom disappears from your hands and reappears centered on that point, grown exponentially. Each creature in a 30 ft radius sphere centered on that point must make a Dexterity saving throw. A target takes 6d6 fire and 6d6 necrotic damage on a failed save, or half as much damage on a successful one.\n  The maelstrom spreads around corners. It ignites flammable objects in the area that aren't being worn or carried, and it withers nonmagical, normal plants.\n  When you cast this spell using a spell slot of 6th level or higher, the fire damage or the necrotic damage (your choice) increases by 1d6 for each slot level above 5th.",
};

SpellsList["mustangs flame alchemy"] = {
	name: "Mustang's Flame Alchemy",
	classes: ["sorcerer", "wizard"],
	source: ["MMSR", 0],
	level: 3,
	school: "Trans",
	time: "1 a",
	range: "60 ft",
	components: "S,M",
	compMaterial: "An inscribed magic circle",
	duration: "Instantaneous",
	save: "Con",
	description: "Any creature chosen or in a chosen space is a target and must make a Con save; 3d10 on fail and is blinded or deafened until next turn; half on save with no effects",
	descriptionFull: "A spark erupts into a torrent of flame from your hand. Choose up to eight creatures within range. If you don't know their location or can't see them, you can choose a 5 ft cube in place of one or more of the creatures. Any creature chosen or in a chosen space is a target and must make a Constitution saving throw. A target takes 3d10 fire damage on a failed saving throw and is blinded or deafened (your choice) until the start of their next turn, or takes half as much damage on a success and isn't blinded or deafened.\n  When you cast this spell using a spell slot of 4th level or higher, the fire damage increases by 1d10 for each slot level above 3rd.",
};

SpellsList["onyx skull"] = {
	name: "Onyx Skull",
	classes: ["cleric", "paladin", "sorcerer", "warlock", "wizard"],
	source: ["MMSR", 0],
	level: 3,
	school: "Necro",
	time: "1 a",
	range: "Self",
	components: "V,S",
	duration: "Instantaneous",
	save: "Con",
	description: "Each creature caught in half-ring makes Con save; on fail, 5d10 necrotic, half on save",
	descriptionFull: "An ethereal onyx skull spawns all around you and bites down. You choose a half ring 60 ft in diameter, 10 ft high, and 1 ft thick within range. The ring must be centered on you. Each creature caught with any part of the half ring in their space must make a Constitution saving throw. On a failure, the onyx skull's teeth scissor and crunch, and each creature takes 5d10 necrotic damage or half as much on a success. Undead creatures take an additional d10 of damage. The skull then collapses, leaving a thin layer of ash behind.\n  When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d10 for every second slot level above 3rd.",
};

SpellsList["starsee"] = {
	name: "Starsee",
	classes: ["druid", "ranger", "warlock", "wizard"],
	source: ["MMSR", 0],
	level: 1,
	school: "Div",
	time: "1 a",
	range: "Self",
	components: "S",
	duration: "conc, 1 min",
	description: "A stellar map appears above your head; you can see in dim as if bright; +5 to passive perception and any Search action",
	descriptionFull: "You can only cast this spell at dusk, night, or dawn. A stellar map appears above your head, revealing stars and constellations, named as they are in this land (or else unnamed). Until the spell ends, you add +5 to your passive perception and any ability check made with the Search action, and you can see in dim light as if it were bright.",
};

SpellsList["storm of crows"] = {
	name: "Storm of Crows",
	classes: ["druid", "cleric", "sorcerer", "warlock"],
	source: ["MMSR", 0],
	level: 5,
	school: "Conj",
	time: "1 a",
	range: "180 ft",
	components: "V,S",
	duration: "conc, 1 min",
	save: "Con",
	description: "A murder of crows appears; any creature under cloud makes Con save; blinded on fail, end on success",
	descriptionFull: "A tempestuous murder of crows appears, centered on a point you can see within range and spreading to a radius of 45 ft. Crows cry, winds buffer, and fire roars. Each creature under the cloud (no more than 90 ft beneath the cloud) when it appears must make a Constitution saving throw. On a failed save, a creature becomes blinded for 1 min. A blinded creature can repeat the save at the end of each of their turns, ending the effect on a success. At the start of each of your turns until the spell ends, the following effects alternate taking place. When you cast this spell, choose the order of the effects.\n  Flock\n  Crows dive and swarm. The area under the cloud becomes complete magical darkness until the start of your next turn and each creature takes 1d6 slashing damage.\n  Flames\n  You call five pillars of fire from the cloud to strike five creatures or objects of your choice beneath the cloud. A given creature or object can't he struck by more than one pillar. A struck creature must make a Dexterity saving throw. The creature takes 5d6 fire damage on a failed save, or half as much damage on a successful one.",
};

SpellsList["glasswings"] = {
	name: "Glasswings",
	classes: ["bard", "wizard"],
	source: ["MMSR", 0],
	level: 2,
	school: "Conj",
	time: "1 a",
	range: "Self",
	components: "S",
	duration: "Instantaneous",
	description: "",
	descriptionFull: "Wings of glass unfold from your back. You gain a flying speed of 30 ft. Additionally, if you are adjacent to a creature, you can give up some or all of your remaining flying speed to strike it with your glass cut wings. Make a melee spell attack against the creature. On a hit, it takes 1d6 slashing damage for every 5 remaining movement you gave up, to a maximum of 30. Additionally, the creature's speed is reduced by 15 until the end of its next turn. The spell ends at the end of your turn, the wings shattering to glitter and fading away.\n  When you cast this spell using a spell slot of 3rd level or higher, you gain an additional 10 ft of flying speed for each slot level above 2nd, and you can gain damage to a maximum increased by the same amount.",
};

SpellsList["maegis"] = {
	name: "Maegis",
	classes: ["sorcerer", "warlock", "wizard"],
	source: ["MMSR", 0],
	level: 7,
	school: "Abjur",
	time: "1 a",
	range: "Touch",
	components: "V,S,M\u2020",
	compMaterial: "An ornate shield worth 1,000sp, which the spell consumes",
	duration: "conc, 1 hr",
	save: "Dex",
	description: "Each targeted creature must make Dex save; 6d12 force damage on fail, half on save",
	descriptionFull: "You shatter a valuable shield, moving its thousand tiny pieces over the skin of a creature, a protective magic filling in the gaps between each piece, forming its aegis. Until the spell ends, the target has resistance to all damage except force damage. As an action, you can dismiss this spell and cause the aegis to explode. Each creature of your choice that you can see within 30 ft of the aegis wearer must make a Dexterity saving throw. On a failure, they take 6d12 force damage, or half as much on a success.",
};

SpellsList["call treant spirit"] = {
	name: "Call Treant Spirit",
	classes: ["druid", "ranger", "wizard"],
	source: ["MMSR", 0],
	level: 4,
	school: "Conj",
	time: "1 a",
	range: "Touch",
	components: "V,S",
	duration: "Instantaneous",
	description: "You awaken a tree's spirit; it will answer three questions or fight for you (for two attacks)",
	descriptionFull: "You touch a Large or Huge tree, awakening its spirit for a moment. You must immediately direct it to fight with you or to answer up to 3 questions it may or may not know the answer to, but will generally attempt to answer honestly unless you are known by it to be an enemy of wilderness. If you direct it to fight, you choose a target within 30 ft of the tree, and the tree animates, uprooting itself, charging towards the target. The treant spirit has 50 hitpoints, AC of 15, and resistance  to all damage except fire. It can make two attacks against the target, forgoing either or both for a shove or grapple attempt as normal. The treant spirit uses your spellcasting ability modifier for all its saves, ability checks, and attack rolls, and is proficient with its attacks and Athletics (your proficiency bonus). On a hit, the target takes 3d6+6 force damage, or half as much on a miss. After answering 3 questions or making its attacks, the tree takes root in its current location, ends any grapples, becomes a normal tree once again, and the spell ends.",
};

SpellsList["prayer for the wicked"] = {
	name: "Prayer for the Wicked",
	classes: ["bard", "cleric", "druid", "sorcerer", "warlock", "wizard"],
	source: ["MMSR", 0],
	level: 9,
	school: "Abjur",
	time: "1 hr",
	range: "Sight",
	components: "V,M\u2020",
	compMaterial: "A magic weapon, thrust into the heart of a titan, laid upon an altar to an extraplanar deity, all of which the spell consumes by burning it to ash when the spell is cast",
	duration: "Until the army is no more",
	description: "Any creature in sight are now your soldiers; can't be dispelled by dispel magic",
	descriptionFull: "You prepare an army for interplanar war. Until the spell ends, any number of creatures you choose that you can see are soldiers in this army. Choose aberrations, celestials, elementals, fey, fiends, or undead. A soldier gains resistance to the damage dealt by the chosen type, has advantage on saving throws against those creatures, and any attack a soldier hits them with becomes a critical hit. Finally, the soldiers attacks become magical.\n  This spell can't be dispelled by dispel magic. You can discharge any number of soldiers at any time or disband the army, causing them to lose the benefits of the spell. A soldier who dies also loses the spell's benefits. You can't cast this spell again while any creature remains in the army.",
};

SpellsList["corrode inner flesh"] = {
	name: "Corrode Inner Flesh",
	classes: ["druid", "sorcerer", "warlock", "wizard"],
	source: ["MMSR", 0],
	level: 5,
	school: "Evoc",
	time: "1 a",
	range: "Touch",
	components: "V,S,M\u2020",
	compMaterial: "A vial of acid worth 25gp or more, which the spell consumes",
	duration: "Instantaneous",
	save: "Con",
	description: "A creature you touch must make Con save; on fail, 12d4 acid damage and 6d4 acid damage at end of turn; half initial and no damage at end on success",
	descriptionFull: "You shove an acid vial inside the body of a creature and exponentially intensify the acid within. Any creature that lacks an organic body is immune to this spell, such as elementals, constructs, and creatures with the incorporeal movement feature. A creature you touch must make a Constitution saving throw. On a failed save, the target is eaten from the inside out by corrosion, taking 12d4 acid damage and another 6d4 acid damage at the end of its next turn. On a success, a creature takes half the initial damage and no damage at the end of its next turn. If a creature is reduced to 0 hitpoints by the acid damage from this spell, it explodes in a radius of 15 ft. Any creature other than you caught in the radius must make a Constitution saving throw, taking 4d4 acid damage and another 2d4 acid damage at the end of its next turn, or half the initial damage on and no damage at the end of its next turn a success.\n  When you cast this spell using a spell slot of 6th level or higher, the initial damage the first target takes increases by 2d4 for each slot level above 5th.",
};

SpellsList["mantis knight blade"] = {
	name: "Mantis Knight Blade",
	classes: ["druid", "ranger"],
	source: ["MMSR", 0],
	level: 2,
	school: "Conj",
	time: "1 bns",
	range: "Self",
	components: "V,S,M\u0192",
	compMaterial: "A staff worth at least 5gp",
	duration: "conc, 1 min",
	description: "You summon a blade capable of 2d6 slashing damage; if you roll same result on both dice, you make another attack.",
	descriptionFull: "You magically part a nonmagical staff, summoning a weapon of the feywild used by the nimblest of their knights, the Mantis. This magic weapon counts as a simple melee weapon with which you are proficient. It deals 2d6 slashing damage on a hit and has the finesse property. When you roll the same result on both of the first two damage dice, you can immediately make another attack against the same target, potentially provoking this feature again. Additionally, when you attack charmed targets with this weapon, you make the attack roll with advantage. The spell ends if you cast it again or if you let go of the weapon. When the spell ends, the staff grows back together, the weapon returning to its Mantis in the feywild.\n  When you cast this spell using a 3rd-or 4th-level spell slot, the damage increases to 3d6. When you cast it using a 5th- or 6th-level spell slot, the damage increases to 4d6. When you cast it using a spell slot of 7th level or higher, the damage increases to 5d6.",
};

SpellsList["opposing force"] = {
	name: "Opposing Force",
	classes: ["sorcerer", "warlock", "wizard"],
	source: ["MMSR", 0],
	level: 2,
	school: "Abjur",
	time: "1 reaction, which you take when you take bludgeoning, piercing, or slashing damage from a melee attack",
	range: "Self",
	components: "S",
	duration: "Instantaneous",
	description: "Roll 1d10 + spellcasting mod and subtract that from damage being dealt to you; foe takes you rolled result in same damage type",
	descriptionFull: "You revert some or all of the force of an attack against you back against the foe. Roll 1d10 + your spellcasting ability modifier (minimum of 1). You reduce the oncoming damage by the result, and the attacker takes the amount reduced in damage of the same type it dealt.",
};

SpellsList["gloves of ember"] = {
	name: "Gloves of Ember",
	classes: ["sorcerer", "warlock", "wizard"],
	source: ["MMSR", 0],
	level: 0,
	school: "Evoc",
	time: "1 a",
	range: "Self",
	components: "V,S",
	duration: "Special",
	description: "Target takes 2d4 fire damage",
	descriptionFull: "Your hands erupt in flaming gloves of ember, harmless to you but deadly to others. Make a melee spell attack against a creature within range. You have advantage if the target of the attack is a plant. On a hit, the target takes 2d4 fire damage. A creature reduced to 0 hitpoints with this spell burns for 1 min, its body taking 1 fire damage at the start of each of your turns, unless a creature douses it as an action.\n  The gloves of ember dissipate at the start of your next turn. While they last, you can attack with them as an opportunity attack, with the same attack and damage.\n  This spell's damage increases by 2d4 when you reach Sth level (4d4), 11th level (6d4), and 17th level (8d4).",
};

SpellsList["fist"] = {
	name: "Fist",
	classes: ["wizard"],
	source: ["MMSR", 0],
	level: 3,
	school: "Conj",
	time: "1 a",
	range: "Self",
	components: "V,S",
	duration: "conc, 1 min",
	description: "Choose to Punch, Crush, or Toss target",
	descriptionFull: "A magic gauntlet envelops your fist. You can't wield a weapon in this hand and you can't cast spells with a casting time of 1 a or longer. Your AC becomes 17 if it wasn't already higher, and when you cast this spell and as an action while the spell lasts, you can choose an option below. When the spell ends, the gauntlet fades slowly, and the spell's effects last until the end of your next turn.\n  Punch\n  Make a melee spell attack against a creature within 5 ft of you, and add your Strength modifier to the attack roll On a hit, a target takes 3d6 + your Strength modifier in bludgeoning damage and is grappled by you if it is Huge or smaller. Grapple and shove checks with this hand are Athletics (Strength) + your spellcasting ability modifier, and you can grapple and shove Huge creatures.\n  Crush\n  You smash a grappled creature in your fist. The target automatically takes 2d6 + your Strength modifier in bludgeoning damage and is restrained until the end of your next turn or until your grapple ends.\n  Toss\n  You toss a Huge or smaller creature within 5 ft of you back a number of feet away from you up to 5 x (your spellcasting ability + your Strength modifiers). A creature can make a Strength saving throw to avoid being tossed. A tossed creature takes 3d6 bludgeoning damage, or twice as much if it collides with an object or creature that is a size smaller than it or larger. If you toss a creature you are grappling, you can choose to toss it down or any horizontal direction, and you can toss it twice as far, ending the grapple on either a success or fail.",
};

SpellsList["saving hand"] = {
	name: "Saving Hand",
	classes: ["cleric", "druid", "paladin"],
	source: ["MMSR", 0],
	level: 3,
	school: "Evoc",
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	compMaterial: "Clasping hands with the target",
	duration: "Instantaneous",
	save: "Str",
	description: "Target regains hitpoints equal to 3d10 + spellcasting ability mod; each creature within 30ft make Str save, get moved 15ft back on fail",
	descriptionFull: "You leap to the air, flying towards a creature within range, taking their hand and rejuvenating them. They regain a number of hitpoints equal to 3d10 + your spellcasting ability modifier, can immediately stand if they are prone, and lose one disease or condition afflicting them, which could be blinded, deafened, or poisoned. Additionally, after you heal the target, each creature of your choice within 30 ft of you must succeed on a Strength saving throw or be pushed back 15 ft by a blast of divine light emitted from your hands.",
};

SpellsList["lilianders hellspear"] = {
	name: "Liliander's Hellspear",
	classes: ["paladin", "ranger", "warlock", "wizard"],
	source: ["MMSR", 0],
	level: 3,
	school: "Evoc",
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	description: "Target(s) take 3d10 piercing and 3d10 psychic, and their speed drops to 0 until start of your next turn",
	descriptionFull: "You summon a burning incorporeal spear and launch it towards a target within range. Make a ranged spell attack against that target. If there are any creatures 10 ft or less directly behind the target from you in a line and the attack roll would also hit them, they are also hit. On a hit, a creature takes 3d10 piercing and 3d10 fire damage. Additionally, their speed drops to 0 until the start of your next turn, when the spear dissipates.\n  When you cast this spell using a spell slot of 4th level or higher, the piercing damage or the fire damage (your choice) increases by Id 10 for each slot level above 3rd. ",
};

SpellsList["objectify"] = {
	name: "Objectify",
	classes: ["bard", "warlock", "wizard"],
	source: ["MMSR", 0],
	level: 2,
	school: "Trans",
	time: "1 a",
	range: "30 ft",
	components: "V,S,M",
	compMaterial: "A piece of a mimic's corpse",
	duration: "conc, 1 hr",
	save: "Wis",
	description: "You transform a creature into a nonmagical object with 10 temporary hit points",
	descriptionFull: "Choose one creature you can see within range. You transform that creature into a nonmagical object. An unwilling creature can make a Wisdom saving throw, and if it succeeds, isn't affected by this spell. A target can make a Wisdom saving throw at the end of each of its turns, ending the effect on a success.\n  The target transforms along with whatever it is wearing and carrying into that form, as long as the object's size is no larger than the creature's size. The target gains 10 temporary hit points. These temporary hit points can't be replaced by temporary hit points from another source. A target reverts to its normal form when it has no more temporary hit points, dies, or the spell ends. If the spell ends before then, the creature loses all its temporary hit points and reverts to its normal form. The creature has no memory of time spent in this form after the spell ends and it returns to its normal form.",
};

SpellsList["aspect of pride"] = {
	name: "Aspect of Pride",
	classes: ["bard", "sorcerer", "warlock", "wizard"],
	source: ["MMSR", 0],
	level: 6,
	school: "Conj",
	time: "1 a",
	range: "Self",
	components: "V,S",
	duration: "conc, 1 min",
	save: "Dex",
	description: "Choose a point; every creature within 5 ft must make a Dex save; creature takes 6d12 piercing on failed save",
	descriptionFull: "If you are in complete darkness when you cast or for the duration of the spell, the spell immediately fails and ends. For the duration, black shadowy tendrils with many eyes and teeth surround you, waiting for a command.\n  When you cast the spell, a tendril stretches out to a point you can see within range. Each creature within 5 ft of that point must make a Dexterity saving throw. A creature takes 6d12 piercing damage on a failed save and is moved 10 ft in any direction of your choice except up. On each of your turns until the spell ends, you can use your action to outstretch tendrils again, targeting the same point or a different one.\n  When you cast this spell using a spell slot of 7th or higher level, the damage increases by 1d12 for each slot level above 6th.",
};

SpellsList["freeze"] = {
	name: "Freeze",
	classes: ["druid", "sorcerer"],
	source: ["MMSR", 0],
	level: 3,
	school: "Trans",
	time: "1 a",
	range: "Touch",
	components: "V,S",
	duration: "conc, 1 min",
	save: "Con",
	description: "You freeze a creature you touch; they must make a Con save; they're frozen on the first fail, and turned to ice on a second fail; creature makes Con save each turn, and spell ends on success",
	descriptionFull: "You grasp the flesh or armaments of a creature and disperse their heat to the air, freezing them. The target must make a Constitution saving throw. On a failure, it is paralyzed. At the end of its next turn, it must make another Constitution saving throw, and it does so with advantage if it is Large or larger. The spell ends on a success, but on a failure, they are petrified, turned to ice. The creature can repeat the saving throw at the end of each of its turns, ending the effect completely on a success.\n  If the spell lasts for its entire duration and the creature failed every save, it is permanently turned to ice, which does not melt naturally, even through a blazing summer.",
};

SpellsList["fracture spirit"] = {
	name: "Fracture Spirit",
	classes: ["bard", "sorcerer", "warlock", "wizard"],
	source: ["MMSR", 0],
	level: 3,
	school: "Illus",
	time: "1 a",
	range: "Self",
	components: "S",
	duration: "conc, 1 min",
	save: "Int",
	description: "You create illusory images of yourself every 5 ft, staying in space but still appearing as if it were you",
	descriptionFull: "When you cast this spell, you magically replicate a hall of mirrors for yourself in thin air. For the duration an illusory double of you spawns every 5 ft that you move, staying in that space but still appearing as if it were you; for example, if you speak, they all seem to speak. When you end your turn under this spell, you can immediately choose one double to swap places with.\n  A creature with truesight sees the illusions and you for the reality, and any creature can make an Intelligence (Investigation) check as an action against your spell save DC to determine which is the real you, if any, among those it can see. On a success, it knows which is real until you make more doubles. A double dissipates upon being attacked or forced to save or contest an ability check, and all doubles dissipate when the spell ends.",
};

SpellsList["amelias painted tie"] = {
	name: "Amelia's Painted Tie",
	classes: ["bard", "wizard"],
	source: ["MMSR", 0],
	level: 5,
	school: "Necro",
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Up to 1 round",
	description: "Two creatures are in the loops of an infinity symbol. When the first creature loses health, the second regains that much health",
	descriptionFull: "When you cast this spell, choose two creatures you can see within range. An infinity symbol appears between them, each of them in the center of a loop. When the first creature is damaged, the second creature regains an amount of health equal to the damage dealt. This lasts until the end of your next turn when spell ends or 80 damage is dealt to the first creature, whichever comes first.\n  When you cast this spell with a spell slot of 6th level or higher, the second creature regains health until the spell ends or an additional 20 damage is dealt per spell slot above 5th level.",
};

SpellsList["entomb"] = {
	name: "Entomb",
	classes: ["cleric", "druid", "paladin", "ranger", "warlock"],
	source: ["MMSR", 0],
	level: 3,
	school: "Necro",
	time: "1 a",
	range: "30 ft",
	components: "V,S,M",
	compMaterial: "A handful of nails",
	duration: "Instantaneous",
	save: "Con",
	description: "You construct a coffin around a creature and must make a Con save; 5d12 piercing damage and trapped on a fail, half damage and not trapped on a success",
	descriptionFull: "You choose a creature within range to magically construct a coffin around, shutting them inside with overlaying chains. The target must make a Constitution saving throw. On a failure, it is locked inside, stabbed with a thousand blades, and magically dealt 5d12 piercing damage. The coffin turns to ash at the start of its next turn. The creature has total cover while it lasts and can't move or escape by any means other than teleporting. On a success, the creature takes half as much damage and the coffin immediately fades.\n  An undead that has advantage on saving throws against or is immune to effects that turn undead has disadvantage on its saving throw against this spell.\n  When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d12 for each slot level above 3rd.",
};

SpellsList["ice shield"] = {
	name: "Ice Shield",
	classes: ["druid", "sorcerer"],
	source: ["MMSR", 0],
	level: 2,
	school: "Abjur",
	time: "1 reaction, which you take when you fail a Dexterity or Constitution saving throw that deals damage",
	range: "Self",
	components: "V,S",
	duration: "1 round",
	description: "A shield of ice coalesces to protect you from oncoming danger. Until the start of your next turn, you gain 2d6+6 temporary hitpoints, which can be lost by the triggering effect.",
};

SpellsList["reach of the astral dreadnought"] = {
	name: "Reach of the Astral Dreadnought",
	classes: ["bard", "sorcerer", "warlock", "wizard"],
	source: ["MMSR", 0],
	level: 7,
	school: "Conj",
	time: "1 a",
	range: "Self",
	components: "V,S,M",
	compMaterial: "A cord of silver",
	duration: "Instantaneous",
	description: "You summon an astral dreadnought that swallows your target if you reduce the target to 0 hitpoints across three attacks",
	descriptionFull: "You momentarily conjoin parts of the astral and your current plane, allowing an astral dreadnought through via your summons. Choose one creature you can seen within 90 ft of you as the target for the astral dreadnought. Make three melee or ranged spell attacks against it. If the first or second hit, they each deal 3d6+9 slashing damage.\n  If the third hits, it deals 5d10+9 piercing damage. If the target is Huge or smaller and this damage reduces it to 0 hit points, the astral dreadnought swallows it. The swallowed target, along with everything it is wearing and carrying, appears in an unoccupied space on the floor of the dreadnought's Demiplanar Donjon. This is a demiplane that can be entered by no other means except a wish spell or the astral dreadnought's Donjon Visit ability. A creature can leave the demiplane only by using magic that enables planar travel, such as the plane shift spell. The demiplane resembles a stone cave roughly 1,000 ft in diameter with a ceiling 100 ft high. Like a stomach, it contains the remains of the dreadnought's past meals. The dreadnought can't be harmed from within the demiplane. If the dreadnought dies, the demiplane disappears, and everything inside it appears around the corpse. The demiplane is otherwise indestructible.\n  After you make the three attacks, the planes realign and the dreadnought is shunted to the astral once more. While conjured by you, the dreadnought is a façade, and not a true creature. Additionally, this spell fails if cast on the astral plane.",
};

SpellsList["shooting star"] = {
	name: "Shooting Star",
	classes: ["bard", "druid", "ranger", "sorcerer", "warlock", "wizard"],
	source: ["MMSR", 0],
	level: 4,
	school: "Evoc",
	time: "1 a",
	range: "120-ft line",
	components: "S",
	duration: "Instantaneous",
	save: "Dex",
	description: "120 ft+30 ft/SL > 4 line from self; 4d6 Force + 4d6 Radiant + 4d6 Piercing; save halves; continues through creatures until save or length ends",
	descriptionFull: "A star shoots out from your eye to pierce through space in front of it. The first creature in a line stretching 120 ft from you must make a Constitution saving throw or take 4d6 force, 4d6 radiant, and 4d6 piercing damage, or half as much on a success. On a failure, the star pierces through them and on to the next creature in the line, who must make the same saving throw, taking the same damage or half. The star continues until a creature succeeds, caught in their body to wink out, or it travels the spell's line length and fades away.\n  " + toUni("At Higher Levels") + ": When you cast this spell using a spell slot of 5th level or higher, the spell's line length increases by 30 ft per slot level above 4th.",
};

SpellsList["self petrification"] = {
	name: "Self Petrification",
	classes: ["bard", "warlock", "wizard"],
	source: ["MMSR", 0],
	ritual: true,
	level: 4,
	school: "Trans",
	time: "1 min",
	range: "Self",
	components: "V,S",
	duration: "Varies",
	description: "You petrify yourself into stone for 1 min to 1 year with as many conditions as you want; revert immediately if you take damage",
	descriptionFull: "You petrify yourself into stone. You can choose how long you remain petrified, from as little time as a min to as long as a year. If you take damage while petrified in this way, you immediately revert. Additionally, you can set any number of conditions for you to revert early of the duration, such as a word someone speaks to your petrified form or an amount of blood poured over your stone.\n  When you cast this spell using a spell slot of 5th level or higher, the amount of time you can petrify yourself multiplies by five years for each slot level above 4th.",
};

SpellsList["lesser passwall"] = {
	name: "Lesser Passwall",
	classes: ["druid", "wizard"],
	source: ["MMSR", 0],
	level: 3,
	school: "Trans",
	time: "1 a",
	range: "Touch",
	components: "V,S,M",
	compMaterial: "One sesame seed",
	duration: "1 min",
	description: "You create a passage that lasts for a min; any creature still in the passage takes 4d6 bludgeoning damage",
	descriptionFull: "A passage appears at a point of your choice that you can see on a wooden, plaster, or stone surface (such as a wall, a ceiling, or a floor) within range, and lasts for the duration. You choose the opening's dimensions: up to 3 ft wide, 4 ft tall, and 5 ft deep. The passage creates no instability in a structure surrounding it. A Medium sized creature must squeeze to move through the opening if the opening is created at its maximum dimensions.\n  When the opening disappears, any creatures or objects still in the passage created by the spell are ejected to an unoccupied space nearest to the surface on which you cast the spell and take 4d6 bludgeoning damage.",
};

SpellsList["cold iron strike"] = {
	name: "Cold Iron Strike",
	classes: ["atavist", "ranger", "wizard"],
	source: ["MMSR", 0],
	level: 3,
	school: "Conj",
	time: "1 a",
	range: "Self",
	components: "S,M",
	compMaterial: "A melee weapon made of iron",
	duration: "Instantaneous",
	description: "You melee attack up to 3 creatures within a 30 ft line from you; each hit is 4d10 cold damage",
	descriptionFull: "You flourish the weapon used in casting and then disappear in a flash of iron. Choose up to three creatures in a line extending 30 ft from you and make a melee spell attack against each. On a hit, a target takes 4d10 cold damage and can't take reactions until the end of your next turn. You can then teleport to an unoccupied space you can see within 5 ft of the last target of the spell. Fey take an additional 1d10 cold damage from this spell.",
};

SpellsList["feebleform"] = {
	name: "Feebleform",
	classes: ["Atavist"],
	source: ["MMSR", 0],
	level: 7,
	school: "Necro",
	time: "1 a",
	range: "Touch",
	components: "V,S",
	duration: "Instantaneous",
	description: "Target takes 3d6 necrotic and must make Con save; Str and Con become 1 on fail",
	descriptionFull: "You attempt to obliterate the physical form of a creature. The target takes 3d6 necrotic damage and must make a Constitution saving throw.\n  On a failed save, the target's Strength and Constitution scores become 1. The creature's hitpoint maximum lowers to match its new Constitution when it finishes a short or long rest, but can't fall below half of its previous maximum. The creature can't lift weapons or any other objects larger than two sizes smaller than it.\n  At the end of every 30 days, the creature can repeat its saving throw against this spell If it succeeds on its saving throw, the spell ends.\n  The spell can also be ended by greater restoration, heal, regenerate, or wish.",
};

SpellsList["skinscales"] = {
	name: "Skinscales",
	classes: ["druid", "sorcerer"],
	source: ["MMSR", 0],
	level: 2,
	school: "Abjur",
	time: "1 a",
	range: "Touch",
	components: "V,S,M",
	compMaterial: "A bit of shredded snakeskin",
	duration: "1 hr",
	description: "Creature can reduce incoming damage by twice spellcasting mod as reaction",
	descriptionFull: "You touch a willing creature and grant it supernatural scaly defenses. For the duration the creature can reduce incoming damage by twice the caster's spellcasting ability modifier as a reaction. The spell ends once the creature has reduced damage in this way three times.\n  The creature can reduce damage one additional time for every spell level above 2nd.",
};

SpellsList["snakemake"] = {
	name: "Snakemake",
	classes: ["druid", "ranger", "wizard"],
	source: ["MMSR", 0],
	level: 3,
	school: "Trans",
	time: "1 a",
	range: "Touch",
	components: "V,S,M",
	compMaterial: "An object you are holding",
	duration: "Instantaneous",
	description: "You turn any non-artifact item you are holding into a giant constrictor snake under your control",
	descriptionFull: "When you cast this spell, you turn any non-artifact item you are holding into a giant constrictor snake under your control, the stats of which can be found in the Monster Manual on page 324. When you cast this spell, and as an action on each of your subsequent turns, you can control the action of the creature, using its senses when you do so. If it could take a reaction, you must use your reaction to do so. If you don't control the creature, it takes the Dodge action if there are hostile creatures around it, or otherwise does nothing. When you are controlling the creature and it deals damage, you are healed for half the damage it dealt. The snake turns hack into the object after 1 hr or when it is killed.",
};

SpellsList["bind"] = {
	name: "Bind",
	classes: ["bard", "cleric", "warlock", "wizard"],
	source: ["MMSR", 0],
	ritual: true,
	level: 3,
	school: "Abjur",
	time: "1 a",
	range: "Touch",
	components: "V,S,M\u2020",
	compMaterial: "A pair of manacles worth at least 2gp, which the spell consumes",
	duration: "Up to 3 days",
	description: "Crea speed 10ft, can't speak or move more than 60ft away from caster",
	descriptionFull: "You grasp the wrists of an unconscious Huge or smaller creature with 0 hitpoints remaining and create a magical bind that holds its hands together, with similar binds appearing around its ankles and mouth. While bound, the creature can't speak, its speed is reduced to 10 ft, it can't fly if it could, and it can't move more than 60 ft away from the caster unless the caster allows it. Additionally, it can't regain more than 1 hitpoint.\n  When you cast this spell, set a code word in your mind. When you speak it, regardless of where you are, the creature is released and the spell ends. Otherwise, the spell ends after 3 days.",
};

SpellsList["field of chains"] = {
	name: "Field of Chains",
	classes: ["warlock", "wizard"],
	source: ["MMSR", 0],
	level: 5,
	school: "Conj",
	time: "1 a",
	range: "60 ft",
	components: "V,S,M",
	compMaterial: "Two interlocked chain links",
	duration: "Instantaneous",
	save: "Str/Dex",
	description: "Each creature takes 4d8 on fail, can attempt on each turn with same effect on fail",
	descriptionFull: "You choose a number of targets you can see within range up to twice your spellcasting modifier. Chains leap from the ground or nearby objects and structures to grasp and hold the targets, each of which must make a Strength or Dexterity saving throw to avoid the effect (target's choice). On a failure, each target is restrained and is moved up to 15 ft in any direction you choose, bound by the chains from multiple angles. Additionally, a creature who failed the save takes 4d8 bludgeoning damage.\n  A creature can attempt to break or slip free as an action, and repeats the save. On a success, its chains fade away. On a failure, it takes another 4d8 bludgeoning damage and remain chained.\n  A creature killed by this spell is permanently chained to the ground, structure, or object it was chained to. If removed, the chains shatter into tiny flakes of iron.",
};

SpellsList["lantern walker"] = {
	name: "Lantern Walker",
	classes: ["cleric", "wizard"],
	source: ["MMSR", 0],
	ritual: true,
	level: 1,
	school: "Trans",
	time: "1 a",
	range: "Touch",
	components: "V,S,M\u0192",
	compMaterial: "A lantern worth at least 5gp",
	duration: "1 hr",
	description: "Lantern sprouts legs, can be directed to move up to 30ft",
	descriptionFull: "A lantern you hold for the casting of this spell sprouts metal legs. On your turn, you can direct it to move up to 30 ft. The latern shines light when lit as normal, whether it be a hooded, bullseye, or some other.\n  As an action while the spell lasts, you can look from the lantern's location, as if the lantern's wick was an eye. You are blind to your own senses until the end of your next turn. The lantern can't move more than a mile away from you, and if it becomes more than a mile away, the spell ends. The spell also ends if the lantern is the target of an attack or a spell that deals damage.\n  The lantern can walk up vertical surfaces, but not upside down. All of its attributes are 1. It can't take any actions.\n  When the spell ends, the lantern returns to normal, and could be reused for the casting of this spell again.",
};

SpellsList["snap star"] = {
	name: "Snap Star",
	classes: ["bard", "sorcerer", "warlock", "wizard"],
	source: ["MMSR", 0],
	level: 1,
	school: "Evoc",
	time: "1 a",
	range: "30 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: "Con",
	description: "All in 15 ft save or 2d4+1d4/SL Radiant dmg and blinded until end of their next turn",
	descriptionFull: "You snap and create a tiny facsimile of a star at a point you can see within range. Each creature that isn't blinded and within 15 ft of the point must succeed on a Constitution saving throw or take 2d4 radiant damage and be blinded until the end of their next turn, or no effect on a success.\n  " + toUni("At Higher Levels") + ": When you cast this spell using a spell slot of 2nd level or higher, the radiant damage increases by 1d4 for each slot level above 1st.",
};

SpellsList["reap"] = {
	name: "Reap",
	classes: ["warlock", "wizard"],
	source: ["MMSR", 0],
	level: 6,
	school: "Conj",
	time: "1 a",
	range: "120 ft",
	components: "S,M",
	compMaterial: "A scythe",
	duration: "Instantaneous",
	save: "Wis",
	description: "6d6 + 30 necrotic dmg; if below 10 hp after dmg, creature instantly slain",
	descriptionFull: "Choose two points you can see within range. A colossal scythe appears and swings between the points before fading away. Each creature caught in its path must make a Wisdom saving throw. A creature takes 6d6 + 30 necrotic damage on a failed save. If this leaves a creature in its true form with less than 10 hitpoints, it is instantly slain and can't be resurrected by magic of lower than 6th level.\n  When you cast this spell using a spell slot of 7th level or higher, the necrotic damage increases by 1d10 for each slot level above 6th.",
};

SpellsList["cone of wind"] = {
	name: "Cone of Wind",
	classes: ["druid", "ranger", "wizard"],
	source: ["MMSR", 0],
	level: 4,
	school: "Conj",
	time: "1 a",
	range: "Self",
	components: "V,S",
	duration: "Instantaneous",
	save: "Str",
	description: "6d6 slashing on fail + move 15ft, half dmg on success + no move",
	descriptionFull: "A sudden gale swirls and buffets in a 60 ft cone stretching from you. You choose to push or pull when you cast this spell. Each creature caught in the cone must make a Strength saving throw. Huge and larger creatures have advantage. On a failed save, a target is moved 15 ft closer or farther from you and takes 6d6 slashing damage. On a success, a creature isn't moved and takes half as much damage.\n  When you cast this spell using a spell slot of 5th level or higher, the slashing damage increases by 1d6 for each slot level above 4th.",
};

SpellsList["form of wind"] = {
	name: "Form of Wind",
	classes: ["druid", "ranger", "wizard"],
	source: ["MMSR", 0],
	level: 1,
	school: "Trans",
	time: "1 a",
	range: "Self",
	components: "V,S",
	duration: "1 r",
	description: "Speed doubled, incorporeal, res to all dmg, move through obj and cre as if diff. terrain",
	descriptionFull: "When you cast this spell, your physical body becomes a tempestuous wind until the start of your next turn. For the duration, your speed is doubled, you are incorporeal, you have resistance to all damage, and you can move through objects and creatures as if they were difficult terrain. If you end your turn in the space of a Large or smaller creature, you can make a spellcasting ability check contested by its Strength (Athletics). If you win the contest, the creature is shunted 5 ft to the nearest empty space. If you end your turn inside the space of an object, whichever of you is lighter than the other is similarly shunted 5 ft.",
};

SpellsList["thundersnap"] = {
	name: "Thundersnap",
	classes: ["bard", "sorcerer", "wizard"],
	source: ["MMSR", 0],
	level: 0,
	school: "Evoc",
	time: "1 a",
	range: "30 ft",
	components: "S",
	duration: "Instantaneous",
	description: "Ranged spell attack for 1d8 Thunder dmg; triple damage on crit; +1d8 at levels 5, 11, 17",
	descriptionFull: "You audibly snap at a creature within range, sending a visible focused sonic wave at it. Make a ranged spell attack against the target. On a hit, the target takes 1d8 thunder damage. You can't miss objects with this spell that aren't being worn or carried.\n  On a critical hit with this cantrip, you roll triple the damage dice, instead of double.\n  At 5th level, the thunder damage increases to 2d8. It increases to 3d8 at 11th level, and 4d8 at 17th.",
};

SpellsList["devas mace"] = {
	name: "Deva's Mace",
	classes: ["cleric"],
	source: ["MMSR", 0],
	level: 5,
	school: "Conj",
	time: "1 a",
	range: "5 ft",
	components: "V,S,M\u0192",
	compMaterial: "A mace worth at least 5 gp",
	duration: "Instantaneous",
	description: "Two melee spell attacks, 1d6+4 bldg. + 4d8 rad. dmg on hit",
	descriptionFull: "You toss a mace up into the air and call a celestial for momentary service. Choose a creature within range. The image of a deva flickers into existence long enough to take hold of the mace, attempt to strike the creature, then depart. Make two melee spell attacks against the target. On a hit, the target takes 1d6 + 4 bludgeoning + 4d8 radiant damage. You then catch the mace.",
};

SpellsList["balors onslaught"] = {
	name: "Balor's Onslaught",
	classes: ["warlock", "wizard"],
	source: ["MMSR", 0],
	level: 4,
	school: "Conj",
	time: "1 a",
	range: "30 ft",
	components: "V,S,M\u0192",
	compMaterial: "A longsword worth at least 15gp and a whip worth at least 2 gp",
	duration: "Instantaneous",
	save: "Str",
	description: "Two melee spell attacks, 2d6+8 slash + 3d6 fire, second attack 3d8 + 8 slash + 3d8 lightning",
	descriptionFull: "The incarnation of fire and ash, the visage of a balor, appears behind you. You hold up the handle of the Iongsword and whip for it to take, which magnify in its hands. Choose a creature you can see within range. Make two melee spell attacks against the target.\n  If the first hits, the target takes 2d6+8 slashing damage + 3d6 fire damage, and the target must succeed on a Strength saving throw or you can pull it up to 25 ft closer to you. If the target succeeds or the first attack misses, the balor's visage moves closer to attack again, using the longsword.\n  If the second hits, the target takes 3d8+8 slashing damage + 3d8 lightning damage. If this hit is a critical hit, you roll triple the damage dice, instead of double.\n  You then catch the weapons, tossed back to you.",
};

SpellsList["conjure invisible stalker"] = {
	name: "Conjure Invisible Stalker",
	classes: ["warlock", "wizard"],
	source: ["MMSR", 0],
	level: 7,
	school: "Conj",
	time: "1 m",
	range: "10 ft",
	components: "V,S,M",
	compMaterial: "Fog in a bottle",
	duration: "Instantaneous",
	description: "Summon invisible air elemental to hunt a creature down or retrieve an object",
	descriptionFull: "You conjure and bind an air elemental to your will by the casting of this spell, and it appears within range. It is invisible, but you can see it. The invisible stalker (Monster Manual 192) must obey the letter of your commands, but isn't always an enthusiastic pawn. If you issue any order to it other than to hunt down a creature or retrieve an object, the spell ends. Between commands, the invisible stalker stays at your side, but won't necessarily proactively defend you unless you order it to hunt a creature down.\n  The invisible stalker returns to its plane when it is reduced to 0 hitpoints, when the spell ends, if you cast this spell again, or if you die and it has no tasks remaining.",
};

SpellList["dogmatic edict"] = {
	name: "Dogmatic Edict",
	classes: ["bard", "wizard"],
	source: ["MMSR", 0],
	level: 5,
	school: "Evoc",
	time: "1 a",
	range: "60 ft",
	components: "V",
	duration: "Instantaneous",
	save: "Cha",
	description: "Four 15 ft lines from point in range; 40 force dmg on fail, 20 on success",
	descriptionFull: "You utter an edict of Law against the chaotic. Choose one point you can see within range. Four 15 ft long lines stretch out from that point facing in the exact cardinal directions. Each creature in a line must make a Charisma saving throw. A creature takes 40 force damage on a failed save, or 20 on a success.\n  Constructs of Law, such as inevitables and those with the Axiomatic Mind feature, are immune to the damage of this spell.",
};

SpellList["transposition"] = {
	name: "Transposition",
	classes: ["wizard"],
	source: ["MMSR", 0],
	level: 2,
	school: "Conj",
	time: "1 a",
	range: "30 ft",
	components: "V,S,M",
	compMaterial: "a folded piece of paper",
	duration: "Instantaneous",
	save: "Cha",
	description: "Two Large or smaller creatures swap on failed save",
	descriptionFull: "You warp the space of two Large or smaller creatures or objects you can see within range. A creature must make a Charisma saving throw, which it can choose to fail. On a failure, the two targets swap places. The spell fails if both creatures are unwilling and one or both succeed, and if a creature would be teleported into a space smaller than it.",
};

SpellList["lions maw"] = {
	name: "Lion's Maw",
	classes: ["druid", "ranger"],
	source: ["MMSR", 0],
	level: 1,
	school: "Conj",
	time: "1 a",
	range: "Touch",
	components: "V,S",
	duration: "Instantaneous",
	description: "Spell attack for 2d8+1d8/SL Piercing dmg and target is restrained until start of its next turn",
	descriptionFull: "You attempt to bite a creature, with the ethereal visage of a great lion appearing over you. Make a melee spell attack against a creature you can reach. On a hit, a target takes 2d8 piercing damage and is restrained until the start of its next turn.\n  " + toUni("At Higher Levels") +": When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.",
};

SpellList["planar hounds"] = {
	name: "Planar Hounds",
	classes: ["warlock", "wizard"],
	source: ["MMSR", 0],
	level: 4,
	school: "Conj",
	time: "1 a",
	range: "60 ft",
	components: "V",
	compMaterial: "",
	duration: "Instantaneous",
	save: "Str",
	description: "30 ft cube; 7d6+1d6/SL Cold, Fire, Necrotic, Psychic, or Radiant dmg and knocked prone; save halves, no prone; target chooses Str or Dex save",
	descriptionFull: "You utter a command over canines and summon a pack aof planar hounds, which rage through a 30 ft cube within range before returning whence they came. Each creature in the area must make a Strength or Dexterity saving throw (target's choice). On a failed save, a creature takes 7d6 damage and is knocked prone, or it takes half as much damage on a success and itsn't knocked prone. You choose cold, fire, necrotic, psychic, or radiant damage.\n  " + toUni("At Higher Levels") + ": When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d6 for each slot level above 4th.",
};

SpellList["magic splinter"] = {
	name: "Magic Splinter",
	classes: ["sorcerer", "warlock", "wizard"],
	source: ["MMSR", 0],
	level: 0,
	school: "Evoc",
	time: "1 a",
	range: "30 ft",
	components: "V,S,M",
	compMaterial: "a piece of wood",
	duration: "Instantaneous",
	save: "Dex",
	description: "All in 5 ft of point save or 1d4 Piercing dmg; +1d4 at levels 5, 11, 17",
	descriptionFull: "You hurl a shard of magic that fractures into many splinters. Choose a point you can see within range. Each creature within 5 ft of that point must succeed on a Dexterity saving throw or take 1d4 piercing damage.\n  This spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4).",
};

SpellList["pen"] = {
	name: "Pen",
	classes: ["bard", "wizard"],
	source: ["MMSR", 0],
	level: 0,
	school: "Trans",
	time: "1 a",
	range: "Touch",
	components: "S,M\u2020",
	compMaterial: "a liquid, of which some is consumed by this spell",
	duration: "Instantaneous",
	save: "Dex",
	description: "Instantly write on object or willing creature with held liquid; one side + one side at levels 5, 11, 17",
	descriptionFull: "You transform the liquid (most often ink) you are holding in a hand to an object or willing creature you touch. You instantly write any amount of desired text on the object or creature, which consumes as much liquid as if it had been written with a quill. It can only write onto one side of any object or creature per casting, such as a single page. If you attempt to write more than you have ink to support, the text stops when it runs out.\n  The spell fails if it is cast onto an object worn or carried by a creature other than you, unless the carrier or wearer is willing.\n  At 5th level, you can write on two sides of any object or creature per casting. You can write on three sides at 11th level, and four at 17th.",
};

SpellList["double breath"] = {
	name: "Double Breath",
	classes: ["sorcerer", "wizard"],
	source: ["MMSR", 0],
	level: 5,
	school: "Trans",
	time: "1 a",
	range: "120-ft line",
	components: "V,S,M\u0192",
	compMaterial: "two dragon scales worth 100 gp each",
	duration: "Instantaneous",
	save: "Dex",
	description: "All in each line 10d6+1d6/SL Acid, Cold, Fire, Lighning, or Poison dmg; save halves; if creature in both lines, takes one line",
	descriptionFull: "You hold a dragon scale in each hand and your hands momentarily turn into dragon heads spouting breath. Two breaths shoot out from you, each 5 ft wide and 120 ft long in directions you choose. Choose acid, cold, fire, lightning, or poison.  Each creature in a line must make a Dexterity saving throw. A creature takes 10d6 damage of the chosen type on a failed save, or half as much damage on a successful one.\n  If a creature is within both of the spell's lines, it takes damage as if it were in one line.\n  " + toUni("At Higher Levels") + ": When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d6 for each spell level above 5th.",
};

SpellList["fiery leap"] = {
	name: "Fiery Leap",
	classes: ["sorcerer", "warlock", "wizard"],
	source: ["MMSR", 0],
	level: 2,
	school: "Trans",
	time: "1 a",
	range: "30 ft",
	components: "S,M",
	compMaterial: "a ring with flames inscribed",
	duration: "Instantaneous",
	save: "Dex",
	description: "All in your path 3d6+1d6/SL Fire dmg; save halved; no opportunity attk. on you",
	descriptionFull: "You choose an unoccupied space you can see within range to leap toward, stringing fire behind you and beside you. Each creature other than you within 5 ft of the path between your space and the one you leap toward must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much on a success. You don't provoke attacks of opportunity when leaping this way.\n  " + toUni("At Higher Levels") + ": When you cast this spell using a spell slot of 3rd level or higher, the fire damage increases by 1d6 for each slot level above 2nd.",
};