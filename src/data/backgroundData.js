import { getFocusData } from './focusData';

export const backgrounds = [
    {
        name: "Ander Survivor",
        description: "The Anderfels is a nation in the northwest of Thedas, distant and remote from Ferelden. It is the home of the Grey Wardens' headquarters, Weisshaupt Fortress. It is the one nation in which the Wardens retain a significant political influence. No region of Thedas has paid a higher price for defeating the Blights. The Anderfels, once a part of the Tevinter Imperium, was the center of three of them, and its steppes still need to recover. The Blights poisoned the land so much they are utterly devoid of life. However, even with the defeat of the old Blights, the Ander people could not rest easy. Darkspawn raids have been common there since the Divine Age. This has made the Anderfels a nation of survivors. You must be tough to see your adult years there. A surprising number of Anders choose to remain in this harsh environment. Still, those who decamp for other parts of Thedas can take care of themselves.",
        abilityAdjustments: { constitution: 1 },
        focusOptions: ['Stamina', 'Climbing'],
        languages: ["Ander", "Trade Tongue"],
        allowedClasses: ["Rogue", "Warrior"],
        races: ["Human"],
        rollTable: {
          default: [
          { roll: "2", result: "+1 Dexterity" },
          { roll: "3-4", result: getFocusData("Stamina") },
          { roll: "5", result: getFocusData("Climbing") },
          { roll: "6", result: getFocusData("Tracking") },
          { roll: "7-8", result: "+1 Strength" },
          { roll: "9", result: getFocusData("Brawling") },
          { roll: "10-11", result: getFocusData("Courage") },
          { roll: "12", result: "+1 Perception" }
          ]
        }
      },
    {
        name: "Apostate",
        description: "An apostate is a mage who lives outside the Circle of Magi and is not under the control of the Chantry. Apostates are considered dangerous and are hunted by templars. Some apostates are hedge mages, untrained or self-taught mages who live in the wilderness. Others are maleficarum, mages who use forbidden blood magic.",
        abilityAdjustments: { willpower: 1 },
        focusOptions: ['Natural Lore','Self-Discipline'],
        languages: ["Trade Tongue"],
        allowedClasses: ["Mage"],
        races: ["Elf", "Human"],
        rollTable: {
          Elf: [
            { roll: "2", result: "+1 Cunning" },
            { roll: "3-4", result: "Speak Elven" },
            { roll: "5", result: getFocusData("Cultural Lore") },
            { roll: "6", result: getFocusData("Self-Discipline") },
            { roll: "7-8", result: "+1 Magic" },
            { roll: "9", result: getFocusData("Stealth") },
            { roll: "10-11", result: "+1 Dexterity" },
            { roll: "12", result: "Weapon Group: Bows" }
          ],
          Human: [
            { roll: "2", result: "+1 Dexterity" },
            { roll: "3-4", result: getFocusData("Stamina") },
            { roll: "5", result: getFocusData("Climbing") },
            { roll: "6", result: getFocusData("Tracking") },
            { roll: "7-8", result: "+1 Strength" },
            { roll: "9", result: getFocusData("Brawling") },
            { roll: "10-11", result: getFocusData("Courage") },
            { roll: "12", result: "+1 Perception" }
          ]
        }
      },
    {
        name: "Seheron Convert",
        description: "Seheron is a large, jungle-dominated island north of the Tevinter Imperium. It was part of the Imperium for centuries, but the Qunari conquered it in the Steel Age. Since then, the Imperial Chantry has launched countless offensives against the Qunari on Seheron, and the fighting has been fierce. The Qunari lost the island in the Storm Age but re-conquered it in the Blessed Age. When part of the Imperium, Seheron had a large population of elven slaves. Many of these (and some humans) converted to the Qun and enjoy a much higher status. If you play a Seheron Convert, you'll want to read about Qunari beliefs on page 193 of the Core Rule Book.\n\nYou can use this background to represent Rivaini converts as well since the Qun has had a marked influence there.",
        abilityAdjustments: { willpower: 1 },
        focusOptions: ['Qun', 'Self-Discipline'],
        languages: ["Qunlat","Tevinter","Trade Tongue"],
        allowedClasses: ["Rogue", "Warrior"],
        races: ["Elf", "Human"],
        rollTable: {
          default: [
          { roll: "2", result: "+1 Perception" },
          { roll: "3-4", result: getFocusData("Qun") },
          { roll: "5", result: getFocusData("Self-Discipline") },
          { roll: "6", result: getFocusData("Persuasion") },
          { roll: "7-8", result: "+1 Strength" },
          { roll: "9", result: getFocusData("Might") },
          { roll: "10-11", result: getFocusData("Stamina") },
          { roll: "12", result: "+1 Willpower" }
          ]
        }
      },
    {
      name: "Tevinter Altus",
      description: "The Tevinter Imperium is one of the few places in Thedas where mages are not under the thumb of the Chantry. This, in fact, was a root cause of the Schism within the Chantry. Tevinter has its own Divine and Chantry, though it is a much less powerful institution than the Chantry centered in Orlais. In ancient times, the Imperium was ruled by magisters, though their hubris is said to have led to the creation of Darkspawn and the Blights. After Andraste freed the elven slaves and brought the Chant of Light north, the mages were in check for a time, but no longer. The Altus are the noble mages who rule the Imperium",
      abilityAdjustments: { magic: 1 },
      focusOptions: ['Leadership', 'Arcane Lore'],
      languages: ["Tevinter", "Trade Tongue"],
      allowedClasses: ["Mage"],
      races: ["Human"],
      rollTable: {
        default:  [
        { roll: "2", result: "+1 Cunning" },
        { roll: "3-4", result: getFocusData("Riding") },
        { roll: "5", result: getFocusData("Heraldry") },
        { roll: "6", result: getFocusData("Arcane Lance") },
        { roll: "7-8", result: "+1 Communication" },
        { roll: "9", result: getFocusData("Historical Lore") },
        { roll: "10-11", result: getFocusData("Etiquette") },
        { roll: "12", result: "+1 Willpower" }
        ]
      }
    }
  ];
  
  export const getBackgroundByName = (name) => {
    return backgrounds.find(bg => bg.name.toLowerCase() === name.toLowerCase());
  };
  
  export const getAllBackgroundNames = () => {
    return backgrounds.map(bg => bg.name);
  };
  
  export const getBackgroundBenefits = (backgroundName, race) => {
    console.warn("getBackgroundBenefits called with:", backgroundName, race);
    const background = getBackgroundByName(backgroundName);
    console.warn("Found background:", background);
  
    if (!background) {
      console.error("Background not found");
      return null;
    }
  
    let rollTable = background.rollTable;
    if (typeof rollTable === 'object' && !Array.isArray(rollTable)) {
      rollTable = rollTable[race] || Object.values(rollTable)[0];
    }
  
    const benefits = {
      abilityAdjustments: background.abilityAdjustments,
      focusOptions: background.focusOptions,
      languages: background.languages,
      allowedClasses: background.allowedClasses,
      rollTable: rollTable
    };
  
    console.warn("Returning benefits:", benefits);
    return benefits;
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
  focusOptions: ['',''],
  languages: ["",""],
  allowedClasses: [""],
  races: [""].
  rollTable: [
    { roll: "2", result: "+1 Ability" },
    { roll: "3-4", result: getFocusData("Focus") },
    { roll: "5", result: getFocusData("Focus") },
    { roll: "6", result: getFocusData("Focus") },
    { roll: "7-8", result: "+1 Ability" },
    { roll: "9", result: getFocusData("Focus") },
    { roll: "10-11", result: getFocusData("Focus") },
    { roll: "12", result: "+1 Ability" }
  ]
}
*/