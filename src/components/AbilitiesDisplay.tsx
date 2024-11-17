import React from 'react';

interface AbilitiesDisplayProps {
  background: {
    abilityImprovement: number;
    focusChoice: string;
  };
  classInfo: {
    primaryAbilities: string[];
  };
}

const AbilitiesDisplay: React.FC<AbilitiesDisplayProps> = ({ background, classInfo }) => {
  return (
    <div>
      <h2>Abilities Display</h2>

      {/* Display Primary Abilities */}
      {classInfo.primaryAbilities && classInfo.primaryAbilities.length > 0 && (
        <div>
          <h3>Primary Abilities</h3>
          <ul>
            {classInfo.primaryAbilities.map((ability, index) => (
              <li key={index}>{ability}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Display Background Ability Improvements */}
      <div>
        <h3>Background Ability Improvement</h3>
        <p>+{background.abilityImprovement} to an ability</p>
        <p><strong>Focus Choice:</strong> {background.focusChoice}</p>
      </div>

    </div>
  );
};

export default AbilitiesDisplay;