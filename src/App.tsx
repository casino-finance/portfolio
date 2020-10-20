import React, { useCallback, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { UseWalletProvider } from 'use-wallet'

import Divider from './components/UI/Divider';
import HeroDivider from './components/UI/HeroDivider';
import About from './pages/About';
import Contact from './pages/Contact';
import GitHub from './pages/GitHub';
import Hero from './pages/Hero';
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
        <Divider />
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

const Providers: React.FC = ({ children }) => {
  return (
    <UseWalletProvider
      chainId={1}
      connectors={{
        walletconnect: { rpcUrl: 'https://mainnet.eth.aragon.network/' },
      }}
    >
    </UseWalletProvider>

  )
}


export default App;
