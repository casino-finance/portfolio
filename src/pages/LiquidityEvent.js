import React from 'react';

import styled from 'styled-components';

import Anchor from '../components/UI/Anchor';
import Title from '../components/UI/Title';

import Container from '../components/Container'
import Presale from './components/Presale'


const Wrap = styled.div`
  padding: 0 15px;
  text-align: center;
`;

const About = () => {
  return (
    <>
      <Anchor id="CFI" />
      <Title>Pre-Sale and Liquidity Event</Title>
      <Wrap>
        <h3>
          Step 1) Buy an "x" amount of CFI tokens.
        </h3>
        <h3>
          Step 2) Add liquidity on Uniswap.
        </h3>
        <h3>
          Step 3) Claim GAMBLE right before the casino launch!
        </h3>
        <h3>
          *Minimum of 50 CFI to qualify*
        </h3>
        <br />
        <h3>
          -CFI Presale details-
        </h3>
        <br />
        <Container>
                <Presale />
        </Container>
      </Wrap>
      <br />
    </>
  );
};

export default About;
