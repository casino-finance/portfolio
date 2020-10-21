import React from 'react';

import styled from 'styled-components';

import Anchor from '../components/UI/Anchor';
import Title from '../components/UI/Title';

import image from '../assets/images/girls.png'

import Container from './../components/Container'
import Button from './../components/Button'
import Balances from './components/Balances'

const Img = styled.img`
  width: 500px;
  border-radius: 75px;

  @media ${({ theme: { mediaQueries } }) => mediaQueries.medium} {
    width: 200px;
    border-radius: 75px;
  }
`;

const StyledImg = styled.div`
    .d-md-none {
        @media (max-width: 1024px) {
            display: none;
        }
    }
    .d-lg-none {
        @media (min-width: 1025px) {
            display: none;
        }
    }
`

const Wrap = styled.div`
  padding: 0 15px;
  text-align: center;
`;

const About = () => {
  return (
    <>
      <Anchor id="CFI" />
      <Title>High stakes, High yields!</Title>
      <Wrap>
        <h3>
          Stake your CFI or uni-v2 lp tokens to earn GAMBLE.
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
        </h3>
        <h3>
          Spend your GAMBLE tokens on inhouse provably fair games such as Lottery, Dice, Roullette, Blockchainopoly, NFT auctions, and more!
        </h3>
        <StyledImg>
                <img className="d-md-none" src={image} height="300" style={{ marginTop: -4 }} />
        </StyledImg>
        <br>
        </br>
        <h3>
          Buy in a bag of CFI now and participate on the on-going Uniswap Liquidity event to earn GAMBLE before farming starts!
        </h3>
        <br>
        </br>
        <br>
        </br>
        <Container>
                <Balances />
        </Container>
      </Wrap>
      <br>
        </br>
        <br>
        </br>
    </>
  );
};

export default About;
