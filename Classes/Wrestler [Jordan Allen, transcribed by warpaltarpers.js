var iFileName = "Wrestler [Jordan Allen, transcribed by warpaltarpers].js";
RequiredSheetVersion(12.999);

SourceList["DMG:WR"] = {
    name: "Dungeon Master\'s Guild: Wrestler",
    abbreviation: "DMG:WR",
    url: "https://www.dmsguild.com/product/267850/The-Wrestler-A-Grapple-Based-Class",
}

// Wrestler Class
ClassList["wrestler"] = {
  regExpSearch: /^(?=.*wrestler).*$/i,
  name: "Wrestler",
  source: ["DMG:WR", 1],

  primaryAbility: "\n \u2022 Wrestler: Strength;",
  prereqs: "\n \u2022 Wrestler: Strength 13, Charisma 13;",
  die: 10,
  improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
  saves: ["Con", "Cha"],
  skills: ["\n\n" + toUni("Wrestler") + ": Choose two from Acrobatics, Athletics, Insight, Intimidation, Perception, Performance, or Persuasion.", null],

  armor: [[true, true, false, true],[null]],
  weapons: [[true, false, ["nets"]], [null]],
  equipment: "Wrestler starting equipment:\n \u2022 a net -or- any simple weapon;\n \u2022 an entertainer's pack -or- an explorer’s pack;\n \u2022 a costume;\n \u2022 four nets",
  subclasses: ["Title Belt", ["powerhouse", "high-flier", "technician", "spiritualist"]],
  attacks: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],

  features: {
    "unarmored defense": {
      
    },

    "wrestling" {

    },

    "signature moves" {
      
    },

    "title belt" {

    },

    "grappler\'s stride" {

    },

    "improved grapple" {

    },

    "re-adjust" {

    },

    "the bell rings" {

    },

    "ready to rumble" {

    },

    "applauding aura" {

    },

    "master wrestler" {

    },

    "undisputed champion" {

    },
  },
};
