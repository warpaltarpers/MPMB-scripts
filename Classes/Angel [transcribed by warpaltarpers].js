var iFileName = "Angel [transcribed by warpaltarpers].js";
RequiredSheetVersion(12.999);

// Angel Class
ClassList["angel"] = {
  // Info
  regExpSearch: /^(?=.*angel).*$/i,
  name: "Angel",
  source: ["HB", 0],
  
  // Class Stats
  primaryAbility: null,
  prereqs: null,
  die: 10,
  improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
  saves: ["Cha", "Wis"],
  skills: ["\n\n" + toUni("Angel") + ": Choose two from Animal Handling, Arcana, History, Insight, Intimidation, Medicine, Perception, Persuasion, or Religion.", null],
  
  // Proficiencies + Attacks
  armor: [[true, true, false, true], [null]],
  weapons: [[true, false, false], [null]],
  equipment: "Angel starting equipment:\n \u2022 a simple melee weapon and a shield -or- a simple ranged weapon and 20 pieces of ammunition -or- two simple melee weapons;\n \u2022 a priest's pack -or- an explorer's pack;\n \u2022 chain mail and a holy symbol;\n \u2022 healer's kit;\n \u2022 If you are using starting wealth, you have 4d4 x 10 gp in funds.",
  subclasses: ["Angelic Domain", ["protector", "avenger", "the reaper"]],
  attacks: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  
  // Spellcasting
  abilitySave: 5,
  spellcastingFactor: 2,
  spellcastingKnown: {
    prepared: true,
  },
  spellcastingList: {
    class: "cleric",
    level: [1, 5]
  },
  
  // Class Features
  // TODO: Ask about feature and stat changes per level on features
  features: {
    "immortal nature": {
      name: "Immortal Nature",
      source: ["HB", 0],
      minLevel: 1,
      description: "\n  You are an immortal, celestial being. Your creature type is now celestial and you no longer age. You don't require food, water or sleep.\nYou do however need to rest daily to retain this celestial strength through a prayer of contemplation with your deity. During a long rest, you need to spend at least 4 hours praying to your deity. You don't need to rest for the remainder of the rest, but if you do anything more complex or demanding than light activity you suffer all the effects of not completing a long rest.",
    },
    
    "wings": {
      name: "Wings",
      source: ["HB", 0],
      minLevel: 1,
      description: "\n  You grow a pair of wings as part of becoming an angel. These wings are new and as such will take some getting used to and proper training to be able to function correctly. When you are subject to fall damage, you can reduce the damage by a number equal to 5 times your angel level. These wings are incorporeal and translucent, emitting a faint glow.\nAt 6th level, you start to learn how to fly with these wings. You gain a flying movement speed equal to half your walking movement speed, but you need to end this movement on land, or else you will fall. You can take the Dash action to move the double of this distance.\nAt 14th level, your movement speed with your wings become equal to your walking movement speed, and you no longer need to end your movement on the ground. If you have any form of racial flying movement speed, you add 10 feet to to your racial movement.",
    },
    
    "subclassfeature1": {
      name: "Angelic Domain",
      source: ["HB", 0],
      minLevel: 1,
      description: "\n  Starting at 1st level you choose an Angelic domain pushing you to follow a core trait from the following: Protector, Avenger, The Reaper. Your Angelic domain grants you benefits at 1st level, and again at 3rd, 7th, 14th and 17th levels.",
    },
    
    "glowing radiance": {
      name: "Glowing Radiance",
      source: ["HB", 0],
      minLevel: 2,
      description: "\n  Starting at 2nd level, your unnaturally holy form gives off a slight glow that you can ignite and extinguish as a bonus action on your turn. This radiance glows a 10 foot aura of bright light with an additional 10 foot aura of dim light beyond it.\nYour glowing radiance can glow even through magical darkness. Additionally, when the bright portion of your light contacts magical darkness, you can use your action to try to dispel it. You must make an ability check using your spellcasting ability, and, on a success, the spell causing the magical darkness is dispelled. The DC equals 10 + the spell’s level.",
    },
    
    "voice of authority": {
      name: "Voice of Authority",
      source: ["HB", 0],
      minLevel: 6,
      description: "\n  An angel's voice brings about many different effects, some soothing and some commanding. At 6th level, you gain proficiency in Persuasion and Intimidation. If you already have proficiency in one or both of these skills you can add double your proficiency bonus to any check made with these skills.\nAdditionally, you have advantage on any Charisma based check to interact with good-aligned creatures.",
      skills: ["Persuasion", "Intimidation"],
      skillstxt : "\n\n" + toUni("Voice of Authority") + ": Persuasion and Intimidation.",
    },
    
    "angelic weapons": {
      name: "Angelic Weapons",
      source: ["HB", 0],
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
    source: ["HB", 0],
    features: {
      "subclassfeature1Pro": {
        name: "Mending Touch",
        source: ["HB", 0],
        minLevel: 1,
        description: "\n  After choosing this discipline at 1st level you learn the spell spare the dying, and you can cast it as a bonus action on your turn. When you cast this spell, you heal 1 hit point of a creature the first time you cast this on it.\nAfter restoring hit points of a creature in that manner, you can't do it again until that creature completes a short or a long rest.",
        usages: 1,
        spellcastingBonus: {
          name: "Mending Touch",
          spells: ["spare the dying"],
          // TODO: Cast as bonus action?
        },
        action: ["bonus action", ""], // TODO: Necessary?
      },
      
      "subclassfeature3Pro": {
        name: "Guardian Angel",
        source: ["HB", 0],
        minLevel: 3,
        description: "\n  At 3rd level, whenever you use your action to cast a spell of 1st or 2nd level that restores hit points, the healed creature becomes resistant to all types of damage until the start of your next turn.",
      },
      
      "subclassfeature7Pro": {
        name: "Blessed Vigor",
        source: ["HB", 0],
        minLevel: 7,
        description: "\n  At 7th level, you gain the power from your deity to protect any friendly creature in the area. You can give one willing friendly creature 2d10 temporary hit points, this adds an additional 1d10 at 14th level (3d10), and 17th level (4d10). This may be done once every short rest.",
        additional: ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "3d10", "3d10", "3d10", "4d10", "4d10", "4d10", "4d10"], // TODO: Correct usage?
        usages: 1,
        recovery: "short rest"
      },
      
      "subclassfeature14Pro": {
        name: "Hands of Cure",
        source: ["HB", 0],
        minLevel: 14,
        description: "\n  At 14th level, you can cast lesser restoration, healing word and cure wounds without using a spell slot. Each spell can be cast (1 + Wisdom modifier) per long rest.",
        spellcastingBonus: {
          name: "Hands of Cure",
          spells: ["lesser restoration", "healing word", "cure wounds"],
          prepared: true,
          firstCol: 1,// TODO: Set to 1 + WIS mod
        },
        spellFirstColTitle: "Nm",
      },
      
      "subclassfeature17Pro": {
        name: "Restorative Light",
        source: ["HB", 0],
        minLevel: 17,
        description: "\n  At 17th level, you may add 1d10 to all healing done, and you can cast power word heal once per long rest.",
        spellcastingBonus: {
          name: "Restorative Light",
          spells: ["power word heal"],
          prepared: true,
          oncelr: true
        },
      }
    },
  }
);

// Avenger Subclass
AddSubClass(
  "angel",
  "avenger",
  {
    regExpSearch: /^(?=.*avenger).*$/i,
    subname: "Avenger",
    source: ["HB", 0],
    features: {
      "subclassfeature1Ave": {
        name: "Militant Angel",
        source: ["HB", 0],
        minLevel: 1,
        description: "\n  At 1st level, you gain proficiency in martial weapons. In addition, you can choose one of the following fighting styles:\nArchery, Defense, Dueling, Great Weapon Fighting, Protection, or Two-Weapon Fighting.",
        choices: ["Archery", "Defense", "Dueling", "Great Weapon Fighting", "Protection", "Two-Weapon Fighting"],
        
        // Archery proficiency
        "archery": {
          name: "Archery",
          description: "You gain a +2 bonus to attack rolls you make with ranged weapons.",
          calcChanges: {
            atkAdd: ["if (isRangedWeapon) {fields.To_Hit_Bonus += '+2';};", ""], // TODO: Correct usage?
          }
        },
        
        // Defense proficiency
        "defense": {
          name: "Defense",
          description: "While you are wearing armor, you gain a +1 bonus to AC.",
          calcChanges: {
            // TODO: Calculate AC change
          }
        },
        
        // Great Weapon Fighting proficiency
        "great weapon fighting": {
          name: "Great Weapon Fighting",
          description: "When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit."
        },
        
        // Protection proficiency
        "protection": {
          name: "Protection",
          description: "When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.",
          action: ["reaction", "Militant Angel: "]
        },
        
        "two-weapon fighting": {
          name: "Two-Weapon Fighting",
          description: "When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack."
        }
      },
      
      "subclassfeature3Ave": {
        name: "Divine Rage",
        source: ["HB", 0],
        minLevel: 3,
        description: "\n  At 3rd level, whenever you cast a spell of 1st or 2nd level that deals fire or radiant damage, the target takes the same amount of damage on its next turn. If the spell targets multiple opponents, you must choose one to be affected by this feature."
      },
      
      "subclassfeature7Ave": {
        name: "Sacred Fire",
        source: ["HB", 0],
        minLevel: 7,
        description: "\n  After choosing this discipline at 7th level, you can imbue your weapon with holy fire, adding 2d6 damage to all attacks for 3 turns. This damage increases by 1d6 at 14th level (3d6) and 17th level (4d6). This feature can only be used (1 + Wisdom modifier) times per long rest.",
        usages: 1, // TODO: Add calculation for Wisdom mod addition
        recovery: "long rest"
      },
      
      "subclassfeature14Ave": {
        name: "Divine Destruction",
        source: ["HB", 0],
        minLevel: 14,
        description: "\n  At 14th level, you can cast staggering smite and flame strike without using a spell slot. This can be done (1 + Wisdom modifier) times per long rest.",
        usages: 1, // TODO: Add calculation for Wisdom mod addition
        recovery: "long rest"
      },
      
      "subclassfeature17Ave": {
        name: "Holy Avenger",
        source: ["HB", 0],
        minLevel: 17,
        description: "\n  At 17th level, your AC increases by 1, and you can add 1d4 to all damage dice. When reaching 0 hit points you can come back at half of your character's maximum hit points."
        // TODO: Calculations on AC and extra damage dice
      }
    },
  },
);

// The Reaper subclass
AddSubClass(
  "angel",
  "the reaper",
  {
    regExpSearch: /^(?=.*the)(?=.*reaper).*$/i,
    subname: "Reaper",
    source: ["HB", 0],
    features: {
      "subclassfeature1TR": {
        name: "Drain Vitality",
        source: ["HB", 0],
        minLevel: 1,
        description: "\n  After choosing this discipline at 1st level, you gain the ability to drain the essence from the dead. When you drain the nearby dead, you regenerate 1d4 hit points per body. The amount of health increases by 1d4 at 7th level (2d4), 14th level (3d4), and 17th level (4d4). You can use this feature a number of times equal 2 + Wisdom modifier, being unable to do so until you finish a long rest.",
        additional: ["1d4", "1d4", "1d4", "1d4", "1d4", "1d4", "2d4", "2d4", "2d4", "2d4", "2d4", "2d4", "2d4", "3d4", "3d4", "3d4", "4d4", "4d4", "4d4", "4d4"], // TODO: Correct usage?
        usages: 2, // TODO: Add calculation for Wisdom mod addition
        recovery: "long rest"
      },
      
      "subclassfeature3TR": {
        name: "Sip Life Force",
        source: ["HB", 0],
        minLevel: 3,
        description: "\n  At 3rd level, whenever you cast a spell of 1st or 2nd level that deals necrotic or poison damage, the target has disadvantage on its next attack roll, ability check, or saving throw it makes before the start of your next turn."
      },
      
      "subclassfeature7TR": {
        name: "Undead Servant",
        source: ["HB", 0],
        minLevel: 7,
        description: "\n  At 7th level, you can cast animate dead without using spell slots. This feature can be used (1 + 1/2 Wisdom modifier).",
        spellcastingBonus: {
          name: "Undead Servant",
          spells: ["animate dead"],
          prepared: true,
          atwill: true,
          firstCol: 1, // TODO: figure out calculation
        },
        spellFirstColTitle: "Nm"
      },
      
      "subclassfeature14TR": {
        name: "Grim Reaper",
        source: ["HB", 0],
        minLevel: 14,
        description: "\n  At 14th level, when making a weapon attack you may add 2d10 necrotic damage. You regenerate hit points worth 1/2 of the damage done, rounded down. The damage increases by 1d10 at 17th level (3d10). This feature can be used (2 + proficiency bonus) per short or long rest.",
        additional: ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "2d10", "2d10", "2d10", "3d10", "3d10", "3d10", "3d10"], // TODO: Correct usage?
        usages: 2, // TODO: Add calculation for prof. bonus addition,
        recovery: "short rest" // TODO: recovered when "LR" clicked on sheet as well?
      },
      
      "subclassfeature17TR": {
        name: "Avatar of Death",
        source: ["HB", 0],
        minLevel: 17,
        description: "\n  At 17th level, an aura surrounds you and saps the life of anything within 5 feet of you. If a creature ends its turn within range it must succeed on a Constitution saving throw or lose hit points equal to 6d6 + proficiency bonus + Wisdom modifier. You gain hit points equal to half the hit points the creature lost, rounded up."
      }
    },
  },
);