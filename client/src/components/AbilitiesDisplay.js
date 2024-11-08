import React from 'react';
import { focusData } from '../data/focusData';

function AbilitiesDisplay({ abilities, focuses }) {
  return (
    <div className="abilities-display">
      <h3>Abilities:</h3>
      <div className="abilities-list">
        {Object.entries(abilities).map(([ability, value]) => (
          <div key={ability} className="ability-item">
            <span className="ability-name">{ability.charAt(0).toUpperCase() + ability.slice(1)}:</span>
            <span className="ability-value">{value}</span>
            {focuses.length > 0 && (
              <ul className="focus-list">
                {focuses
                  .filter(focus => focusData[focus] && focusData[focus].ability.toLowerCase() === ability.toLowerCase())
                  .map(focus => (
                    <li key={focus}>{focus}</li>
                  ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AbilitiesDisplay;