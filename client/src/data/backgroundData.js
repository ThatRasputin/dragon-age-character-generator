export const backgrounds = [
    {
        name: "Ander Survivor",
        description: "The Anderfels is a nation in the northwest of Thedas, distant and remote from Ferelden. It is the home of the Grey Wardens' headquarters, Weisshaupt Fortress. It is the one nation in which the Wardens retain a significant political influence. No region of Thedas has paid a higher price for defeating the Blights. The Anderfels, once a part of the Tevinter Imperium, was the center of three of them, and its steppes still need to recover. The Blights poisoned the land so much they are utterly devoid of life. However, even with the defeat of the old Blights, the Ander people could not rest easy. Darkspawn raids have been common there since the Divine Age. This has made the Anderfels a nation of survivors. You must be tough to see your adult years there. A surprising number of Anders choose to remain in this harsh environment. Still, those who decamp for other parts of Thedas can take care of themselves.",
        abilityAdjustments: {
          constitution: 1
        },
        focusOptions: [
          "Constitution (Stamina)",
          "Strength (Climbing)"
        ],
        languages: ["Ander", "Trade Tongue"],
        allowedClasses: ["Rogue", "Warrior"],
        races: ["Human"],
        rollTable: [
          { 
            roll: "2", 
            result: "+1 Dexterity" 
          },
          { 
            roll: "3-4", 
            result: "Focus: Constitution (Running)" 
          },
          { 
            roll: "5", 
            result: "Focus: Cunning (Historical Lore)" 
          },
          { 
            roll: "6", 
            result: "Focus: Perception (Tracking)" 
          },
          { 
            roll: "7-8", 
            result: "+1 Strength" 
          },
          { 
            roll: "9", 
            result: "Focus: Dexterity (Brawling)" 
          },
          { 
            roll: "10-11", 
            result: "Focus: Willpower (Courage)" 
          },
          { 
            roll: "12", 
            result: "+1 Perception" 
          }
        ]
      },
    {
        name: "Seheron Convert",
        description: "Seheron is a large, jungle-dominated island north of the Tevinter Imperium. It was part of the Imperium for centuries, but the Qunari conquered it in the Steel Age. Since then, the Imperial Chantry has launched countless offensives against the Qunari on Seheron, and the fighting has been fierce. The Qunari lost the island in the Storm Age but re-conquered it in the Blessed Age. When part of the Imperium, Seheron had a large population of elven slaves. Many of these (and some humans) converted to the Qun and enjoy a much higher status. If you play a Seheron Convert, you'll want to read about Qunari beliefs on page 193 of the Core Rule Book.\n\nYou can use this background to represent Rivaini converts as well since the Qun has had a marked influence there.",
        abilityAdjustments: {
          willpower: 1,
        },
        focusOptions: [
          "Cunning (Qun)",
          "Willpower (Self-Discipline)"
        ],
        languages: ["Qunlat","Tevinter","Trade Tongue"],
        allowedClasses: ["Rogue", "Warrior"],
        races: ["Elf", "Human"],
        rollTable: [
          { 
            roll: "2", 
            result: "+1 Perception" 
          },
          { 
            roll: "3-4", 
            result: "Focus: Cunning (Historical Lore)" 
          },
          { 
            roll: "5", 
            result: "Focus: Strength (Might)" 
          },
          { 
            roll: "6", 
            result: "Focus: Constitution (Stamina)" 
          },
          { 
            roll: "7-8", 
            result: "+1 Cunning" 
          },
          { 
            roll: "9", 
            result: "Focus: Communication (Persuasion)" 
          },
          { 
            roll: "10-11", 
            result: "Focus: Perception (Empathy)" 
          },
          { 
            roll: "12", 
            result: "+1 Strength" 
          }
        ]
      },
    {
      name: "Tevinter Altus",
      description: "The Tevinter Imperium is one of the few places in Thedas where mages are not under the thumb of the Chantry. This, in fact, was a root cause of the Schism within the Chantry. Tevinter has its own Divine and Chantry, though it is a much less powerful institution than the Chantry centered in Orlais. In ancient times, the Imperium was ruled by magisters, though their hubris is said to have led to the creation of Darkspawn and the Blights. After Andraste freed the elven slaves and brought the Chant of Light north, the mages were in check for a time, but no longer. The Altus are the noble mages who rule the Imperium",
      abilityAdjustments: {
        magic: 1
      },
      focusOptions: [
        "Communication (Leadership)",
        "Cunning (Arcane Lore)"
      ],
      languages: ["Tevinter", "Trade Tongue"],
      allowedClasses: ["Mage"],
      races: ["Human"],
      rollTable: [
        { 
          roll: "2", 
          result: "+1 Cunning" 
        },
        { 
          roll: "3-4", 
          result: "Focus: Dexterity (Riding)" 
        },
        { 
          roll: "5", 
          result: "Focus: Cunning (Heraldry)" 
        },
        { 
            roll: "6", 
            result: "Focus: Magic (Arcane Lance)" 
        },
        { 
          roll: "7-8", 
          result: "+1 Communication" 
        },
        { 
          roll: "9", 
          result: "Focus: Cunning (Historical Lore)" 
        },
        { 
            roll: "10-11", 
            result: "Focus: Communication (Etiquette)" 
        },
        { 
          roll: "12", 
          result: "+1 Willpower" 
        }
      ]
    }
    // Add other backgrounds here
  ];
  
  export const getBackgroundByName = (name) => {
    return backgrounds.find(bg => bg.name.toLowerCase() === name.toLowerCase());
  };
  
  export const getAllBackgroundNames = () => {
    return backgrounds.map(bg => bg.name);
  };
  
  export const getBackgroundBenefits = (backgroundName) => {
    const background = getBackgroundByName(backgroundName);
    if (!background) return null;
  
    return {
      abilityAdjustments: background.abilityAdjustments,
      focuses: background.focuses,
      focusOptions: background.focusOptions,
      languages: background.languages,
      allowedClasses: background.allowedClasses,
      equipment: background.equipment,
      rollTable: background.rollTable
    };
  };

  /*
Template for adding new backgrounds:

{
  name: "",
  description: "",
  abilityAdjustments: {
    // Add relevant abilities and their adjustments. Remove any lines with a 0 value.
    // strength: 0,
    // dexterity: 0,
    // constitution: 0,
    // magic: 0,
    // perception: 0,
    // willpower: 0,
    // communication: 0,
    // cunning: 0
  },
  focusOptions: [
    // Add focus options here
  ],
  languages: ["",""],
  allowedClasses: [""],
  races: [""].
  rollTable: [
          { 
            roll: "2", 
            result: "" 
          },
          { 
            roll: "3-4", 
            result: "" 
          },
          { 
            roll: "5", 
            result: "" 
          },
          { 
            roll: "6", 
            result: "" 
          },
          { 
            roll: "7-8", 
            result: "" 
          },
          { 
            roll: "9", 
            result: "" 
          },
          { 
            roll: "10-11", 
            result: "" 
          },
          { 
            roll: "12", 
            result: "" 
          }
  ]
}
*/