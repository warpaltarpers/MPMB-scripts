var iFileName = "Wrestler [Jordan Allen, transcribed by warpaltarpers].js";
RequiredSheetVersion(12.999);

SourceList["DG:WR"] = {
    name: "Dungeon Master\'s Guild: Wrestler",
    abbreviation: "DG:WR",
    url: "https://www.dmsguild.com/product/267850/The-Wrestler-A-Grapple-Based-Class",
};

// Wrestler Class
ClassList["wrestler"] = {
  regExpSearch: /^(?=.*wrestler).*$/i,
  name: "Wrestler",
  source: ["DG:WR", 1],

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
      source: ["DG:WR", 3],
      minlevel: 1,
      description: "\n  " + "Starting at 1st level, while you are not wearing any armor or using a shield, your Armor Class equals 10 + your Charisma modifier + your Constitution modifier.",
      // TODO: Set AC based on feature
    },

    "wrestling": {
      name: "Wrestling",
      source: ["DG:WR", 3],
      minlevel: 1,
      description: "\n  " + "At 1st level, you gain the following benefits while you have a free hand.\n  You can roll 1d4 in place of the normal damage of your unarmed strike or while you are using an improvised weapon. This die changes as you gain Wrestler levels, as shown in the Unarmed Strike column of the Wrestler table.\n  You are considered one size larger when determining your size for grappling, shoving creatures, or your carrying weight. This feature does not stack with racial features such as Powerful Build.\n  You can use your bonus action to make an unarmed strike, applicable signature move, or use an improvised weapon strike against a creature you are grappling.",
    },

    "signature moves": {
      name: "Signature Moves",
      source: ["DG:WR", 3],
      minlevel: 2,
      description: "\n  " + "Starting at 2nd level, you gain the ability to perform signature moves. You have a number of signature points determined by your level as showin in the Signature Points column of the Wrestler Table.\n You can spend these points to perform a signature move. You learn more signature moves as you level as detailed in the Learned Signature Moves column of the Wrestler Table. The signature moves are detailed at the end of the class page. You regain all Signature Move points wheny ou finish a short or long rest. When you level up, you can unlearn 1 Signature Move and learn a new one.\n Signature move DC = 8 + your proficiency bonus + your Charisma modifier",
      // TODO: Figure out how to work Signature Moves into sheet; mix of Ki points a la Monk + spellsheet??
    },

    "subclassfeature3": {
      name: "Title Belt",
      source: ["DG:WR", 3],
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
    source: ["DG:WR", 6],
    features: {
      "subclassfeature3": {
        name: "Brutal Grapple",
        source: ["DG:WR", 6],
        minlevel: 3,
        description: "\n  " + "Starting at 3rd level, when you make a grapple attempt, you can choose for the grapple to have the following benefits:\n You gain bonus damage to attack rolls against the grappled creature. The bonus equals your Charisma modifier.\n The grappled creature has disadvantage against attempts to escape the Brutal Grapple.\n You have the advantage on the Brutal Grapple attempt.\n You can't use this feature again until you finish a short or long rest."
      },

      "subclassfeature6": {
        name: "Inescapable",
        source: ["DG:WR", 6],
        minlevel: 6,
        description: "\n  " + "Starting at 6th level, you add double your proficiency bonus to grapple checks."
      },

      "subclassfeature10": {
        name: "Finishing Move: Powerhouse Slam",
        source: ["DG:WR", 6],
        minlevel: 10,
        description: "\n  " + "Starting at 10th level, you can choose to spend 5 additional Signature Move points when you perform a Signature Move against a grappled creature. If that Signature Move succeeds, up to ten other creatures of your choice within 60 feet of you that can see you must roll Wisdom saving throws against your Signature Move DC or become frightened for 1 minute. Creatures can repeat this saving throw at the end of their turn.\n You can't use this feature again until you finish a long rest."
      },

      "subclassfeature14": {
        name: "Indisputable Strength",
        source: ["DG:WR", 6],
        minlevel: 14,
        description: "\n  " + "Starting at 14th level, when you use a Signature Move that deals damage, you can spend additional Signature Move Points to deal an additional 1d6 bludgeoning damage per point spent."
      },
    }
  }
);

// Title Belt - High-Flier Belt
AddSubClass(
  "wrestler",
  "high-flier belt",
  {
    regExpSearch: /^(?=.*high)(?=.*flier).*$/i,
    subname: "High-Flier Belt",
    source: ["DG:WR", 6],
    features: {
      "subclassfeature3": {
        name: "Unarmored Movement",
        source: ["DG:WR", 6],
        minlevel: 3,
        description: "\n  " + "Starting at 3rd level your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases by 5 feet when you reach 6th leel, and again at 10th and 14th levels."
        // TODO: Add eval to change these attributes
      },

      "subclassfeature3": { // TODO: figure out what to name this
        name: "Top Rope Specialty",
        source: ["DG:WR", 6],
        minlevel: 3,
        description: "\n  " + "Starting at 3rd level, as a reaction, when you start falling, you take half falling damage or no falling damage if you land on another creature."
      },

      "subclassfeature6": {
        name: "Separate",
        source: ["DG:WR", 6],
        minlevel: 6,
        description: "\n  " + "Starting at 6th level, while you have a grappled creature, you do not provoke attacks of opportunity."
      },

      "subclassfeature10": {
        name: "Finishing Move: Top Rope Attack",
        source: ["DG:WR", 6],
        minlevel: 10,
        description: "\n  " + "Starting at 10th level, you can choose to spend 4 Signature Move points when you perform a Signature Move against a creature directly after moving or falling. If that Signature Move succeeds, you deal an additional 1d6 bludgeoning damage for every 10ft you move during this Signature Move.\n You can't use this feature again until you finish a long rest."
      },

      "subclassfeature14": {
        name: "Indisputable Acrobatics",
        source: ["DG:WR", 6],
        minlevel: 14,
        description: "\n  " + "Starting at 14th level, you gain a climb and swim speed equal to your movement speed and your distance when you jump is doubled.\n Lastly, when falling, as a reaction, you cause yourself to take no falling damage whether or not you land on a creature."
        // TODO: Change climb and swim speeds
      },
    }
  }
);

// Title Belt - Technician Belt
AddSubClass(
  "wrestler",
  "technician belt",
  {
    regExpSearch: /^(?=.*technician).*$/i,
    subname: "Technician Belt",
    source: ["DG:WR", 7],
    // TODO: Add pre-req that character must know Pin signature move
    features: {
      "subclassfeature3": {
        name: "Safety Pin",
        source: ["DG:WR", 7],
        minlevel: 3,
        description: "\n  " + "Starting at level 3, when you have a creature in a pin through the Pin Signature Move, creatures do not have advantage on attacks against you."
      },

      "subclassfeature6": {
        name: "Painful Hold",
        source: ["DG:WR", 7],
        minlevel: 6,
        description: "\n  " + "Starting at 6th level, while you are pinning a creature, you deal an additional 1d6 damage with attack rolls against a pinned creature."
      },

      "subclassfeature10": {
        name: "Finishing Move: Deathlock",
        source: ["DG:WR", 7],
        minlevel: 10,
        description: "\n  " + "Starting at 10th level, while you are pinning a creature, you can spend 5 Signature Move points to force the pinned creature to make a Strength saving through against your signature move DC. If the creature fails, you snap one of the creature's joints, paralyzing it and dealing 2d10 bludgeoning damage. The paralysis ends when a Lesser Restoration spell is used on it or when that creature finishes a long rest."
      },

      "subclassfeature14": {
        name: "Indisputable Technician",
        source: ["DG:WR", 7],
        minlevel: 14,
        description: "\n  " + "Starting at 14th level, creatures have disadvantage against escaping your grapples."
      },
    }
  }
);

// Title Belt - Spiritualist Belt
AddSubClass(
  "wrestler",
  "spiritualist belt",
  {
    regExpSearch: /^(?=.*spiritualist).*$/i,
    subname: "Spiritualist Belt",
    source: ["DG:WR", 8],

    abilitySave: 6,
    spellcastingFactor: spiritualistwrestler1,
    spellcastingTable: spiritualistwrestlerSpellTable,
    spellcastingKnown: {
      cantrips: [0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      spells: [0, 0, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 13],
    },
    spellcastingList: {
      class: "wizard",
      level: [0, 4],
    },
    // TODO: Figure out if spell school restrictions from file can be implemented

    features: {
      "subclassfeature3": {
        name: "Magical Wrestling",
        source: ["DG:WR", 8],
        minlevel: 3,
        description: "\n  " + "Starting at 3rd level, your grapples are now magical for the purpose of grappling incorporeal creatures such as ghosts and creatures immune to the grapples status effect."
      },

      "subclassfeature6": {
        name: "Spell Grapple",
        source: ["DG:WR", 8],
        minlevel: 6,
        description: "\n  " + "At 6th level, you can use your action to cast a cantrip and make a grapple attempt."
      },

      "subclassfeature10": {
        name: "Finishing Move: Arcane Piledriver",
        source: ["DG:WR", 8],
        minlevel: 10,
        description: "\n  " + "Starting at 10th level, while you are grappling a creature, as an action or bonus action, you can expend 6 Signature Move points to perform an arcane piledriver. As part of this action, cast a spell (you do not expend a spell slot). Yourself and the grappled creature are teleported in the air 10ft per the level of the spell in a piledriver position. If you are unable to teleport this far up, you instead teleport to the highest point. When you and the target creature hit the ground due to falling, the grappled creature is dealt 1d6 bludgeoning damage per 10ft fallen due to falling damage, additionally, when you hit the ground, the spell you casted triggers, if the spell or the falling damage would deal to you. it instead deals to none.\n At the end of the piledriver, you are unable to take anymore actions or bonus actions until your next turn. You cannot use this feature again until you finish a long rest."
      },

      "subclassfeature14": {
        name: "Indisputable Spiritualist",
        source: ["DG:WR", 8],
        minlevel: 14,
        description: "\n  " + "Starting at 14th level, you can make a grapple, signature move, or unarmed strike as a bonus action whenever you use your action to cast a spell."
      },
    }
  }
);

spiritualistwrestlerSpellTable = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 0
	[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 1
	[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 2
	[2, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 3
	[3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 4
	[3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 5
	[3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 6
	[4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 7
	[4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 8
	[4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 9
	[4, 3, 0, 0, 0, 0, 0, 0, 0], //lvl10
	[4, 3, 0, 0, 0, 0, 0, 0, 0], //lvl11
	[4, 3, 0, 0, 0, 0, 0, 0, 0], //lvl12
	[4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl13
	[4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl14
	[4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl15
	[4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl16
	[4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl17
	[4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl18
	[4, 3, 3, 1, 0, 0, 0, 0, 0], //lvl19
	[4, 3, 3, 1, 0, 0, 0, 0, 0], //lvl20
];