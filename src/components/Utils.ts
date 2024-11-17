import { FocusData } from '../data/focusData';

export const formatFocusForDisplay = (focusName: string, focusDetails: FocusData[keyof FocusData] | undefined): string => {
  if (focusDetails) {
    return `${focusName} (${focusDetails.ability})`;
  }
  return focusName;
};

 /*
 | Rolls a specified number of six-sided dice (d6).
 | @param numberOfDice The number of dice to roll.
 | @returns An object containing the total sum and an array of individual roll results.
*/
export function rollDice(numberOfDice: number): { total: number; rolls: number[] } {
  const rolls: number[] = [];
  let total = 0;

  for (let i = 0; i < numberOfDice; i++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    rolls.push(roll);
    total += roll;
  }

  return { total, rolls };
}

export function rollAbilityScore(): number {
  return rollDice(3).total;
}