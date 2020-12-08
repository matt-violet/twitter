import React from 'react';
import './SidebarOption.css';

function SidebarOption({ active, text, Icon, updateCurrentPage, visitUserProfile }) {
  return (
    <div
      className={`sidebarOption ${active && 'sidebarOption--active'}`}
      onClick={text === 'Profile' ? ()=> visitUserProfile('ayedoemateo') : () => updateCurrentPage(text)}
    >
      <Icon className="sidebarOption__icon" />
      <h2 className="sidebarOption__text">{text}</h2>
    </div>
  )
}

export default SidebarOption;
