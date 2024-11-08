export const classes = [
  {
    name: "Mage",
    description: "Mages are the masters of magic, wielding arcane powers to devastating effect. They are scholars of the arcane and possess a deep understanding of the Fade.",
    primaryAbilities: ["Cunning", "Magic", "Willpower"],
    baseHealth: 20,  
    healthPerLevel: 3,
    weaponGroups: ["Brawling", "Staves"],
    armorTraining: ["Light Leather"],
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
    spellLists: ["Arcane", "Creation", "Entropy", "Primal", "Spirit"]
  },
    {
      name: "Rogue",
      description: "",
      primaryAbilities: ["","",""],
      baseHealth: 0,
      healthPerLevel: 0,
      weaponGroups: ["",""],
      armorTraining: [""],
      classPowers: [
        { level: 1, powers: ["",""]},
        { level: 2, powers: ["",""]},
        { level: 3, powers: ["",""]},
        { level: 4, powers: ["",""]},

      ]
    }
  ];
  
  export const getClassByName = (name) => {
    return classes.find(cls => cls.name.toLowerCase() === name.toLowerCase());
  };
  
  export const getAllClassNames = () => {
    return classes.map(cls => cls.name);
  };
  
  export const getClassDetails = (className) => {
    const classData = getClassByName(className);
    if (!classData) return null;
  
    return {
      primaryAbilities: classData.primaryAbilities,
      baseHealth: classData.baseHealth,
      healthPerLevel: classData.healthPerLevel,
      weaponGroups: classData.weaponGroups,
      armorTraining: classData.armorTraining,
      classPowers: classData.classPowers,
      spellLists: classData.spellLists
    };
  };
  
  export const getClassPowers = (className, level) => {
    const classData = getClassByName(className);
    if (!classData) return [];
    
    return classData.classPowers
      .filter(cp => cp.level <= level)
      .flatMap(cp => cp.powers);
  };
  
  export const calculateStartingHealth = (className, constitutionScore) => {
    const classData = getClassByName(className);
    if (!classData) return null;
  
    const baseHealth = classData.baseHealth;
    const diceRoll = Math.floor(Math.random() * 6) + 1; // 1d6 roll
    
    return baseHealth + constitutionScore + diceRoll;
  };