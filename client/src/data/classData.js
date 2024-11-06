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
        { level: 4, powers: [] },
        { level: 5, powers: [] },
        { level: 6, powers: [] },
        { level: 7, powers: [] },
        { level: 8, powers: [] },
        { level: 9, powers: [] },
        { level: 10, powers: [] },
        { level: 11, powers: [] },
        { level: 12, powers: [] },
        { level: 13, powers: [] },
        { level: 14, powers: [] },
        { level: 15, powers: [] },
        { level: 16, powers: [] },
        { level: 17, powers: [] },
        { level: 18, powers: [] },
        { level: 19, powers: [] },
        { level: 20, powers: [] },
      ],
      spellLists: ["Arcane", "Creation", "Entropy", "Primal", "Spirit"]
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