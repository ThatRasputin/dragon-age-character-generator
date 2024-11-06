import React from 'react';
import { calculateStartingHealth } from '../data/classData';

function CharacterSummary({ character }) {
  const name = character.name || 'Unnamed Character';
  const background = character.background || 'Unknown Background';
  const characterClass = character.class || 'Unknown Class';

  const maxHealth = character.class 
    ? calculateStartingHealth(character.class, character.abilities.constitution)
    : 'Not calculated';

  return (
    <div className="character-summary">
      <h2>{`${name}, the ${background} ${characterClass}`}</h2>
      <p>Pronouns: {character.pronouns || 'Not set'}</p>
      <p>Gender Identity: {character.genderIdentity || 'Not set'}</p>
      <p>Gender Presentation: {character.genderPresentation || 'Not set'}</p>
      <p>Max Health: {maxHealth}</p>
    </div>
  );
}

export default CharacterSummary;