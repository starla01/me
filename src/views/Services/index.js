import React from 'react';
import styles from './index.module.sass';
import MainContentHOC from '../../hoc';
import IconText from '../../components/IconText';

const servicesList = [
  {
    id: 0,
    name: 'Frontend',
    icon: 'web',
  },
  {
    id: 1,
    name: 'UI Design',
    icon: 'brush',
  },
  {
    id: 2,
    name: 'Project Management',
    icon: 'work',
  },
  {
    id: 4,
    name: 'Interaction Design',
    icon: 'gamepad',
  },
  {
    id: 5,
    name: 'User Experience',
    icon: 'developer_board',
  },
  {
    id: 6,
    name: 'eCommerce',
    icon: 'shopping_cart',
  },
];

export default function Services() {
  return (
    <div id={styles.services}>
      <MainContentHOC>
        <p className={styles.text}>¿Lo que hago?</p>
        <h1 className="c-secondary-color-text">
          Aquí está algo de mi experiencia
        </h1>
        <div className={styles.list}>
          {servicesList.map((element) => {
            return <IconText props={element} />;
          })}
        </div>
      </MainContentHOC>
    </div>
  );
}
