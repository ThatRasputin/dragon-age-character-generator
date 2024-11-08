export const focusData = {
    'Brawling': { ability: 'Dexterity' },
    'Climbing': { ability: 'Strength' },
    'Courage': { ability: 'Willpower' },
    'Cultural Lore': { ability: 'Cunning' },
    'Historical Lore': { ability: 'Cunning' },
    'Might': { ability: 'Strength' },
    'Persuasion': { ability: 'Communication' },
    'Riding': { ability: 'Dexterity' },
    'Running': { ability: 'Constitution' },
    'Self-Discipline': { ability: 'Willpower' },
    'Stamina': { ability: 'Constitution' },
    'Stealth': { ability: 'Dexterity' },
    'Tracking': { ability: 'Perception' }
};

export const getFocusData = (focusName) => {
    if (focusName in focusData) {
        return {
            focus: focusName,
            ability: focusData[focusName].ability
        };
    }
    return "That focus is not in the standard list.";
};

export const getCustomFocusKey = (focus, ability) => `custom_${focus.toLowerCase().replace(/\s+/g, '_')}_${ability}`;

export const isCustomFocus = (focusKey) => focusKey.startsWith('custom_');