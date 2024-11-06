import React from 'react';

function TabNavigation({ activeTab, setActiveTab }) {
  return (
    <div className="tab-navigation">
      <button className={activeTab === 'biography' ? 'active' : ''} onClick={() => setActiveTab('biography')} type="button">Bio</button>
      <button className={activeTab === 'background' ? 'active' : ''} onClick={() => setActiveTab('background')} type="button">Background</button>
      <button className={activeTab === 'class' ? 'active' : ''} onClick={() => setActiveTab('class')} type="button">Class</button>
      <button className={activeTab === 'review' ? 'active' : ''} onClick={() => setActiveTab('review')} type="button">View Sheet</button>
    </div>
  );
}

export default TabNavigation;