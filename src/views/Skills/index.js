import React from 'react';
import styles from './index.module.sass';
import MainContentHOC from '../../hoc';
import Skill from '../../components/Skill';

const skillsList = [
  {
    name: 'Javascript',
    level: '90',
    color: '#FFD700',
  },
  {
    name: 'React JS',
    level: '90',
    color: '#61dafb',
  },
  {
    name: 'GraphQL',
    level: '70',
    color: '#D64292',
  },
  {
    name: 'HTML5',
    level: '95',
    color: '#e54c21',
  },
  {
    name: 'CSS3',
    level: '95',
    color: '#156fb1',
  },
  {
    name: 'Photoshop',
    level: '70',
    color: '#33c2eb',
  },
  {
    name: 'Node JS',
    level: '65',
    color: '#8cc03f',
  },
  {
    name: 'SQL',
    level: '70',
    color: '#a41c22',
  },
  {
    name: 'MySQL',
    level: '70',
    color: '#ec9221',
  },
  {
    name: 'PHP',
    level: '70',
    color: '#7477ae',
  },
];

export default function Skills() {
  return (
    <div id={styles.skills}>
      <MainContentHOC>
        <p className={styles.text}>Mi especialidad</p>
        <h1>Mis Hábilidades</h1>
        <div className={styles.list}>
          {skillsList.map(({name, level, color}, key) => {
            return <Skill name={name} level={level} color={color} />;
          })}
        </div>
      </MainContentHOC>
    </div>
  );
}
