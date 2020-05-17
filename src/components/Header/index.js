import React from 'react';
import styles from './index.module.sass';
import logo from '../../images/logocv.png';
import {Link} from 'react-router-dom';

export default function Header({setIsLightMode, isLightMode}) {
  return (
    <div className={`bg-main-back ${styles.header}`}>
      <Link to={'/'} className={`c-base ${styles.typeLogo}`}>
        <div id={styles.left}>
          <div id={styles.logo}>
            <img src={logo} alt="Fernando Robles Rivera" />
          </div>
          <p id={styles.name}>Fernando Robles Rivera</p>
        </div>
      </Link>

      <div
        className={styles.right}
        onClick={() => setIsLightMode(!isLightMode)}>
        <div id={styles.toggleTheme} className="bg-main-color-back">
          <div
            className={`bg-main-back ${styles.cirleButton} ${
              (isLightMode && styles.left) || styles.right
            }`}>
            {(isLightMode && (
              <span className="material-icons">nights_stay</span>
            )) || <span className="material-icons">wb_sunny</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
