import React, {useState} from 'react';
import styles from './index.module.sass';
import MainContentHOC from '../../hoc';
import TextField from '../../components/TextField';
import IconText from '../../components/IconText';

const iconList = [
  {
    id: 0,
    name: 'me@frobles.com',
    icon: 'mail',
  },
  {
    id: 1,
    name: 'Mexico D.F.',
    icon: 'language',
  },
];

export default function Contact() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const handleSubmit = (evt) => {
    evt.preventDefault();

    fetch('https://us-central1-mailing-277502.cloudfunctions.net/send-mail', {
      method: 'POST', // or 'PUT'
      mode: 'no-cors',
      body: JSON.stringify({
        name: name,
        lastName: lastName,
        fromEmail: email,
        toEmail: 'fernando.ro.r@hotmail.com',
        phone: phone,
        subject: 'Hello from personal App',
        textPart: 'Test from personal App',
        htmlPart: '<h2>se quiere contactar contigo</h2>',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error('Error:', error))
      .then((response) => console.log('Success:', response));
  };
  return (
    <div id={styles.contact}>
      <MainContentHOC>
        <h1 className={styles.text}>Ponte en contacto conmigo</h1>
        <h1 className={styles.title}>Llena tus datos</h1>
        <div className={styles.listMeData}>
          {iconList.map((element, key) => {
            return <IconText key={key} props={element} />;
          })}
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.fullName}>
            <div className={styles.inputField}>
              <TextField
                label="Nombre"
                input={{
                  id: 'name',
                  name: 'name',
                  value: name,
                  disabled: false,
                  onChange: (e) => setName(e.target.value),
                }}
              />
            </div>
            <div className={styles.inputField}>
              <TextField
                label="Apellidos"
                input={{
                  id: 'lastName',
                  name: 'lastName',
                  value: lastName,
                  disabled: false,
                  onChange: (e) => setLastName(e.target.value),
                }}
              />
            </div>
          </div>
          <div className={styles.contactData}>
            <div className={styles.inputField}>
              <TextField
                label="eMail"
                input={{
                  id: 'email',
                  name: 'email',
                  value: email,
                  disabled: false,
                  onChange: (e) => setEmail(e.target.value),
                }}
              />
            </div>
            <div className={styles.inputField}>
              <TextField
                label="Teléfono"
                input={{
                  id: 'phone',
                  name: 'phone',
                  value: phone,
                  disabled: false,
                  onChange: (e) => setPhone(e.target.value),
                }}
              />
            </div>
          </div>
          <div className={styles.submitContainer}>
            <div className={styles.inputField}>
              <input type="submit" className={styles.submit} />
            </div>
          </div>
        </form>
      </MainContentHOC>
    </div>
  );
}
