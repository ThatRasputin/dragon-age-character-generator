import React, { useState } from 'react';
import BiographyTab from './BiographyTab';
import BackgroundTab from './BackgroundTab';
import ClassTab from './ClassTab';
import EquipmentTab from './EquipmentTab';
import CharacterSummary from './CharacterSummary';
import AbilitiesDisplay from './AbilitiesDisplay';
import SettingsModal from './SettingsModal';
import { getBackgroundByName } from '../data/backgroundData'; // Assuming this function fetches background info

const CharacterForm: React.FC = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState('biography');

  // State for Biography
  const [biographyData, setBiographyData] = useState({
    name: '',
    pronouns: '',
    genderIdentity: '',
    genderPresentation: ''
  });

  // State for Background
  const [backgroundData, setBackgroundData] = useState({
    race: '',
    abilityImprovement: 0,
    focusChoice: '',
    rollTableResults: {
      focus: '',
      abilityScore: 0,
      weaponGroup: '',
      language: ''
    },
    backgroundName: ''
  });

  // State for Class
  const [classData, setClassData] = useState({
    className: '',
    baseHealth: 0,
    primaryAbilities: [],
    classPowers: [],
    weaponGroups: [],
    spellLists: []
  });

  // State for Settings (e.g., display mode)
  const [settings, setSettings] = useState({
    displayMode: 'light',
    localSaveEnabled: false
  });

  // Helper function to determine compatibility between class and background
  const getOptionClass = (option: string, allowedOptions?: string[]): string => {
    if (!allowedOptions || allowedOptions.length === 0) return '';
    return allowedOptions.includes(option) ? '🟢 ' : '🔴 ';
  };

  // Fetching allowed classes based on the selected background
  const currentBackground = getBackgroundByName(backgroundData.backgroundName);
  const allowedClasses = currentBackground?.allowedClasses || [];

  // Compatibility result between selected class and background
  const compatibilityResult = getOptionClass(classData.className, allowedClasses);

  return (
    <div>
      {/* Settings Modal */}
      <SettingsModal settings={settings} setSettings={setSettings} />

      {/* Tab Navigation */}
      <nav>
        <button onClick={() => setActiveTab('biography')}>Biography</button>
        <button onClick={() => setActiveTab('background')}>Background</button>
        <button onClick={() => setActiveTab('class')}>Class</button>
        <button onClick={() => setActiveTab('equipment')}>Equipment</button>
      </nav>

      {/* Render Active Tab */}
      {activeTab === 'biography' && <BiographyTab setBiographyData={setBiographyData} />}
      {activeTab === 'background' && <BackgroundTab setBackgroundData={setBackgroundData} />}
      {activeTab === 'class' && <ClassTab setClassData={setClassData} />}
      {activeTab === 'equipment' && <EquipmentTab weaponGroups={classData.weaponGroups} />}

      {/* Display Components */}
      <CharacterSummary 
        biography={biographyData} 
        background={backgroundData} 
        classInfo={classData} 
      />
      
      <AbilitiesDisplay 
        background={backgroundData}
        classInfo={classData}
      />

      {/* Show Compatibility Result */}
      {classData.className && backgroundData.backgroundName && (
        <div>
          Class Compatibility with Background:
          <span>{compatibilityResult}</span> {/* 🟢 or 🔴 */}
        </div>
      )}
      
    </div>
  );
};

export default CharacterForm;