import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2023 Moja Aplikacja. Wszelkie prawa zastrzeżone.</p>
    </footer>
  );
};

export default Footer;