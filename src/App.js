import React from 'react';

import Theme from './styles/Theme';

import Layout from './hoc/Layout/Layout';
import About from './containers/About/About';
import Hero from './containers/Hero/Hero';
import Projects from './containers/Projects/Projects';
import Instagram from './containers/Instagram/Instagram';
import Contact from './containers/Contact/Contact';
import Divider from './components/UI/Divider/Divider';
import HeroDivider from './components/UI/Divider/Hero-divider';

const App = () => {
  return (
    <Theme>
      <Layout>
        <Hero />
        <HeroDivider />
        <About />
        <Divider />
        <Instagram />
        <Divider />
        <Projects />
        <Divider />
        <Contact />
      </Layout>
    </Theme>
  );
};

export default App;
