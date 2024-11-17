import { getFocusData } from './focusData';

interface AbilityAdjustments {
  strength?: number;
  dexterity?: number;
  constitution?: number;
  magic?: number;
  perception?: number;
  willpower?: number;
  communication?: number;
  cunning?: number;
}

export interface RollTableEntry {
  roll: number | [number, number]; // Single number or range [min, max]
  result: string | (() => string | { focus: string; ability: string });
}

interface Background {
  name: string;
  description: string;
  abilityAdjustments: AbilityAdjustments;
  focusOptions: string[];
  languages: string[];
  allowedClasses: string[];
  races: string[];
  rollTable: {
    [key: string]: RollTableEntry[];
  };
}

interface BackgroundBenefits {
  abilityAdjustments: AbilityAdjustments;
  focusOptions: string[];
  languages: string[];
  allowedClasses: string[];
  rollTable: {
    [key: string]: RollTableEntry[];
  };
}

export const backgrounds: Background[] = [
  {
    name: "Ander Survivor",
    description: "The Anderfels is a nation in the northwest of Thedas, distant and remote from Ferelden. It is the home of the Grey Wardens headquarters, Weisshaupt Fortress. It is the one nation in which the Wardens retain a significant political influence. No region of Thedas has paid a higher price for defeating the Blights. The Anderfels, once a part of the Tevinter Imperium, was the center of three of them, and its steppes still need to recover. The Blights poisoned the land so much they are utterly devoid of life. However, even with the defeat of the old Blights, the Ander people could not rest easy. Darkspawn raids have been common there since the Divine Age. This has made the Anderfels a nation of survivors. You must be tough to see your adult years there. A surprising number of Anders choose to remain in this harsh environment. Still, those who decamp for other parts of Thedas can take care of themselves.",
    abilityAdjustments: { constitution: 1 },
    focusOptions: ["Stamina", "Climbing"],
    languages: ["Ander", "Trade Tongue"],
    allowedClasses: ["Rogue", "Warrior"],
    races: ["Human"],
    rollTable: {
      Human: [
        { roll: 2, result: "+1 Perception" },
        { roll: [3, 4], result: () => getFocusData("Stamina") },
        { roll: 5, result: () => getFocusData("Climbing") },
        { roll: 6, result: () => getFocusData("Tracking") },
        { roll: [7, 8], result: "+1 Strength" },
        { roll: 9, result: () => getFocusData("Brawling") },
        { roll: [10, 11], result: () => getFocusData("Courage") },
        { roll: 12, result: "+1 Constitution" }
      ]
    }
  },
  {
    name: "Apostate",
    description: "An apostate is a mage who lives outside the Circle of Magi and is not under the control of the Chantry. Apostates are considered dangerous and are hunted by templars. Some apostates are hedge mages, untrained or self-taught mages who live in the wilderness. Others are maleficarum, mages who use forbidden blood magic.",
    abilityAdjustments: { willpower: 1 },
    focusOptions: ["Natural Lore", "Self-Discipline"],
    languages: ["Trade Tongue"],
    allowedClasses: ["Mage"],
    races: ["Elf", "Human"],
    rollTable: {
      default: [
        { roll: 2, result: "+1 Magic" },
        { roll: [3, 4], result: () => getFocusData("Natural Lore") },
        { roll: 5, result: () => getFocusData("Self-Discipline") },
        { roll: 6, result: () => getFocusData("Stealth") },
        { roll: [7, 8], result: "+1 Perception" },
        { roll: 9, result: () => getFocusData("Arcane Lore") },
        { roll: [10, 11], result: () => getFocusData("Healing") },
        { roll: 12, result: "+1 Willpower" }
      ]
    }
  },
  {
    name: "Seheron Convert",
    description: "Seheron is a large, jungle-dominated island north of the Tevinter Imperium. It was part of the Imperium for centuries, but the Qunari conquered it in the Steel Age. Since then, the Imperial Chantry has launched countless offensives against the Qunari on Seheron, and the fighting has been fierce. The Qunari lost the island in the Storm Age but re-conquered it in the Blessed Age. When part of the Imperium, Seheron had a large population of elven slaves. Many of these and some humans converted to the Qun and enjoy a much higher status. If you play a Seheron Convert, you'll want to read about Qunari beliefs on page 193 of the Core Rule Book. You can use this background to represent Rivaini converts as well since the Qun has had a marked influence there.",
    abilityAdjustments: { willpower: 1 },
    focusOptions: ["Qun", "Self-Discipline"],
    languages: ["Qunlat", "Tevinter", "Trade Tongue"],
    allowedClasses: ["Rogue", "Warrior"],
    races: ["Elf", "Human"],
    rollTable: {
      default: [
        { roll: 2, result: "+1 Perception" },
        { roll: [3, 4], result: () => getFocusData("Qun") },
        { roll: 5, result: () => getFocusData("Self-Discipline") },
        { roll: 6, result: () => getFocusData("Persuasion") },
        { roll: [7, 8], result: "+1 Strength" },
        { roll: 9, result: () => getFocusData("Might") },
        { roll: [10, 11], result: () => getFocusData("Stamina") },
        { roll: 12, result: "+1 Willpower" }
      ]
    }
  },
  {
    name: "Tevinter Altus",
    description: "The Tevinter Imperium is one of the few places in Thedas where mages are not under the thumb of the Chantry. This, in fact, was a root cause of the Schism within the Chantry. Tevinter has its own Divine and Chantry, though it is a much less powerful institution than the Chantry centered in Orlais. In ancient times, the Imperium was ruled by magisters, though their hubris is said to have led to the creation of Darkspawn and the Blights. After Andraste freed the elven slaves and brought the Chant of Light north, the mages were in check for a time, but no longer. The Altus are the noble mages who rule the Imperium.",
    abilityAdjustments: { magic: 1 },
    focusOptions: ["Leadership", "Arcane Lore"],
    languages: ["Tevinter", "Trade Tongue"],
    allowedClasses: ["Mage"],
    races: ["Human"],
    rollTable: {
      default: [
        { roll: 2, result: "+1 Cunning" },
        { roll: [3, 4], result: () => getFocusData("Riding") },
        { roll: 5, result: () => getFocusData("Heraldry") },
        { roll: 6, result: () => getFocusData("Arcane Lance") },
        { roll: [7, 8], result: "+1 Communication" },
        { roll: 9, result: () => getFocusData("Historical Lore") },
        { roll: [10, 11], result: () => getFocusData("Etiquette") },
        { roll: 12, result: "+1 Willpower" }
      ]
    }
  }
];


export function getBackgroundByName(name: string): Background | undefined {
  return backgrounds.find(bg => bg.name.toLowerCase() === name.toLowerCase());
}

export function getAllBackgroundNames(): string[] {
  return backgrounds.map(bg => bg.name);
}

export function getBackgroundBenefits(backgroundName: string, race: string): BackgroundBenefits | null {
  const background = getBackgroundByName(backgroundName);
  if (!background) {
    console.error("Background not found");
    return null;
  }

  const rollTable = background.rollTable[race] || background.rollTable['default'];
  if (!rollTable) {
    console.error("No roll table found for this race or default.");
    return null;
  }

  const benefits: BackgroundBenefits = {
    abilityAdjustments: background.abilityAdjustments,
    focusOptions: background.focusOptions,
    languages: background.languages,
    allowedClasses: background.allowedClasses,
    rollTable: rollTable
  };

  return benefits;
}

export function findRollTableEntry(rollResult: number, rollTable: RollTableEntry[]): RollTableEntry | undefined {
  return rollTable.find(entry => {
    if (typeof entry.roll === 'number') {
      return rollResult === entry.roll;
    } else {
      const [min, max] = entry.roll;
      return rollResult >= min && rollResult <= max;
    }
  });
}