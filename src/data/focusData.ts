// focusData.ts

interface FocusInfo {
    ability: string;
  }
  
  export interface FocusData {
    [key: string]: FocusInfo;
  }
  
  export const focusData: FocusData = {
    'Arcane Lance': { ability: 'Magic' },
    'Brawling': { ability: 'Dexterity' },
    'Climbing': { ability: 'Strength' },
    'Courage': { ability: 'Willpower' },
    'Cultural Lore': { ability: 'Cunning' },
    'Etiquette': { ability: 'Communication' },
    'Heraldry': { ability: 'Cunning' },
    'Historical Lore': { ability: 'Cunning' },
    'Might': { ability: 'Strength' },
    'Natural Lore': { ability: 'Cunning' },
    'Persuasion': { ability: 'Communication' },
    'Riding': { ability: 'Dexterity' },
    'Running': { ability: 'Constitution' },
    'Self-Discipline': { ability: 'Willpower' },
    'Stamina': { ability: 'Constitution' },
    'Stealth': { ability: 'Dexterity' },
    'Tracking': { ability: 'Perception' }
  };
  
  export function getFocusData(focusName: string): { focus: string; ability: string } | string {
    if (focusName in focusData) {
      return {
        focus: focusName,
        ability: focusData[focusName].ability
      };
    }
    return "That focus is not in the standard list.";
  }
  
  export function getCustomFocusKey(focus: string, ability: string): string {
    return `custom_${focus.toLowerCase().replace(/\s+/g, '_')}_${ability}`;
  }
  
  export function isCustomFocus(focusKey: string): boolean {
    return focusKey.startsWith('custom_');
  }