interface ClassPower {
  level: number;
  powers: string[];
}

interface Class {
  name: string;
  description: string;
  primaryAbilities: string[];
  baseHealth: number;
  weaponGroups: string[];
  classPowers: ClassPower[];
  spellLists?: string[];
}

export const classes: Class[] = [
  {
    name: "Mage",
    description: "Mages are the masters of magic, wielding arcane powers to devastating effect. They are scholars of the arcane and possess a deep understanding of the Fade.",
    primaryAbilities: ["Cunning", "Magic", "Willpower"],
    baseHealth: 20,
    weaponGroups: ["Brawling", "Staves"],
    classPowers: [
      { level: 1, powers: ["Arcane Lance", "Magic Training", "Mana Points", "Starting Talent"] },
      { level: 2, powers: ["New Spell"] },
      { level: 3, powers: ["New Talent"] },
      { level: 4, powers: ["New Spell", "Spell Lance"] },
      { level: 5, powers: ["New Talent"] },
      { level: 6, powers: ["New Specialization", "New Spell"] },
      { level: 7, powers: ["Long Lance", "New Talent"] },
      { level: 8, powers: ["New Specialization Talent", "New Spell"] },
      { level: 9, powers: ["New Talent", "Power Lance"] },
      { level: 10, powers: ["New Specialization Talent", "New Spell"] },
      { level: 11, powers: ["New Spell", "New Talent", "Mana Points"] },
      { level: 12, powers: ["Stunt Bonus"] },
      { level: 13, powers: ["New Spell", "New Talent"] },
      { level: 14, powers: ["New Specialization"] },
      { level: 15, powers: ["New Spell", "New Talent"] },
      { level: 16, powers: ["New Specialization Talent"] },
      { level: 17, powers: ["New Spell", "New Talent"] },
      { level: 18, powers: ["New Specialization Talent"] },
      { level: 19, powers: ["New Spell", "New Talent"] },
      { level: 20, powers: ["Epic Mage"] },
    ],
    spellLists: ["Creation", "Entropy", "Primal", "Spirit"]
  },
    {
      name: "Rogue",
      description: "This is a rogue. Not rouge. A rouge-wearing rogue, maybe.",
      primaryAbilities: ["Communication", "Dexterity", "Perception"],
      baseHealth: 25,
      weaponGroups: ["Bows", "Brawling", "Light Blades", "Staves"],
      classPowers: [
        { level: 1, powers: ["Backstab", "Rogue's Armor", "Starting Talents"] },
        { level: 2, powers: ["Stunt Bonus"] },
        { level: 3, powers: ["New Talent"] },
        { level: 4, powers: ["Bluff"] },
        { level: 5, powers: ["New Talent"] },
        { level: 6, powers: ["Stunt Bonus", "New Specialization"] },
        { level: 7, powers: ["Dirty Fighting", "New Talent"] },
        { level: 8, powers: ["New Specialization Talent"] },
        { level: 9, powers: ["Lethality", "New Talent"] },
        { level: 10, powers: ["New Specialization Talent"] },
        { level: 11, powers: ["New Talent"] },
        { level: 12, powers: ["Slippery"] },
        { level: 13, powers: ["New Talent", "Stunt Bonus"] },
        { level: 14, powers: ["New Specialization"] },
        { level: 15, powers: ["New Talent", "Perforate"] },
        { level: 16, powers: ["New Specialization Talent"] },
        { level: 17, powers: ["New Talent", "Quick Shot"] },
        { level: 18, powers: ["New Specialization Talent"] },
        { level: 19, powers: ["New Talent"] },
        { level: 20, powers: ["Epic Rogue"] }
      ]
    }
  ];
  
  export const getClassByName = (name: string): Class | undefined => {
    return classes.find(cls => cls.name.toLowerCase() === name.toLowerCase());
  };
  
  export const getAllClassNames = (): string[] => {
    return classes.map(cls => cls.name);
  };
  
  export const getClassDetails = (className: string): Class | null => {
    const classData = getClassByName(className);
    if (!classData) return null;
    return classData;
  };
  
  export const getClassPowers = (className: string, level: number): string[] => {
    const classData = getClassByName(className);
    if (!classData) return [];
    return classData.classPowers
      .filter(cp => cp.level <= level)
      .flatMap(cp => cp.powers);
  };
  
  export const calculateStartingHealth = (className: string, constitutionScore: number): number | null => {
    const classData = getClassByName(className);
    if (!classData) return null;
    const baseHealth = classData.baseHealth;
    const diceRoll = Math.floor(Math.random() * 6) + 1; // 1d6 roll
    return baseHealth + constitutionScore + diceRoll;
  };