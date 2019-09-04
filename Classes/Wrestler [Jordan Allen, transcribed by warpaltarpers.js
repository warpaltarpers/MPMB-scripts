var iFileName = "Wrestler [Jordan Allen, transcribed by warpaltarpers].js";
RequiredSheetVersion(12.999);

SourceList["DMG:WR"] = {
    name: "Dungeon Master\'s Guild: Wrestler",
    abbreviation: "DMG:WR",
    url: "https://www.dmsguild.com/product/267850/The-Wrestler-A-Grapple-Based-Class",
};

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
      name: "Unarmored Defense",
      source: ["DMG:WR", 3],
      minlevel: 1,
      description: "\n  " + "Starting at 1st level, while you are not wearing any armor or using a shield, your Armor Class equals 10 + your Charisma modifier + your Constitution modifier.",
      // TODO: Set AC based on feature
    },

    "wrestling": {
      name: "Wrestling",
      source: ["DMG:WR", 3],
      minlevel: 1,
      description: "\n  " + "At 1st level, you gain the following benefits while you have a free hand.\n  You can roll 1d4 in place of the normal damage of your unarmed strike or while you are using an improvised weapon. This die changes as you gain Wrestler levels, as shown in the Unarmed Strike column of the Wrestler table.\n  You are considered one size larger when determining your size for grappling, shoving creatures, or your carrying weight. This feature does not stack with racial features such as Powerful Build.\n  You can use your bonus action to make an unarmed strike, applicable signature move, or use an improvised weapon strike against a creature you are grappling.",
    },

    "signature moves": {
      name: "Signature Moves",
      source: ["DMG:WR", 3],
      minlevel: 2,
      description: "\n  " + "Starting at 2nd level, you gain the ability to perform signature moves. You have a number of signature points determined by your level as showin in the Signature Points column of the Wrestler Table.\n You can spend these points to perform a signature move. You learn more signature moves as you level as detailed in the Learned Signature Moves column of the Wrestler Table. The signature moves are detailed at the end of the class page. You regain all Signature Move points wheny ou finish a short or long rest. When you level up, you can unlearn 1 Signature Move and learn a new one.\n Signature move DC = 8 + your proficiency bonus + your Charisma modifier",
      // TODO: Figure out how to work Signature Moves into sheet; mix of Ki points a la Monk + spellsheet??
    },

    "subclassfeature3": {
      name: "Title Belt",
      source: ["DMG:WR", 3],
      minlevel: 3,
      description: "\n  " + "At 3rd level, you don a Title Belt that represents your style of fighting: Powerhouse Belt, High-Flier Belt, Technician Belt, or Spiritualist Belt. All belts are detailed at the end of the class. Your choice grants you features at 3rd level, and again at 6th, 10th, and 14th levels.",

    },

    "grappler\'s stride": {

    },

    "improved grapple": {

    },

    "re-adjust": {

    },

    "the bell rings": {

    },

    "ready to rumble": {

    },

    "applauding aura": {

    },

    "master wrestler": {

    },

    "undisputed champion": {

    },
  },
};

// Title Belt - Powerhouse Belt
AddSubClass(
  "wrestler",
  "powerhouse belt",
  {
    regExpSearch: /^(?=.*powerhouse).*$/i,
    subname: "Powerhouse Belt",
    source: ["DMG:WR", 6],
    features: {
      "subclassfeature3": {
        name: "Brutal Grapple",
        source: ["DMG:WR", 6],
        minlevel: 3,
        description: "\n  " + "Starting at 3rd level, when you make a grapple attempt, you can choose for the grapple to have the following benefits:\n You gain bonus damage to attack rolls against the grappled creature. The bonus equals your Charisma modifier.\n The grappled creature has disadvantage against attempts to escape the Brutal Grapple.\n You have the advantage on the Brutal Grapple attempt.\n You can't use this feature again until you finish a short or long rest."
      },

      "subclassfeature6": {
        name: "Inescapable",
        source: ["DMG:WR", 6],
        minlevel: 6,
        description: "\n  " + "Starting at 6th level, you add a double your proficiency bonus to grapple checks."
      },

      "subclassfeature10": {
        name: "Finishing Move: Powerhouse Slam",
        source: ["DMG:WR", 6],
        minlevel: 10,
        description: "\n  " + "Starting at 10th level, you can choose to spend 5 additional Signature Move points when you perform a Signature Move against a grappled creature. If that Signature Move succeeds, up to ten other creatures of your choice within 60 feet of you that can see you must roll Wisdom saving throws against your Signature Move DC or become frightened for 1 minute. Creatures can repeat this saving throw at the end of their turn.\n You can't use this feature again until you finish a long rest."
      },

      "subclassfeature14": {
        name: "Indisputable Strength",
        source: ["DMG:WR", 6],
        minlevel: 14,
        description: "\n  " + "Starting at 14th level, when you use a Signature Move that deals damage, you can spend additional Signature Move Points to deal an additional 1d6 Bludgeoning damage per point spent."
      },
    }
  }
);
