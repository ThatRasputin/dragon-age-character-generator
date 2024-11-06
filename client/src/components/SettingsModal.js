// SettingsModal.js
import React from 'react';

function SettingsModal({ isOpen, onClose, character, setCharacter }) {
  if (!isOpen) return null;

  const handleHealthRollOverride = (event) => {
    const value = parseInt(event.target.value) || 0;
    setCharacter(prevState => ({
      ...prevState,
      healthRollOverride: value
    }));
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Settings</h2>
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
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default SettingsModal;