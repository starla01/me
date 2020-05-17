import React from 'react';
import styles from './index.module.sass';
import MainContentHOC from '../../hoc';

export default function Home() {
  return (
    <div id={styles.home}>
      <MainContentHOC>
        <p className={styles.text}>Hola!</p>
        <h1 className={`${styles.title} c-secondary-color-text`}>
          Soy Fernando
        </h1>
        <p className={styles.text}>Frontend Developer Sr. at Elektra</p>
        <p className={styles.text}>@applespate, Facebook DevC,</p>
        <p className={styles.text}>Developer, Code lover</p>
      </MainContentHOC>
    </div>
  );
}
