import React from 'react';
import styled from 'styled-components';

import Toolbar from '../../components/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';

const View = styled.div`
  position: relative;
  min-height: 100vh;
`;

const Main = styled.main`
  padding-bottom: 300px;
  margin: auto;
  height: 100%;
  width: 50%;

  @media ${(props) => props.theme.mediaQueries.large} {
    width: 95%;
    padding-bottom: 180px;
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    font-size: 0.66em;
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
