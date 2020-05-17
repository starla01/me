import React from 'react';
import styles from './index.module.sass';

export default function IconText({props}) {
  const {id, name, icon} = props;
  return (
    <div key={id} className={`${styles.element} ba bw pa5`}>
      <span className="material-icons c-secondary-color-text">{icon}</span>
      <p className="c-main-color-text">{name}</p>
    </div>
  );
}
