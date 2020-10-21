import React from 'react';

import styled from 'styled-components';

import Anchor from '../components/UI/Anchor';
import Title from '../components/UI/Title';

import image from '../assets/images/mimemo.png'


const Img = styled.img`
  width: 500px;
  border-radius: 15px;

  @media ${({ theme: { mediaQueries } }) => mediaQueries.medium} {
    width: 200px;
    border-radius: 30px;
  }
`;

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
      </Wrap>
      <Img src={image} alt='' />
    </>
  );
};

export default About;
