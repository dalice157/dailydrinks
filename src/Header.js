import React from 'react'
import styles from './Header.scss';

const Header= ({logo}) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>{logo}</h1>
    </div>
  )
}


export default Header;