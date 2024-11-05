import React, { useState, useEffect, useCallback } from 'react';
import { backgrounds } from './backgroundData';
import './CharacterForm.css';

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
  });
  const [incompatibleWarning, setIncompatibleWarning] = useState('');

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
    if (name === 'background') {
      const selectedBackground = backgrounds.find(bg => bg.name === value);
      if (selectedBackground) {
        setCharacter(prevState => ({
          ...prevState,
          [name]: value,
          class: '',
          focus: '',
          focuses: selectedBackground.focuses || [],
          languages: selectedBackground.languages || [],
        }));
      } else {
        setCharacter(prevState => ({ ...prevState, [name]: value }));
      }
    } else {
      setCharacter(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(character);
  };

  const classes = ["Mage", "Rogue", "Warrior"];

  const isSelectOption = (text) => /^Select\s\w+$/.test(text);

  const getOptionStyle = (option, allowedOptions) => {
    if (isSelectOption(option)) return {};
    if (!allowedOptions || allowedOptions.length === 0) return {};
    return allowedOptions.includes(option)
      ? { backgroundColor: 'lightgreen' }
      : { backgroundColor: '#ffcccc' }; // Light red for incompatible options
  };

  const renderAbilities = () => (
    <div className="abilities-display">
      <h3>Abilities:</h3>
      <div className="abilities-list">
        {Object.entries(character.abilities).map(([ability, value]) => (
          <div key={ability} className="ability-item">
            <span className="ability-name">{ability.charAt(0).toUpperCase() + ability.slice(1)}:</span>
            <span className="ability-value">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderChosenItem = (type) => {
    const value = character[type];
    return (
      <div className="chosen-item">
        <span className="chosen-label">Chosen {type.charAt(0).toUpperCase() + type.slice(1)}:</span>
        {value ? (
          <span className="chosen-value">{value}</span>
        ) : (
          <span className="not-chosen">Not chosen yet</span>
        )}
      </div>
    );
  };

  const renderBiographyTab = () => (
    <div>
      <h2>Biography</h2>
      <label htmlFor="pronouns">Pronouns:</label>
      <input
        type="text"
        id="pronouns"
        name="pronouns"
        value={character.pronouns}
        onChange={handleInputChange}
        placeholder="Enter pronouns (e.g., he/him, she/her, they/them)"
      />
      <label htmlFor="genderIdentity">Gender Identity:</label>
      <input
        type="text"
        id="genderIdentity"
        name="genderIdentity"
        value={character.genderIdentity}
        onChange={handleInputChange}
        placeholder="Enter gender identity"
      />
      <label htmlFor="genderPresentation">Gender Presentation:</label>
      <input
        type="text"
        id="genderPresentation"
        name="genderPresentation"
        value={character.genderPresentation}
        onChange={handleInputChange}
        placeholder="Enter gender presentation"
      />
    </div>
  );

  const renderBackgroundTab = () => (
    <div>
      <h2>Choose Your Background</h2>
      <select
        name="background"
        value={character.background}
        onChange={handleInputChange}
      >
        <option value="">Select Background</option>
        {backgrounds.map((bg, index) => (
          <option 
            key={index} 
            value={bg.name}
            style={getOptionStyle(bg.name, character.class ? backgrounds.filter(b => b.allowedClasses.includes(character.class)).map(b => b.name) : [])}
          >
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
              <li key={ability}>{ability}: +{adjustment}</li>
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

  const renderClassTab = () => (
    <div>
      <h2>Choose Your Class</h2>
      {renderChosenItem('background')}
      <select
        name="class"
        value={character.class}
        onChange={handleInputChange}
      >
        <option value="">Select Class</option>
        {classes.map((cls) => (
          <option 
            key={cls} 
            value={cls}
            style={getOptionStyle(cls, character.background ? backgrounds.find(bg => bg.name === character.background)?.allowedClasses : [])}
          >
            {cls}
          </option>
        ))}
      </select>
      {incompatibleWarning && <p className="warning">{incompatibleWarning}</p>}
      {character.class && (
        <div>
          <h3>Playing a {character.class}</h3>
          {/* Add class-specific information here */}
        </div>
      )}
    </div>
  );

  const renderReviewTab = () => (
    <div>
      <h2>Review Your Character</h2>
      <h3>Languages:</h3>
      <ul>
        {character.languages.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Finish</button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit}>
      <div className="character-name">
        <label htmlFor="name">Character Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={character.name}
          onChange={handleInputChange}
          placeholder="Enter character name"
        />
      </div>
      <div className="character-info">
        <div className="character-summary">
          <h2>Character Summary</h2>
          <p>Name: {character.name || 'Not set'}</p>
          <p>Pronouns: {character.pronouns || 'Not set'}</p>
          <p>Gender Identity: {character.genderIdentity || 'Not set'}</p>
          <p>Gender Presentation: {character.genderPresentation || 'Not set'}</p>
          <p>Background: {character.background || 'Not chosen'}</p>
          <p>Class: {character.class || 'Not chosen'}</p>
          <p>Chosen Focus: {character.focus || 'Not chosen'}</p>
        </div>
        {renderAbilities()}
      </div>
      <div className="tab-navigation">
        <button 
          className={activeTab === 'background' ? 'active' : ''} 
          onClick={() => setActiveTab('background')}
          type="button"
        >
          Background
        </button>
        <button 
          className={activeTab === 'class' ? 'active' : ''} 
          onClick={() => setActiveTab('class')}
          type="button"
        >
          Class
        </button>
        <button 
          className={activeTab === 'biography' ? 'active' : ''} 
          onClick={() => setActiveTab('biography')}
          type="button"
        >
          Biography
        </button>
        <button 
          className={activeTab === 'review' ? 'active' : ''} 
          onClick={() => setActiveTab('review')}
          type="button"
        >
          View Sheet
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'background' && renderBackgroundTab()}
        {activeTab === 'class' && renderClassTab()}
        {activeTab === 'biography' && renderBiographyTab()}
        {activeTab === 'review' && renderReviewTab()}
      </div>
    </form>
  );
}

export default CharacterForm;