import React from 'react';

import Particles from 'react-tsparticles';
import styled from 'styled-components';

import PropTypes from 'prop-types';
import particlesParams from '../assets/particlesjs-config.json';

import Anchor from '../components/UI/Anchor';
import Title from '../components/UI/Title';


import Button from '../components/UI/Button';

const Buttons = styled.div`
  float: none;
  text-align: center;
  margin: 12px;

  @media ${({ theme: { mediaQueries } }) => mediaQueries.medium} {
    float: right;
    text-align: left;
  }
`;

const Wrap = styled.div`
  padding: 0 15px;
`;

const HandEmoji = styled.span`
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;

  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(-10deg);
    }
    20% {
      transform: rotate(12deg);
    }
    30% {
      transform: rotate(-10deg);
    }
    40% {
      transform: rotate(9deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;


const Cont = styled.div`
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);
  margin-top: -50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  animation: fadein 2s;
  text-align: center;

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Hero = () => {
  return (
    <Cont>
      <>
        <Anchor id="CFI" />
        <Title>Casino Finance</Title>
        <Wrap>
          <h1>
            Welcome to casino finance!
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
            <HandEmoji role="img" aria-label="Waving hand">
              👋
          </HandEmoji>
          </h1>
          <h3>
            Your ultimate NFT based, Gamification-focused DeFi yield farming platform.
          </h3>
          <br />
          <h3>
            Allowing every degens to hit the jackpot.
          </h3>
          <br />
          <br />
          <br />
          <h3>
            Will start dealing before the halloween.
          </h3>
          <br />
          <br />
          <br />
          <br />
          <br />
        </Wrap>
        <Title>Pre-sale and Liquidity Event is Live!</Title>
      </>
      <br />

      <Particles
        params={particlesParams}
        style={{ position: 'absolute', zIndex: '-1', top: '0', left: '0' }}
      />
    </Cont>
  );
};


export default Hero;
