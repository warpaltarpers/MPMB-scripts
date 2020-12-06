var iFileName = "Angel [transcribed by warpaltarpers].js";
RequiredSheetVersion(12.999);

ClassList["angel"] = {
  regExpSearch: /^(?=.*angel).*$/i,
  name: "Angel",
  source: null,
  
  primaryAbility: null,
  prereqs: null,
  die: 10,
  improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
  saves: ["Cha", "Wis"],
  skills: ["\n\n" + toUni("Angel") + ": Choose two from Animal Handling, Arcana, History, Insight, Intimidation, Medicine, Perception, Persuasion, or Religion.", null],
  
  armor: [[true, true, false, true], [null]],
  weapons: [[true, false, false], [null]],
  equipment: "Angel starting equipment:\n \u2022 a simple melee weapon and a shield -or- a simple ranged weapon and 20 pieces of ammunition -or- two simple melee weapons;\n \u2022 a priest's pack -or- an explorer's pack;\n \u2022 chain mail and a holy symbol;\n \u2022 healer's kit;\n \u2022 If you are using starting wealth, you have 4d4 x 10 gp in funds.",
  subclasses: ["Angelic Domain", ["protector", "avenger", "the reaper"]],
  attacks: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  
  abilitySave: 5,
  spellcastingFactor: 2,
  spellcastingKnown: {
    prepared: true,
  },
  spellcastingList: {
    class: "cleric",
    level: [1, 5]
  },
  
  features: {
    "immortal nature": {
      name: "Immortal Nature",
      source: null,
      minLevel: 1,
      description: "\n  You are an immortal, celestial being. Your creature type is now celestial and you no longer age. You don't require food, water or sleep.\nYou do however need to rest daily to retain this celestial strength through a prayer of contemplation with your deity. During a long rest, you need to spend at least 4 hours praying to your deity. You don't need to rest for the remainder of the rest, but if you do anything more complex or demanding than light activity you suffer all the effects of not completing a long rest.",
    },
    
    "wings": {
      name: "Wings",
      source: null,
      minLevel: 1,
      description: "\n  You grow a pair of wings as part of becoming an angel. These wings are new and as such will take some getting used to and proper training to be able to function correctly. When you are subject to fall damage, you can reduce the damage by a number equal to 5 times your angel level. These wings are incorporeal and translucent, emitting a faint glow.\nAt 6th level, you start to learn how to fly with these wings. You gain a flying movement speed equal to half your walking movement speed, but you need to end this movement on land, or else you will fall. You can take the Dash action to move the double of this distance.\nAt 14th level, your movement speed with your wings become equal to your walking movement speed, and you no longer need to end your movement on the ground. If you have any form of racial flying movement speed, you add 10 feet to to your racial movement.",
    },
    
    "subclassfeature1": {
      name: "Angelic Domain",
      source: null,
      minLevel: 1,
      description: "\n  Starting at 1st level you choose an Angelic domain pushing you to follow a core trait from the following: Protector, Avenger, The Reaper. Your Angelic domain grants you benefits at 1st level, and again at 3rd, 7th, 14th and 17th levels.",
    },
    
    "glowing radiance": {
      name: "Glowing Radiance",
      source: null,
      minLevel: 2,
      description: "\n  Starting at 2nd level, your unnaturally holy form gives off a slight glow that you can ignite and extinguish as a bonus action on your turn. This radiance glows a 10 foot aura of bright light with an additional 10 foot aura of dim light beyond it.\nYour glowing radiance can glow even through magical darkness. Additionally, when the bright portion of your light contacts magical darkness, you can use your action to try to dispel it. You must make an ability check using your spellcasting ability, and, on a success, the spell causing the magical darkness is dispelled. The DC equals 10 + the spell’s level.",
    },
    
    "voice of authority": {
      name: "Voice of Authority",
      source: null,
      minLevel: 6,
      description: "\n  An angel's voice brings about many different effects, some soothing and some commanding. At 6th level, you gain proficiency in Persuasion and Intimidation. If you already have proficiency in one or both of these skills you can add double your proficiency bonus to any check made with these skills.\nAdditionally, you have advantage on any Charisma based check to interact with good-aligned creatures.",
      skills: ["Persuasion", "Intimidation"],
      skillstxt : "\n\n" + toUni("Voice of Authority") + ": Persuasion and Intimidation.",
    },
    
    "angelic weapons": {
      name: "Angelic Weapons",
      source: null,
      minLevel: 6,
      description: "\n  Your power of will and very essence empowers the weapons you wield. Starting at 6th level, all weapon attacks you make are now considered magical for the purposes of overcoming resistances and immunities to nonmagical piercing, slashing, and bludgeoning damage regardless of whether or not the weapon itself is magical.\nAdditionally, at 14th level, your weapon attacks now deal additional radiant damage equal to your Wisdom modifier."
    },
    
    "healing touch": {
      
    },
    
    "magic resistance": {
      
    },
    
    "divine awareness": {
      
    },
    
    "supernatural senses": {
      
    },
    
    "my last testament": {
      
    },
    
    "foresight": {
      
    },
    
    "deity's favor": {
      
    }
  }
};

// Protector Subclass
AddSubClass(
  "angel",
  "protector",
  {
    regExpSearch: /^(?=.*protector).*$/i,
    subname: "Protector",
    source: null,
    features: {
      "subclassfeature1Pro": {
        name: "Mending Touch",
        source: null,
        minLevel: 1,
        description: "\n  After choosing this discipline at 1st level you learn the spell spare the dying, and you can cast it as a bonus action on your turn. When you cast this spell, you heal 1 hit point of a creature the first time you cast this on it.\nAfter restoring hit points of a creature in that manner, you can't do it again until that creature completes a short or a long rest.",
        usages: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        spellcastingBonus: {
          name: "Mending Touch",
          spells: ["spare the dying"],
          selection: ["spare the dying"],
          // TODO: Cast as bonus action?
        }
      },
    },
  }
);