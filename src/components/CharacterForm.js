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
import '../styles/App.css';
import { runTestCase } from '../testing/UnitTesting';
import { testCase01 } from '../testing/TestCases';

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
        languages: []
    });

    const [incompatibleWarning, setIncompatibleWarning] = useState('');
    const [backgroundBenefits, setBackgroundBenefits] = useState(null);

    const updateAbilities = useCallback(() => {
        const newAbilities = {
            strength: 0, dexterity: 0, constitution: 0, magic: 0,
            perception: 0, willpower: 0, communication: 0, cunning: 0
        };

        if (character.background) {
            const backgroundData = backgrounds.find(bg => bg.name === character.background);
            if (backgroundData && backgroundData.abilityAdjustments) {
                Object.entries(backgroundData.abilityAdjustments).forEach(([ability, adjustment]) => {
                    newAbilities[ability] += adjustment;
                });
            }
        }

        setCharacter(prevState => ({
            ...prevState,
            abilities: newAbilities
        }));
    }, [character.background]);

    useEffect(() => {
        updateAbilities();
    }, [updateAbilities]);

    useEffect(() => {
        /* This effect intentionally depends only on character.background and character.race
        |  rather than the entire character object. This prevents unnecessary re-renders
        |  when other properties of character change, as this effect only needs to run
        |  when the background or race is updated. The ESLint warning is acknowledged
        |  but ignored for performance reasons.
        */
      
        console.warn("Effect triggered in CharacterForm");
        console.warn("Character:", character);
        
        if (character.background) {
          console.warn("Getting benefits for:", character.background, character.race);
          const benefits = getBackgroundBenefits(character.background, character.race);
          console.warn("Retrieved background benefits:", benefits);
          
          if (benefits) {
            setBackgroundBenefits(benefits);
          } else {
            console.error("Benefits are null or undefined");
            setBackgroundBenefits(null);
          }
        } else {
          console.warn("No background selected, setting benefits to null");
          setBackgroundBenefits(null);
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [character.background, character.race]);

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.warn(`Changing ${name} to ${value}`);
        setCharacter(prevState => ({
          ...prevState,
          [name]: value
        }));
      };

    const handleFocusChange = (focusName) => {
        setCharacter(prevState => ({
            ...prevState,
            focus: focusName
        }));
    };

    // Function to run a test case
    const runTest = (testCase) => {
        runTestCase(testCase, setCharacter, handleInputChange);
    };

    return (
        <div className="character-form">
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
                    {activeTab === 'review' && (
                        <ReviewTab character={character} />
                    )}
                </div>
            </div>
            {/* Add a button for running the test case */}
            <button onClick={() => runTest(testCase01)}>Run Test Case 01</button>
        </div>
    );
}

export default CharacterForm;