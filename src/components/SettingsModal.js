import React, { useState, useEffect } from 'react';
import '../styles/modal.css';

function SettingsModal({ isOpen, onClose, character, setCharacter, darkMode, toggleDarkMode }) {
  const [storageLocation, setStorageLocation] = useState('localStorage');
  const [savedCharacters, setSavedCharacters] = useState([]);

  useEffect(() => {
    if (storageLocation === 'localStorage') {
      const characters = JSON.parse(localStorage.getItem('savedCharacters')) || [];
      setSavedCharacters(characters);
    }
  }, [storageLocation]);

  if (!isOpen) return null;

  const handleHealthRollOverride = (event) => {
    const value = parseInt(event.target.value) || 0;
    setCharacter(prevState => ({
      ...prevState,
      healthRollOverride: value
    }));
  };

  const handleStorageLocationChange = (e) => {
    setStorageLocation(e.target.value);
    // Implement logic to migrate data if needed
  };

  const handleDeleteCharacter = (index) => {
    const updatedCharacters = savedCharacters.filter((_, i) => i !== index);
    setSavedCharacters(updatedCharacters);
    localStorage.setItem('savedCharacters', JSON.stringify(updatedCharacters));
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Settings</h2>
        
        {/* Existing Health Roll Override setting */}
        <div>
          <label htmlFor="healthRollOverride">Health Roll Override:</label>
          <input
            type="number"
            id="healthRollOverride"
            name="healthRollOverride"
            value={character.healthRollOverride || ''}
            onChange={handleHealthRollOverride}
          />
        </div>

        {/* New Storage Location setting */}
        <div>
          <label>
            Storage Location:
            <select value={storageLocation} onChange={handleStorageLocationChange}>
              <option value="localStorage">Local Storage</option>
              {/* Add other storage options here in the future */}
            </select>
          </label>
        </div>

        {/* Saved Characters management */}
        <div>
          <h3>Saved Characters</h3>
          <ul>
            {savedCharacters.map((char, index) => (
              <li key={index}>
                {char.name} - {char.background}
                <button onClick={() => handleDeleteCharacter(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default SettingsModal;