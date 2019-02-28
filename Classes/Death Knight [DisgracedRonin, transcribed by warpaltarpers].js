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

    },

    "rune magic" {

    },

    "fighting style" {

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
