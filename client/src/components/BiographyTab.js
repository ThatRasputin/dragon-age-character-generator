import React from 'react';

function BiographyTab({ character, handleInputChange }) {
  return (
    <div className="biography-tab">
      <h2>Biography</h2>
      <div className="character-name">
        <label htmlFor="name">Character Name:</label>
        <input type="text" id="name" name="name" value={character.name} onChange={handleInputChange} placeholder="Enter character name" />
      </div>
      <div>
        <label htmlFor="pronouns">Pronouns:</label>
        <input type="text" id="pronouns" name="pronouns" value={character.pronouns} onChange={handleInputChange} placeholder="Enter pronouns (e.g., he/him, she/her, they/them)" />
      </div>
      <div>
        <label htmlFor="genderIdentity">Gender Identity:</label>
        <input type="text" id="genderIdentity" name="genderIdentity" value={character.genderIdentity} onChange={handleInputChange} placeholder="Enter gender identity" />
      </div>
      <div>
        <label htmlFor="genderPresentation">Gender Presentation:</label>
        <input type="text" id="genderPresentation" name="genderPresentation" value={character.genderPresentation} onChange={handleInputChange} placeholder="Enter gender presentation" />
      </div>
    </div>
  );
}

export default BiographyTab;