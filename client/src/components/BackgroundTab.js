import React from 'react';
import { backgrounds } from '../data/backgroundData';

function BackgroundTab({ character, handleInputChange, handleFocusChange, incompatibleWarning, backgroundBenefits, focusData }) {
  console.log('BackgroundTab rendered');
  console.log('backgroundBenefits:', backgroundBenefits);
  console.log('focusData:', focusData);
  const backgroundOptions = backgrounds.map(bg => bg.name);

  return (
    <div className="background-tab">
      <h2>Background</h2>
      <div className="form-group">
        <label htmlFor="background">Choose a background:</label>
        <select
          id="background"
          name="background"
          value={character.background}
          onChange={handleInputChange}
        >
          <option value="">Select a background</option>
          {backgroundOptions.map(bg => (
            <option key={bg} value={bg}>{bg}</option>
          ))}
        </select>
      </div>

      {character.background && backgroundBenefits && (
        <div className="background-details">
          <h3>Background Details</h3>
          <p>{backgrounds.find(bg => bg.name === character.background).description}</p>
          
          <h4>Ability Adjustments</h4>
          <ul>
            {Object.entries(backgroundBenefits.abilityAdjustments).map(([ability, adjustment]) => (
              <li key={ability}>{ability}: +{adjustment}</li>
            ))}
          </ul>

          <h4>Focus Options</h4>
          <div className="focus-options">
            {backgroundBenefits.focusOptions.map((focusName, index) => {
              const focusDetails = focusData[focusName];
              return focusDetails ? (
                <div key={index} className="focus-option">
                  <input
                    type="radio"
                    id={`focus-${index}`}
                    name="focus"
                    value={focusName}
                    checked={character.focus === focusName}
                    onChange={(e) => handleFocusChange(e.target.value)}
                  />
                  <label htmlFor={`focus-${index}`}>{`${focusDetails.ability} (${focusName})`}</label>
                </div>
              ) : null;
            })}
          </div>

          <h4>Languages</h4>
          <ul>
            {backgroundBenefits.languages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>

          <h4>Allowed Classes</h4>
          <ul>
            {backgroundBenefits.allowedClasses.map((className, index) => (
              <li key={index}>{className}</li>
            ))}
          </ul>

          <h4>Roll Table</h4>
          <table className="roll-table">
            <thead>
              <tr>
                <th>Roll</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {backgroundBenefits.rollTable.map((row, index) => (
                <tr key={index}>
                  <td>{row.roll}</td>
                  <td>{row.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {incompatibleWarning && <p className="warning">{incompatibleWarning}</p>}
    </div>
  );
}

export default BackgroundTab;