import React, { useState, useEffect } from 'react';
import CharacterForm from './components/CharacterForm';
import SettingsModal from './components/SettingsModal';
import './styles/App.css';
import './styles/colors.css';

function DarkModeToggle({ darkMode, toggleDarkMode }) {
  return (
    <button onClick={toggleDarkMode} style={{ marginLeft: '10px' }}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [character, setCharacter] = useState({
    // Initialize with default character state
    healthRollOverride: 0,
    // Add other character properties here
  });

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    document.body.classList.toggle('light-mode', !darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

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