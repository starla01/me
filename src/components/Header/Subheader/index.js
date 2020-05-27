import React, {useEffect} from 'react';
import styles from './index.module.sass';
import v1 from '../../../videos/v1.mov';
import v2 from '../../../videos/v2.mov';
import v3 from '../../../videos/v3.mov';
import v4 from '../../../videos/v4.mov';
import v5 from '../../../videos/v5.mov';
import v6 from '../../../videos/v6.mov';
import v7 from '../../../videos/v7.mov';
import v8 from '../../../videos/v8.mov';
import v9 from '../../../videos/v9.mov';
import v10 from '../../../videos/v10.mov';
import v11 from '../../../videos/v11.mov';
import v12 from '../../../videos/v12.mov';
import v13 from '../../../videos/v13.mov';

let video;
const videoRnd = Math.floor(Math.random() * (13 - 1)) + 1;

switch (videoRnd) {
  case 1:
    video = v1;
    break;
  case 2:
    video = v2;
    break;
  case 3:
    video = v3;
    break;
  case 4:
    video = v4;
    break;
  case 5:
    video = v5;
    break;
  case 6:
    video = v6;
    break;
  case 7:
    video = v7;
    break;
  case 8:
    video = v8;
    break;
  case 9:
    video = v9;
    break;
  case 10:
    video = v10;
    break;
  case 11:
    video = v11;
    break;
  case 12:
    video = v12;
    break;
  case 13:
    video = v13;
    break;
}

export default function Subheader({isLightMode}) {
  useEffect(() => {
    var vid = document.getElementById('background');
    vid.autoplay = true;
    vid.load();
  }, []);
  return (
    <div id={styles.subheader}>
      <div className={styles.rightImageBackLight}>
        <video id="background" preload="true" autoPlay loop volume="0">
          <source src={video} />
        </video>
      </div>
      <div className={styles.face}>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E03AQGrrv_VpQr1ig/profile-displayphoto-shrink_200_200/0?e=1596067200&v=beta&t=q_wFxyxcBkCj1CDYkDbi1ZhvgJODUH5GGVnYe807eE4"
          alt="Fernando Robles Rivera"
        />
      </div>
    </div>
  );
}
