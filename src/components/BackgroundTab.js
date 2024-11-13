import React from 'react';
import { backgrounds } from '../data/backgroundData';
import { formatFocusForDisplay } from './Utils';

function BackgroundTab({ 
  character, 
  handleInputChange, 
  handleFocusChange, 
  incompatibleWarning, 
  backgroundBenefits, 
  focusData,
  availableRaces
}) {
  console.warn("BackgroundTab rendering");
  console.warn("Character:", character);
  console.warn("Background Benefits:", backgroundBenefits);

  const backgroundOptions = backgrounds.map(bg => bg.name);

  if (!backgroundBenefits) {
    console.warn("Background benefits are null. Rendering loading message.");
    return <div>Loading background benefits...</div>;
  }

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

      {availableRaces.length > 1 && (
        <div className="form-group">
          <label htmlFor="race">Choose a race:</label>
          <select
            id="race"
            name="race"
            value={character.race}
            onChange={handleInputChange}
          >
            <option value="">Select a race</option>
            {availableRaces.map(race => (
              <option key={race} value={race}>{race}</option>
            ))}
          </select>
        </div>
      )}

      {character.background && (
        <div className="background-details">
          <h3>Background Details</h3>
          <p>{backgrounds.find(bg => bg.name === character.background).description}</p>

          <h4>Ability Adjustments</h4>
          {backgroundBenefits.abilityAdjustments && Object.keys(backgroundBenefits.abilityAdjustments).length > 0 ? (
            <ul>
              {Object.entries(backgroundBenefits.abilityAdjustments).map(([ability, adjustment]) => (
                <li key={ability}>{ability}: {adjustment}</li>
              ))}
            </ul>
          ) : (
            <p>No ability adjustments</p>
          )}

          <h4>Focus Options</h4>
          {backgroundBenefits.focusOptions && backgroundBenefits.focusOptions.length > 0 ? (
            <div className="focus-options">
              {backgroundBenefits.focusOptions.map((focusName, index) => {
                const focusDetails = focusData && focusData[focusName];
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
                    <label htmlFor={`focus-${index}`}>
                      {formatFocusForDisplay(focusName, focusDetails)}
                    </label>
                  </div>
                ) : null;
              })}
            </div>
          ) : (
            <p>No focus options available</p>
          )}

          <h4>Languages</h4>
          {backgroundBenefits.languages && backgroundBenefits.languages.length > 0 ? (
            <ul>
              {backgroundBenefits.languages.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          ) : (
            <p>No additional languages</p>
          )}

          <h4>Allowed Classes</h4>
          {backgroundBenefits.allowedClasses && backgroundBenefits.allowedClasses.length > 0 ? (
            <ul>
              {backgroundBenefits.allowedClasses.map((className, index) => (
                <li key={index}>{className}</li>
              ))}
            </ul>
          ) : (
            <p>No class restrictions</p>
          )}

          <h4>Roll Table</h4>
          {backgroundBenefits.rollTable ? (
            Array.isArray(backgroundBenefits.rollTable) ? (
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
                      <td>{typeof row.result === 'string' ? row.result : formatFocusForDisplay(row.result.focus, row.result)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : typeof backgroundBenefits.rollTable === 'object' ? (
              Object.entries(backgroundBenefits.rollTable).map(([race, table]) => (
                <React.Fragment key={race}>
                  <h5>{race}</h5>
                  <table className="roll-table">
                    <thead>
                      <tr>
                        <th>Roll</th>
                        <th>Result</th>
                      </tr>
                    </thead>
                    <tbody>
                      {table.map((row, index) => (
                        <tr key={index}>
                          <td>{row.roll}</td>
                          <td>{typeof row.result === 'string' ? row.result : formatFocusForDisplay(row.result.focus, row.result)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </React.Fragment>
              ))
            ) : (
              <p>Roll table format is not recognized</p>
            )
          ) : (
            <p>No roll table available for this background</p>
          )}
        </div>
      )}

      {incompatibleWarning && (
        <p className="warning">{incompatibleWarning}</p>
      )}
    </div>
  );
}

export default BackgroundTab;