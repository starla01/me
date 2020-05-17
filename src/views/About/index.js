import React from 'react';
import styles from './index.module.sass';
import MainContentHOC from '../../hoc';
import IconText from '../../components/IconText';

const aboutList = [
  {
    id: 0,
    name: 'Diseño gráfico',
    icon: 'color_lens',
  },
  {
    id: 1,
    name: 'Diseño Web',
    icon: 'web',
  },
  {
    id: 2,
    name: 'Software',
    icon: 'dns',
  },
];

export default function About() {
  return (
    <div id={styles.about}>
      <MainContentHOC>
        <p className={styles.text}>Acerca de mi</p>
        <h1 className={`${styles.title} c-secondary-color-text`}>Quien soy?</h1>
        <p className={styles.text}>
          Hace 8 años, Fernando obtuvo su titulo de ingeniería en sistemas de
          Información y desde ese momento se mantenido activo desarrollando
          sitios de internet, para grupo Walmart y actualmente grupo Elektra. Es
          una persona apasionada, amante de la tecnología.
        </p>
        <p className={styles.text}>
          Fernando es una persona curiosa que canaliza su curiosidad en
          aprendizajes continuos, le gusta estar a la vanguardia de la
          tecnología y aprender cosas nuevas, siempre esta en búsqueda de nuevos
          retos con el propósito de aprender algo cada día.
        </p>
        <p className={styles.text}>
          Actualmente es desarrollador Frontend Sr. en Grupo Elektra
          desarrollando el sitio de internet de Commerce
          https://www.elektra.com.mx
        </p>

        <div className={styles.list}>
          {aboutList.map((element) => {
            return <IconText key={element.id} props={element} />;
          })}
        </div>
      </MainContentHOC>
    </div>
  );
}
