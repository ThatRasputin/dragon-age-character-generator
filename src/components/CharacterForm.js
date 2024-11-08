import React, { useState, useEffect, useCallback } from 'react';
import { backgrounds, getBackgroundBenefits } from '../data/backgroundData';
import { focusData } from '../data/focusData';
import CharacterSummary from './CharacterSummary';
import AbilitiesDisplay from './AbilitiesDisplay';
import BiographyTab from './BiographyTab';
import BackgroundTab from './BackgroundTab';
import ClassTab from './ClassTab';
import ReviewTab from './ReviewTab';
import TabNavigation from './TabNav';
import '../styles/CharacterForm.css';

function CharacterForm() {
  const [activeTab, setActiveTab] = useState('background');
  const [character, setCharacter] = useState({
    name: '',
    pronouns: '',
    genderIdentity: '',
    genderPresentation: '',
    background: '',
    race: '',
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
  });
  const [incompatibleWarning, setIncompatibleWarning] = useState('');
  const [backgroundBenefits, setBackgroundBenefits] = useState(null);
  const [availableRaces, setAvailableRaces] = useState([]);

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
    if (character.background) {
      const benefits = getBackgroundBenefits(character.background, character.race);
      setBackgroundBenefits(benefits);

      if (character.class && benefits && !benefits.allowedClasses.includes(character.class)) {
        setIncompatibleWarning(`Note: ${character.background} does not typically allow the ${character.class} class.`);
      } else {
        setIncompatibleWarning('');
      }

      const selectedBackground = backgrounds.find(bg => bg.name === character.background);
      if (selectedBackground && selectedBackground.races) {
        setAvailableRaces(selectedBackground.races);
      } else {
        setAvailableRaces([]);
      }
    } else {
      setBackgroundBenefits(null);
      setIncompatibleWarning('');
      setAvailableRaces([]);
    }
  }, [character.background, character.class, character.race]);

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
            race: selectedBackground.races && selectedBackground.races.length === 1 ? selectedBackground.races[0] : '',
          };
        }
      }

      if (name === 'race') {
        // Reset background if the new race is not compatible with the current background
        const currentBackground = backgrounds.find(bg => bg.name === newState.background);
        if (currentBackground && !currentBackground.races.includes(value)) {
          newState = {
            ...newState,
            background: '',
            class: '',
            focus: '',
            focuses: [],
            languages: [],
          };
        }
      }
  
      return newState;
    });
  };

  const handleFocusChange = (focusName) => {
    setCharacter(prevState => ({
      ...prevState,
      focus: focusName
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(character);
  };

  return (
    <form onSubmit={handleSubmit} className="character-form">
      <div className="sidebar">
        <CharacterSummary character={character} />
        <AbilitiesDisplay abilities={character.abilities} focuses={character.focuses} focusData={focusData} />
      </div>
      <div className="main-content">
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="tab-content">
          {activeTab === 'background' && (
            <BackgroundTab 
              character={character} 
              handleInputChange={handleInputChange}
              handleFocusChange={handleFocusChange}
              incompatibleWarning={incompatibleWarning}
              backgroundBenefits={backgroundBenefits}
              focusData={focusData}
              availableRaces={availableRaces}
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
      </div>
    </form>
  );
}

export default CharacterForm;