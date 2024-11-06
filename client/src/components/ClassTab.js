import React from 'react';
import { backgrounds } from '../data/backgroundData';
import { classes, getClassDetails } from '../data/classData';

function ClassTab({ character, handleInputChange, incompatibleWarning }) {
  const classDetails = character.class ? getClassDetails(character.class) : null;

  const getOptionClass = (option, allowedOptions) => {
    if (!allowedOptions || allowedOptions.length === 0) return '';
    return allowedOptions.includes(option) ? '🟢 ' : '🔴 ';
  };

  return (
    <div>
      <h2>Choose Your Class</h2>
      <select name="class" value={character.class} onChange={handleInputChange}>
        <option value="">Select Class</option>
        {classes.map((cls) => (
          <option key={cls.name} value={cls.name}>
            {getOptionClass(cls.name, character.background ? backgrounds.find(bg => bg.name === character.background)?.allowedClasses : [])}
            {cls.name}
          </option>
        ))}
      </select>
      {incompatibleWarning && <p className="warning">{incompatibleWarning}</p>}
      {classDetails && (
        <div>
          <h3>Playing a {character.class}</h3>
          <p>{classDetails.description}</p>
          <h4>Primary Abilities:</h4>
          <ul>
            {classDetails.primaryAbilities.map((ability, index) => (
              <li key={index}>{ability}</li>
            ))}
          </ul>
          <h4>Weapon Groups:</h4>
          <ul>
            {classDetails.weaponGroups.map((weapon, index) => (
              <li key={index}>{weapon}</li>
            ))}
          </ul>
          <h4>Armor Training:</h4>
          <ul>
            {classDetails.armorTraining.map((armor, index) => (
              <li key={index}>{armor}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ClassTab;