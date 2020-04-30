import React from 'react';
import styled from 'styled-components';

import Toolbar from '../../components/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';

const View = styled.div`
  position: relative;
  min-height: 100vh;
`;

const Main = styled.main`
  width: 95%;
  height: 100%;
  margin: auto;
  padding-bottom: 180px;
  font-size: 0.66em;

  @media ${(props) => props.theme.mediaQueries.medium} {
    padding-bottom: 300px;
    font-size: 1em;
  }

  @media ${(props) => props.theme.mediaQueries.large} {
    width: 50%;
  }
`;

const Layout = (props) => {
  return (
    <View>
      <Toolbar />
      <Main>{props.children}</Main>
      <Footer />
    </View>
  );
};

export default Layout;
