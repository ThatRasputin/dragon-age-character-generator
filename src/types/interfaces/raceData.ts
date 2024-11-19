import { race } from '../enums/races'

export interface RaceData {
  baseSpeed: number;
}

export type RaceDataRecord = Record<race, RaceData>;