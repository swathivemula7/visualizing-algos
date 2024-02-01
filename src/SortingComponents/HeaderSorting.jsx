import React,{useState} from 'react';
import './HeaderSorting.css';

function HeaderSorting() {
  return (
    <div className="header">
      <div className="header-logo">Algo<span>Visualizer</span></div>
      <div className="header__options">
         <h3 className="header__option" ><span>S</span>orting <span>M</span>ethods</h3>
      </div>
   </div>
  )
}

export default HeaderSorting;
