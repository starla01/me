import React, {useState, useEffect} from 'react';
import styles from './app.module.sass';
import {parse} from 'query-string';
import Header from './components/Header';
import darkModeStyles from './styles/dark-mode';
import lightModeStyles from './styles/light-mode';
import generator from 'corex-theme-generator/runtime';
import Subheader from './components/Header/Subheader';
import Menu from './components/Menu';
import {Router, Route, Switch} from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Services from './views/Services';
import Skills from './views/Skills';
import Experience from './views/Experience';
import Contact from './views/Contact';
import Footer from './components/Footer';

function App(props) {
  const {location, history, match} = props;
  const [css, setCss] = useState('');
  const [isLightMode, setIsLightMode] = useState(localStorage.theme === 'true');

  const searchParams = parse(location.search) || {};
  const params = match.params;

  useEffect(() => {
    generator((isLightMode && lightModeStyles) || darkModeStyles)
      .generate()
      .then((css) => setCss(css));
  }, [isLightMode]);

  return (
    <div id={styles.content} className="bg-main-back c-base">
      <style>{css}</style>
      <Header
        location={location}
        history={history}
        match={match}
        setIsLightMode={setIsLightMode}
        isLightMode={isLightMode}
      />
      <Subheader isLightMode={isLightMode} />
      <Menu />
      <div id={styles.contentView}>
        <Switch>
          <Route
            path="/home"
            render={(props) => {
              return <Home {...props} />;
            }}
          />
          <Route
            path="/about"
            render={(props) => {
              return <About {...props} />;
            }}
          />
          <Route
            path="/services"
            render={(props) => {
              return <Services {...props} />;
            }}
          />
          <Route
            path="/skills"
            render={(props) => {
              return <Skills {...props} />;
            }}
          />
          <Route
            path="/experience"
            render={(props) => {
              return <Experience {...props} />;
            }}
          />
          <Route
            path="/contact"
            render={(props) => {
              return <Contact {...props} />;
            }}
          />
          <Route
            path="/"
            render={(props) => {
              return <Home {...props} />;
            }}
          />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
