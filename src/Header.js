import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './Header.css';

const Header= ({logo}) => {
  return (
    <div className="Header">
      <h1 className="logo">{logo}</h1>
    </div>
  )
}


export default CSSModules(Header, styles);