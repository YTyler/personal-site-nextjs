import React from 'react';
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <div class={styles.bar}>
      <a href="/" class={styles.bar__button}>Home</a>
      <a href="Portfolio" class={styles.bar__button}>Portfolio</a>
      <a href="Contact" class={styles.bar__button}>Contact Info</a>
    </div>
  );
}
