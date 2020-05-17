import React from 'react';
import styles from './index.module.sass';
import {Link} from 'react-router-dom';

export default function Menu() {
  return (
    <div id={styles.menu} className="bg-main-color-back">
      <div className={styles.subMenu}>
        <ul className={styles.options}>
          <li className={`${styles.option} hb-main-color-back`}>
            <Link className={`c-equal-light ${styles.linkMenu}`} to="/home">
              Home
            </Link>
          </li>
          <li className={styles.option}>
            <Link className={`c-equal-light ${styles.linkMenu}`} to="/about">
              About
            </Link>
          </li>
          <li className={styles.option}>
            <Link className={`c-equal-light ${styles.linkMenu}`} to="/services">
              Services
            </Link>
          </li>
          <li className={styles.option}>
            <Link className={`c-equal-light ${styles.linkMenu}`} to="/skills">
              Skills
            </Link>
          </li>
          <li className={styles.option}>
            <Link
              className={`c-equal-light ${styles.linkMenu}`}
              to="/experience">
              Experience
            </Link>
          </li>
          <li className={styles.option}>
            <Link className={`c-equal-light ${styles.linkMenu}`} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
