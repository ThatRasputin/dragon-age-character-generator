import { race } from '../types/enums/races';
import { RaceDataRecord } from '../types/interfaces/raceData';

export const RaceData: RaceDataRecord = {
  [race.Dwarf]: { baseSpeed: 8 },
  [race.Elf]: { baseSpeed: 12 },
  [race.Human]: { baseSpeed: 10 },
  [race.Qunari]: { baseSpeed: 10 },
};