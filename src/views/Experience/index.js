import React from 'react';
import styles from './index.module.sass';
import MainContentHOC from '../../hoc';

const experienceList = [
  {
    job: 'Frontend Sr.',
    place: 'Elektra',
    time: 'nov. de 2018 - Actualidad ~ 1 año y 7 meses',
    activity: 'Desarollo de web apps & interfaces gráficas ',
    image: '/images/logo-elektra.png',
  },
  {
    job: 'Software Engineer in Walmart Labs',
    place: 'Walmart Labs',
    time: 'jul. de 2017 - nov. de 2018 ~ 1 año y 5 meses',
    activity:
      'Administracion del principal sitio de Internet de eCOmmerce de México, desarrollo y diseño de nuevo componentes e innovacion de nuevas caracteristicas para el mismo.',
    image: '/images/logo-walmart-labs.png',
  },
  {
    job: 'UX | User Centered Design',
    place: 'Walmart eCommerce Mexico',
    time: 'jun. de 2014 - jul. de 2017 ~ 3 año y 9 meses',
    activity:
      'Desarrollo Front-End & Back-End de la página de walmart.com.mx. diseño y desarrollo de Interfaces de usuario (UI) en versiones moviles.',
    image: '/images/logo-walmart.png',
  },
  {
    job: 'Desarrollador Web',
    place: 'Sam´s Club de México',
    time: 'nov. de 2008 - may. de 2014 ~ 6 años y 7 meses',
    activity:
      'Diseño y desarrollo WEB del sitio de eCommerce de Internet de Sam´s Club.',
    image: '/images/logo-samsclub.png',
  },
];

export default function Experience() {
  return (
    <div id={styles.experience}>
      <MainContentHOC>
        <p className={styles.text}>¿Lo que hago?</p>
        <h1 className={`${styles.title} c-secondary-color-text`}>
          Aquí está algo de mi experiencia
        </h1>
        {experienceList.map(({job, place, time, activity, image}, key) => {
          return (
            <div className={styles.exp}>
              <div className={styles.contentLogo}>
                <div className={styles.logo}>
                  <img src={image} alt={place} />
                </div>
              </div>
              <div className={styles.contentJob}>
                <div className={`${styles.job} c-main-color-text`}>{job}</div>
                <div className={`${styles.place} c-base`}>{place}</div>
                <div className={`${styles.time} c-action-secondary`}>
                  {time}
                </div>
                <div className={`${styles.activity} c-base`}>{activity}</div>
              </div>
            </div>
          );
        })}
      </MainContentHOC>
    </div>
  );
}
