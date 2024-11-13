import React from 'react';
import { calculateStartingHealth } from '../data/classData';
import { getRaceByName } from '../data/raceData';

function CharacterSummary({ character }) {
  const name = character.name || "Unnamed Character";
  const background = character.background || "Unknown Background";
  const race = typeof character.race === 'object' ? character.race.name || "Unknown Race" : character.race || "Unknown Race";
  const characterClass = character.class || "Unknown Class";

  const maxHealth = character.class && character.abilities.constitution
    ? calculateStartingHealth(character.class, character.abilities.constitution)
    : "Not calculated";

  const raceData = getRaceByName(race);
  const baseSpeed = raceData ? raceData.baseSpeed : 0;
  const speed = baseSpeed + (character.abilities.dexterity || 0);

  return (
    <div className="character-summary">
      <h2 className="character-summary-title">{name}, the {race} {characterClass}</h2>
      <p>Pronouns: {character.pronouns || "Not set"}</p>
      <p>Gender Identity: {character.genderIdentity || "Not set"}</p>
      <p>Gender Presentation: {character.genderPresentation || "Not set"}</p>
      <p>Background: {background}</p>
      <p>Max Health: {maxHealth}</p>
      <p>Speed: {speed}</p>
    </div>
  );
}

export default CharacterSummary;