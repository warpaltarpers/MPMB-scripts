var iFileName = "Death Knight [DisgracedRonin, transcribed by warpaltarpers].js";
RequiredSheetVersion(12.999);
// TODO: find source, fix nulls, find multiclass info, make SpellTable, make Spells, fill out features

// Death Knight Class
ClassList["death knight"] = {
  regExpSearch: /^(?=.*death)(?=.*knight).*$/i,
  name: "Death Knight",
  source: null,

  primaryAbility: null,
  prereqs: null,
  die: 10,
  improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
  saves: ["Con", "Cha"],
  skills: ["\n\n" + toUni("Death Knight") + ": Choose two from Acrobatics, Animal Handling, Athletics, Deception, Intimidation, and Religion.", null],

  armor: [[true, true, true, true],[null]],
  weapons: [[true, true, false], [null]],
  equipment: "Death Knight starting equipment:\n \u2022 a two-handed martial melee weapon -or- two one-handed martial melee weapons;\n \u2022 a dungeoneer’s pack -or- an explorer’s pack;\n \u2022 Chain mail",
  subclasses: ["Death Aspect", ["blood", "frost", "unholy"]],
  attacks: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],

  abilitySave: 6,
  spellcastingFactor: null,
  spellcastingTable: null,
  spellcastingKnown: {
    spells: [2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8],
  },
  spellcastingExtra: ["armor of agathys", "bane", "command", "detect evil and good", "detect magic", "false life", "enthrall", "ray of enfeeblement", "sleet storm", "dispel magic", "fear", "feign death", "vampiric touch", "banishment", "blight", "confusion", "dominate beast", "fire shield", "freedom of movement", "ice storm", "phantasmal killer", "stoneskin", "insect plague", "dominate person", "cone of cold", "contagion", "antilife shell"],

  features: {
    "rune weapon": {
      name: "Rune Weapon",
      source: null,
      minLevel: 1,
      description: "\n  All death knights learn the art of rune carving, allowing them to carve mystic runes into their weapons. Carving a rune into a weapon takes one hour and costs 50gp. The cost represents material components that are required in the carving.\nOnce a rune has been carved, you can fill it with power over the course of an hour, which you can do during a short rest. You must be touching the weapon that the rune is carved into during this time, and you can only fill one rune with power at a time. Additionally, all of your runes are filled with power when you finish a long rest.\nOnce a rune has been filled with power, you can then later use that rune to cast spells. In addition, any weapon with a power-filled rune carved into it counts as a magic weapon for the purposes of overcoming resistance and immunity to non-magical attacks and damage.",
    },

    "rune magic" {

    },

    "fighting style" {
      name: "Fighting Style",
      source: null,
      minLevel: 2,
      description: "\n  At 2nd level, you adopt a style of fighting as your specialty. Choose one of the following options. You can’t take a Fighting Style option more than once, even if you later get to choose again.",
      choices: ["Defense", "Dueling", "Great Weapon Fighting", "Two-Weapon Fighting"],
      "defense": {
        name: "Defense",
        description: "\n  While you are wearing armor, you gain a +1 bonus to AC.",
        // add calc change
      },
    },

    "death aspect" {

    },

    "horn of winter" {

    },

    "forceful deflection" {

    },

    "runic empowerment" {

    },

    "master of death" {

    },
  },
};
