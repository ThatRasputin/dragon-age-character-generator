import React from 'react';

interface TabNavProps {
  activeTab: string;
  setActiveTab: (tabName: string) => void;
}

const TabNav: React.FC<TabNavProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="tab-nav">
      <button
        className={activeTab === 'biography' ? 'active' : ''}
        onClick={() => setActiveTab('biography')}
      >
        Biography
      </button>

      <button
        className={activeTab === 'background' ? 'active' : ''}
        onClick={() => setActiveTab('background')}
      >
        Background
      </button>

      <button
        className={activeTab === 'class' ? 'active' : ''}
        onClick={() => setActiveTab('class')}
      >
        Class
      </button>

      <button
        className={activeTab === 'equipment' ? 'active' : ''}
        onClick={() => setActiveTab('equipment')}
      >
        Equipment
      </button>
    </nav>
  );
};

export default TabNav;