interface races {
  name: string;
  baseSpeed: number;
}

export const races = [
    {
      name: "Dwarf",
      baseSpeed: 8,
    },    
    {
      name: "Elf",
      baseSpeed: 12,
    },
    {
      name: "Human",
      baseSpeed: 10,
    },
    {
      name: "Qunari",
      baseSpeed: 10,
    },
  ];
  
  export const getRaceByName = (name) => races.find(race => race.name === name);