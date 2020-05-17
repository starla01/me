import React from 'react';
import styles from './index.module.sass';

export default function Skill({name, color, level}) {
  return (
    <div
      className={styles.skill}
      style={{
        border: `2px solid ${color}`,
      }}>
      <div
        className={styles.background}
        style={{
          width: `${level}%`,
          background: color,
        }}></div>
      <div className={styles.name}>{name}</div>
    </div>
  );
}
