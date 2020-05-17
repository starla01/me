import React from 'react';
import styles from './index.module.sass';

export default function MainContentHOC({children}) {
  return (
    <div className={`${styles.mainContent} bg-third-back`}>{children}</div>
  );
}
