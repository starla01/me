import React from 'react';
import styles from './index.module.sass';

export default function Footer() {
  return (
    <div id={styles.footer} className="bg-secondary-back">
      <p className={styles.lineFooter}>
        CV. Fernando Robles Rivera™ y sus sitios son marcas registradas de
        Fernando Robles Rivera™, Inc. © 2020
      </p>
      <p className={styles.lineFooter}>
        Este sitio esta desarrollado con React JS. de Facebook Company.
      </p>
    </div>
  );
}
