import React, { useState, useEffect, useCallback } from 'react';
import { backgrounds } from '../data/backgroundData';

function BackgroundTab({ character, handleInputChange, incompatibleWarning }) {
  const [backgroundRolls, setBackgroundRolls] = useState([]);

  const selectedBackground = backgrounds.find(bg => bg.name === character.background);

  const rollDice = () => Math.floor(Math.random() * 6) + 1;

  const getRollTableResult = useCallback((roll) => {
    if (!selectedBackground) return null;
    return selectedBackground.rollTable.find(item => item.roll === roll.toString()) || null;
  }, [selectedBackground]);

  const performBackgroundRolls = useCallback(() => {
    let rolls = [];
    let attempts = 0;
    const maxAttempts = 20; // Prevent infinite loop

    while (rolls.length < 2 && attempts < maxAttempts) {
      const roll = rollDice() + rollDice();
      const result = getRollTableResult(roll);
      if (result && !rolls.some(r => r.result === result)) {
        rolls.push({ roll, result });
      }
      attempts++;
    }

    // If we couldn't get two unique results, fill with placeholder
    while (rolls.length < 2) {
      rolls.push({ roll: 0, result: { result: 'No result available' } });
    }

    setBackgroundRolls(rolls);
  }, [getRollTableResult]);

  useEffect(() => {
    if (selectedBackground) {
      performBackgroundRolls();
    }
  }, [selectedBackground, performBackgroundRolls]);

  const getOptionClass = (option, allowedOptions) => {
    if (!allowedOptions || allowedOptions.length === 0) return '';
    return allowedOptions.includes(option) ? '🟢 ' : '🔴 ';
  };

  return (
    <div>
      <h2>Choose Your Background</h2>
      <select name="background" value={character.background} onChange={handleInputChange}>
        <option value="">Select Background</option>
        {backgrounds.map((bg, index) => (
          <option key={index} value={bg.name}>
            {getOptionClass(bg.name, character.class ? backgrounds.filter(b => b.allowedClasses.includes(character.class)).map(b => b.name) : [])}
            {bg.name}
          </option>
        ))}
      </select>
      {incompatibleWarning && <p className="warning">{incompatibleWarning}</p>}
      {selectedBackground && (
        <div>
          <h3>Playing a {character.background}</h3>
          <p>{selectedBackground.description}</p>
          {selectedBackground.races && selectedBackground.races.length > 1 && (
            <div>
              <h4>Choose Your Race</h4>
              <select name="race" value={character.race} onChange={handleInputChange}>
                <option value="">Select Race</option>
                {selectedBackground.races.map((race, index) => (
                  <option key={index} value={race}>
                    {race}
                  </option>
                ))}
              </select>
            </div>
          )}
          <h4>Ability Adjustments:</h4>
          <ul>
            {Object.entries(selectedBackground.abilityAdjustments).map(([ability, adjustment]) => (
              <li key={ability}>+{adjustment} to {ability.charAt(0).toUpperCase() + ability.slice(1)}</li>
            ))}
          </ul>
          <h4>Focus Options:</h4>
          <div className="focus-options">
            {selectedBackground.focusOptions.map((focus, index) => (
              <div key={index} className="focus-option">
                <input
                  type="radio"
                  id={`focus-${index}`}
                  name="focus"
                  value={focus}
                  checked={character.focus === focus}
                  onChange={handleInputChange}
                />
                <label htmlFor={`focus-${index}`}>{focus}</label>
              </div>
            ))}
          </div>
          <h4>Languages:</h4>
          <ul>
            {character.languages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
          <h4>Roll Table Results:</h4>
          {backgroundRolls.map((roll, index) => (
            <p key={index}>
              Roll {index + 1}: {roll.roll} - {roll.result ? roll.result.result : 'No result available'}
            </p>
          ))}
          <button onClick={performBackgroundRolls}>Reroll Background</button>
        </div>
      )}
    </div>
  );
}

export default BackgroundTab;