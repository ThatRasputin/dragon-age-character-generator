import React from 'react';

interface BackgroundProps {
  setBackgroundData: React.Dispatch<React.SetStateAction<{
    race: string;
    abilityImprovement: number;
    focusChoice: string;
    rollTableResults: {
      focus: string;
      abilityScore: number;
      weaponGroup: string;
      language: string;
    };
  }>>;
}

const BackgroundTab: React.FC<BackgroundProps> = ({ setBackgroundData }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBackgroundData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h3>Background</h3>
      <input type="text" name="race" placeholder="Race" onChange={handleInputChange} />
      <input type="number" name="abilityImprovement" placeholder="+1 Ability Improvement" onChange={handleInputChange} />
      <input type="text" name="focusChoice" placeholder="Focus Choice" onChange={handleInputChange} />
      {/* Roll Table Results can be added here */}
    </div>
  );
};

export default BackgroundTab;