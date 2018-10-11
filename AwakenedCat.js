/*	-WHAT IS THIS?-
	The script featured here is an explanation of how to make your own custom addition to MPMB's D&D 5e Character Tools.
	To add your own content to the Character Sheet, use the syntax below and save it in a file. You can then import this file directly to the sheet using the "Import" button and "Import/Export" bookmark.
	There you can either import the file as a whole or just copy the text into a dialogue.

	-KEEP IN MIND-
	Note that you can add as many custom codes as you want, either by importing consecutive files or pasting the scripts into the dialogue.
	It is recommended to enter the code in a freshly downloaded or reset sheet before adding any other information so that there won't be any conflicts.
*/

/*	-INFORMATION-
	Subject:	(sub)race
	Effect:		This is the syntax for adding a new (sub)race to the sheet.
				Note that you will need to define a race using this syntax once for every sub-race (i.e. there is a separate entry for High Elf, Wood Elf, and Dark Elf)
				You will use this for a race that doesn't have a subrace, like Dragonborn and also for a subrace of a race, like Hill Dwarf and Mountain Dwarf.
				You do not make a separate entry for the parent of a subrace. So there is no Dwarf or Elf entry!
				For races that have variants, like the human, you can define a variant using the RaceSubList. Any variant defined like that will only be selectable through the "Racial Options" button
	Sheet:		v13.00.00 (2018-??-??) [identical to v12.999 syntax, except v12.999 uses 'borrow' for the burrow speed]
*/

var iFileName = "AwakenedCat.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned

RaceList["awakened cat"] = { //Object name; Note the use of only lower case! Also note the absence of the word "var" and the use of brackets []

	regExpSearch : /^(?=.*awakened)(?=.*cat).*$/i, //required; regular expression of what to look for (i.e. now it looks for any entry that has both the words "something" and "catlike" in it, disregarding capitalization). If this looks to complicated, just write: /something catlike/i

	name : "Awakened Cat", //required; the name to use for the race

	sortname : "Cat, Awakened", //optional; this is the name used to fill the drop-down boxes. If you don't include this, the 'name' will used instead

	source : ["HB", 0], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

	plural : "Awakened Cats", //required; the name to use for the race when the plural form is used

	size : 4, //required;  the size of the race (Gargantuan = 0, Huge = 1, Large = 2, Medium = 3, Small = 4, Tiny = 5)

	speed : { //required; This sets a value for one or more speed modes, and/or a value to be added to a specific speed mode or to all speed modes // the attributes of this object can be "walk", "burrow", "climb", "fly", "swim", and "allModes"

		// all of the following attributes are optional and you can add more ("burrow" isn't part of this example!)

		walk : { spd : 35, enc : 25 }, // the objects "walk", "burrow", "climb", "fly", "swim" are all the same, they are an object with two attributes, 'spd' for the speed in feet, and 'enc' for the encumbered speed in feet.

		climb : { spd : 20, enc : 0 }, // instead of numbers, you can also have modifiers. Modifiers are a string, starting with a mathematical operator, followed by a number (e.g. "-10", "+20"). // a value that is zero is ignored

		swim : { spd : 15, enc : 0 }, // if you include the word "fixed" together with a number, the movement mode will be that number, without any modifiers from other sources (like the Monk's speed bonus). However, if another entry that isn't 'fixed' does end up with a higher total while including any modifiers, that speed is used instead
	},

/* SYNTAX CHANGE v12.998 >> old syntax for 'tools' and 'languages' are no longer supported!! */
	weapons : ["claws"], //optional; an array of weapons that are added to the attacks section; This will be the name of the weapon how it appears in the attack section, not necessarily the object name in the WeaponsList

	addarmor : "Quadreped Frame", //optional; a string of the name of the armour that is literally put in the Armor Description field when the class feature is applicable, and removed if not

	vision : [["Darkvision", 60]], //optional; An array of arrays that each have a length of 2; This adds the first value of each array to the Senses field. The second value is the range in feet. If no range is needed, put a 0 there. You can also add a modifier like "+30" or "*2" to have the appropriate calculation done with the range of sense

	skills : ["Acrobatics"], //optional; Skill proficiencies the race has. This line can be deleted if you don't have anything to put here. If the race doesn't give fixed proficiencies, but instead gives a choice, delete this line and use the line below, "skillstxt"

	age : " have no longer lifespans than any normal cat, unless their lives are magically extended, and can live up to twenty years.", //optional; the age tooltip/mouseover text (will be displayed in combination with the "plural" entry)

	height : " can grow up to 20 in long", //optional; the height tooltip/mouseover text (will be displayed in combination with the "plural" entry)

	heightMetric : " can grow up to 50.8 cm long", //optional; the height tooltip/mouseover text (will be displayed in combination with the "plural" entry), when the metric system is chosen

	improvements : "Awakened Cat: +2 Dexterity, +1 Wisdom;", //required; the text that is displayed when listing all the ability score improvements

	scores : [0, 2, 0, 0, 1, 0], //required; the ability score improvements as used by the Ability Score dialog. The syntax is: [Str, Dex, Con, Int, Wis, Cha]

	trait : "Awakened Cat (+2 Dexterity, +1 Wisdom)\nQuadreped Frame:\n   While not wearing armor, your Armor Class is equal to 11 + your character\'s Dexterity modifier. Additionally, armor costs double to be made for you, due to your unusual body shape.\nCreatures of Magic:\n   An Awakened Cat is a being created and sustained in part by a magic gem called a soulstone. Any effect that suppresses magic returns an Awakened Cat to its former state and temporarily strips away their conscious thought. This can be averted with a successful Charisma saving throw of DC 10 + 1/2 your level. Should they leave the area of effect or its duration expire, they awaken with no memory of the time while under the antimagic\'s infuence. Additionally, due to the magic of the soulstone, an Awakened Cat can use Mage Hand as per the spell, with the following effects:\n   You may use this spell to perform finer functions that normally require hands, such as lifting a mug and taking a drink to writing a letter.\n   You also may use Mage Hand to wield a one-handed weapon. However, you cannot use this ability to extend the range of your weapon attack beyond five feet of your person. Additionally, two-handed and heavy weapons are too bulky and fail to be lifted if an Awakened Cat attempts to manipulate them with this spell, as well as any item weighing heavier than ten pounds.",

};
