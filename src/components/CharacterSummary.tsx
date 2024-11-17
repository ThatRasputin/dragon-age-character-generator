import React from 'react';

interface CharacterSummaryProps {
  biography: {
    name: string;
    pronouns: string;
    genderIdentity: string;
    genderPresentation: string;
  };
  background: {
    race: string;
  };
  classInfo: {
    className: string;
    baseHealth: number;
    weaponGroups: string[];
  };
}

const CharacterSummary: React.FC<CharacterSummaryProps> = ({ biography, background, classInfo }) => {
  return (
    <div>
      <h2>Character Summary</h2>
      <p><strong>Name:</strong> {biography.name}</p>
      <p><strong>Pronouns:</strong> {biography.pronouns}</p>
      <p><strong>Gender Identity:</strong> {biography.genderIdentity}</p>
      <p><strong>Gender Presentation:</strong> {biography.genderPresentation}</p>
      <p><strong>Race:</strong> {background.race}</p>
      <p><strong>Class Name:</strong> {classInfo.className}</p>
      <p><strong>Base Health:</strong> {classInfo.baseHealth}</p>

      {/* Display Weapon Groups */}
      {classInfo.weaponGroups && classInfo.weaponGroups.length > 0 && (
        <div>
          <h3>Weapon Groups</h3>
          <ul>
            {classInfo.weaponGroups.map((group, index) => (
              <li key={index}>{group}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CharacterSummary;