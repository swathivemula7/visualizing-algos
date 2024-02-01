import React from 'react';
import './HomeSorting.css';
import SidebarSorting from './SidebarSorting';
import VisualSorting from './VisualSorting';

function HomeSorting() {
  return (
    <div className="home">
       <SidebarSorting />
       <VisualSorting />
   </div>
  )
}

export default HomeSorting;
