import React from 'react';
import { backgrounds } from '../data/backgroundData';

function BackgroundTab({ character, handleInputChange, incompatibleWarning }) {
  const isSelectOption = (text) => /^Select\s\w+$/.test(text);
  const getOptionClass = (option, allowedOptions) => {
    if (isSelectOption(option)) return '';
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
      {character.background && (
        <div>
          <h3>Playing a {character.background}</h3>
          <p>{backgrounds.find(bg => bg.name === character.background).description}</p>
          <h4>Ability Adjustments:</h4>
          <ul>
            {Object.entries(backgrounds.find(bg => bg.name === character.background).abilityAdjustments).map(([ability, adjustment]) => (
              <li key={ability}>+{adjustment} to {ability.charAt(0).toUpperCase() + ability.slice(1)}</li>
            ))}
          </ul>
          <h4>Focus Options:</h4>
          <div className="focus-options">
            {backgrounds.find(bg => bg.name === character.background).focusOptions.map((focus, index) => (
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
        </div>
      )}
    </div>
  );
}

export default BackgroundTab;