import React from 'react';
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div class={styles.bar}>
      <Link href="/" ><a class={styles.bar__button}> Home</a></Link>
      <Link href="/Portfolio"><a class={styles.bar__button}>Portfolio</a></Link>
      <Link href="/Contact" ><a class={styles.bar__button}>Contact</a></Link>
      <Link href="/Test" ><a class={styles.bar__button}>Test</a></Link>
    </div>
  );
}
