import React from 'react';

function AbilitiesDisplay({ abilities }) {
  return (
    <div className="abilities-display">
      <h3>Abilities:</h3>
      <div className="abilities-list">
        {Object.entries(abilities).map(([ability, value]) => (
          <div key={ability} className="ability-item">
            <span className="ability-name">{ability.charAt(0).toUpperCase() + ability.slice(1)}:</span>
            <span className="ability-value">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AbilitiesDisplay;