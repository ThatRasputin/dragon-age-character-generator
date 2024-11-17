import { useState, useEffect } from 'react';
import CharacterForm from './components/CharacterForm';
import SettingsModal from './components/SettingsModal';
import './styles/App.css';
import './styles/colors.css';

interface Character {
  name: string;
  pronouns: string;
  genderIdentity: string;
  genderPresentation: string;
  background: string;
  race: string;
  class: string;
  focus: string;
  abilities: {
    strength: number;
    dexterity: number;
    constitution: number;
    magic: number;
    perception: number;
    willpower: number;
    communication: number;
    cunning: number;
  };
  focuses: string[];
  languages: string[];
  healthRollOverride?: number;
}

interface DarkModeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

function DarkModeToggle({ darkMode, toggleDarkMode }: DarkModeToggleProps) {
  return (
    <button onClick={toggleDarkMode} style={{ marginLeft: '10px' }}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [character, setCharacter] = useState<Character>({
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
    healthRollOverride: 0
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prevMode => !prevMode);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="App-header">
        <h1>Dragon AGE Character Builder</h1>
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <button onClick={() => setIsSettingsOpen(true)}>Settings</button>
      </header>
      <main className="App-content">
        <CharacterForm character={character} setCharacter={setCharacter} />
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 Dragon AGE Character Builder</p>
      </footer>
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        character={character}
        setCharacter={setCharacter}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
    </div>
  );
}

export default App;