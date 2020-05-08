import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import Footer from '../../components/Footer/Footer';
import Toolbar from '../../components/Toolbar/Toolbar';

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

const Layout = ({ children }) => {
  return (
    <View>
      <Toolbar />
      <Main>{children}</Main>
      <Footer />
    </View>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
