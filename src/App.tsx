import React from 'react'

import Divider from './components/UI/Divider';
import HeroDivider from './components/UI/HeroDivider';
import About from './pages/About';
import Contact from './pages/Contact';
import GitHub from './pages/GitHub';
import Hero from './pages/Hero';
import LiquidityEvent from './pages/LiquidityEvent';
import Instagram from './pages/Instagram';
import Projects from './pages/Projects';
import WithLayout from './utils/hoc/withLayout';
import GlobalStyle from './utils/styles/Global';
import Theme from './utils/styles/Theme';

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <WithLayout>
        <Hero />
        <HeroDivider />
        <About />
        <HeroDivider />
        <LiquidityEvent />
        <Instagram />
        <Divider />
        <Projects />
        <Divider />
        <GitHub />
        <Divider />
        <Contact />
      </WithLayout>
    </Theme>
  );
}


export default App;
