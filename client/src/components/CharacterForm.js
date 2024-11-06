import React, { useState, useEffect, useCallback } from 'react';
import { backgrounds } from '../data/backgroundData';
import { getAllClassNames } from '../data/classData';
//import { getRaceByName } from '../data/raceData';
import CharacterSummary from './CharacterSummary';
import AbilitiesDisplay from './AbilitiesDisplay';
import BiographyTab from './BiographyTab';
import BackgroundTab from './BackgroundTab';
import ClassTab from './ClassTab';
import ReviewTab from './ReviewTab';
import TabNavigation from './TabNavigation';
import SettingsModal from './SettingsModal';
import '../styles/CharacterForm.css';

function CharacterForm() {
  const [activeTab, setActiveTab] = useState('background');
  const [character, setCharacter] = useState({
    name: '',
    pronouns: '',
    genderIdentity: '',
    genderPresentation: '',
    background: '',
    class: '',
    focus: '',
    abilities: {
      strength: 0,
      dexterity: 0,
      constitution: 0,
      magic: 0,
      perception: 0,
      willpower: 0,
      communication: 0,
      cunning: 0
    },
    focuses: [],
    languages: [],
    healthRollOverride: null,
  });
  const [incompatibleWarning, setIncompatibleWarning] = useState('');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const updateAbilities = useCallback(() => {
    const newAbilities = {
      strength: 0,
      dexterity: 0,
      constitution: 0,
      magic: 0,
      perception: 0,
      willpower: 0,
      communication: 0,
      cunning: 0
    };
    if (character.background) {
      const backgroundData = backgrounds.find(bg => bg.name === character.background);
      if (backgroundData && backgroundData.abilityAdjustments) {
        Object.entries(backgroundData.abilityAdjustments).forEach(([ability, adjustment]) => {
          newAbilities[ability] += adjustment;
        });
      }
    }
    setCharacter(prevState => ({...prevState, abilities: newAbilities}));
  }, [character.background]);

  useEffect(() => {
    updateAbilities();
  }, [updateAbilities]);

  useEffect(() => {
    if (character.background && character.class) {
      const backgroundData = backgrounds.find(bg => bg.name === character.background);
      if (backgroundData && !backgroundData.allowedClasses.includes(character.class)) {
        setIncompatibleWarning(`Note: ${character.background} does not typically allow the ${character.class} class.`);
      } else {
        setIncompatibleWarning('');
      }
    } else {
      setIncompatibleWarning('');
    }
  }, [character.background, character.class]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCharacter(prevState => {
      let newState = { ...prevState, [name]: value };

      if (name === 'background') {
        const selectedBackground = backgrounds.find(bg => bg.name === value);
        if (selectedBackground) {
          newState = {
            ...newState,
            class: '',
            focus: '',
            focuses: selectedBackground.focuses || [],
            languages: selectedBackground.languages || [],
          };
        }
      }

      return newState;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(character);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="character-info">
        <CharacterSummary character={character} />
        <AbilitiesDisplay abilities={character.abilities} />
        <button className="settings-gear" onClick={() => setIsSettingsOpen(true)}>⚙️</button>
      </div>
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="tab-content">
        {activeTab === 'background' && (
          <BackgroundTab 
            character={character} 
            handleInputChange={handleInputChange}
            incompatibleWarning={incompatibleWarning}
          />
        )}
        {activeTab === 'class' && (
          <ClassTab 
            character={character} 
            handleInputChange={handleInputChange}
            incompatibleWarning={incompatibleWarning}
          />
        )}
        {activeTab === 'biography' && (
          <BiographyTab 
            character={character} 
            handleInputChange={handleInputChange} 
          />
        )}
        {activeTab === 'review' && <ReviewTab character={character} />}
      </div>
      <SettingsModal 
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        character={character}
        setCharacter={setCharacter}
      />
    </form>
  );
}

export default CharacterForm;