import React from 'react';

import Divider from './components/UI/Divider/Divider';
import HeroDivider from './components/UI/Divider/Hero-divider';
import About from './containers/About/About';
import Contact from './containers/Contact/Contact';
import Hero from './containers/Hero/Hero';
import Instagram from './containers/Instagram/Instagram';
import Projects from './containers/Projects/Projects';
import Layout from './hoc/Layout/Layout';
import Theme from './styles/Theme';

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
