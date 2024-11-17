import React from 'react';

interface ClassProps {
  setClassData: React.Dispatch<React.SetStateAction<{
    className: string;
    baseHealth: number;
    primaryAbilities: string[];
    classPowers: string[];
    weaponGroups: string[];
    spellLists?: string[];
  }>>;
}

const ClassTab: React.FC<ClassProps> = ({ setClassData }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setClassData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h3>Class</h3>
      <input type="text" name="className" placeholder="Class Name" onChange={handleInputChange} />
      <input type="number" name="baseHealth" placeholder="Base Health" onChange={handleInputChange} />
      {/* Other inputs for primary abilities, class powers */}
    </div>
  );
};

export default ClassTab;
 
 /*
 | const getOptionClass = (option: string, allowedOptions?: string[]) => {
 |   if (!allowedOptions || allowedOptions.length === 0) return '';
 |   return allowedOptions.includes(option) ? '🟢 ' : '🔴 ';
  | };
*/