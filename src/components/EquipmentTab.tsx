import React from 'react';

interface EquipmentProps {
  weaponGroups?: string[];
}

const EquipmentTab: React.FC<EquipmentProps> = ({ weaponGroups }) => {
  return (
    <div>
      <h3>Equipment</h3>
      {/* Placeholder for future equipment handling */}
      {weaponGroups && weaponGroups.length > 0 ? (
        <ul>
          {weaponGroups.map((group, index) => (
            <li key={index}>{group}</li>
          ))}
        </ul>
      ) : (
        <p>No weapon groups yet.</p>
      )}
    </div>
  );
};

export default EquipmentTab;