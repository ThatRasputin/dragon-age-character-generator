import React from 'react';
import DarkModeToggle from './DarkModeToggle';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
  saveCharacter: () => void;
  loadCharacter: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose, darkMode, toggleDarkMode, saveCharacter, loadCharacter }) => {
  if (!isOpen) return null;

  return (
    <div className="settings-modal">
      <div className="settings-content">
        <h2>Settings</h2>
        <button onClick={onClose}>Close</button>

        {/* Display Mode Switch */}
        <div className="setting-item">
          <label htmlFor="dark-mode-toggle">Display Mode:</label>
          <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>

        {/* Save/Load Character */}
        <div className="setting-item">
          <button onClick={saveCharacter}>Save Character</button>
          <button onClick={loadCharacter}>Load Character</button>
        </div>

        {/* Future Overrides Tab */}
        <div className="setting-item">
          <h3>Overrides (Future)</h3>
          <p>Feature coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;