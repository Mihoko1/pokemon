import React from 'react';
import {Link} from 'react-router-dom';
import logoImg from './logo.png';

import styles from './Header.module.css';

const Header = () => {
  return(
    <header className={styles.header}>
      <h1><img className={styles.logoImg} src = {logoImg} alt="pokemon" /><span className={styles.name}>Pokemon Directory</span></h1>
      
    </header>
  );
}

export default Header; 
