import React from 'react';

interface BiographyProps {
  setBiographyData: React.Dispatch<React.SetStateAction<{
    name: string;
    pronouns: string;
    genderIdentity: string;
    genderPresentation: string;
  }>>;
}

const BiographyTab: React.FC<BiographyProps> = ({ setBiographyData }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBiographyData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h3>Biography</h3>
      <input type="text" name="name" placeholder="Name" onChange={handleInputChange} />
      <input type="text" name="pronouns" placeholder="Pronouns" onChange={handleInputChange} />
      <input type="text" name="genderIdentity" placeholder="Gender Identity" onChange={handleInputChange} />
      <input type="text" name="genderPresentation" placeholder="Gender Presentation" onChange={handleInputChange} />
    </div>
  );
};

export default BiographyTab;