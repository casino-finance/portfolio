import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';

import heroImg from '../../assets/images/hero.png';
import JavaScript from '../../assets/icons/javascript.svg';
import Html5 from '../../assets/icons/html5.svg';
import Css3 from '../../assets/icons/css3.svg';
import TypeScript from '../../assets/icons/typescript.svg';
import ReactSvg from '../../assets/icons/react.svg';
import Angular from '../../assets/icons/angular.svg';
import NodeJs from '../../assets/icons/node-dot-js.svg';
import MySql from '../../assets/icons/mysql.svg';

import particlesParams from '../../assets/particlesjs-config.json';

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

const HeroPic = styled.img`
  margin: 0 auto 38px;
  width: 250px;
  border-radius: 50%;
  transition: all 250ms ease-out;
  box-shadow: ${(props) => props.theme.shadow};

  @media ${(props) => props.theme.mediaQueries.large} {
    width: 334px;
  }

  @media ${(props) => props.theme.mediaQueries.landscape} {
    width: 234px;
  }

  @media (hover: hover) {
    :hover {
      -webkit-transform: rotateZ(-15deg);
      -ms-transform: rotateZ(-15deg);
      transform: rotateZ(-15deg);
    }
  }
`;

const IconsList = styled.div`
  text-align: center;
  display: block;

  @media ${(props) => props.theme.mediaQueries.landscape} {
    display: none;
  }
`;

const Ul = styled.ul`
  display: block;
  text-align: center;
  padding: 0;
  list-style: none;

  @media ${(props) => props.theme.mediaQueries.large} {
    display: inline-block;
  }
`;

const Li = styled.li`
  display: inline-block;
`;

const Icon = styled.img`
  width: 48px;
  margin: 4px 8px;

  @media ${(props) => props.theme.mediaQueries.medium} {
    width: 72px;
  }
`;

const Hero = () => {
  return (
    <Cont>
      <HeroPic src={heroImg} alt="Hero Photo" />
      <IconsList>
        <Ul>
          <Li>
            <Icon src={Html5} alt="HTML5 Icon" />
          </Li>
          <Li>
            <Icon src={Css3} alt="CSS3 Icon" />
          </Li>
          <Li>
            <Icon src={JavaScript} alt="JavaScript Icon" />
          </Li>
          <Li>
            <Icon src={TypeScript} alt="TypeScript Icon" />
          </Li>
        </Ul>
        <Ul>
          <Li>
            <Icon src={ReactSvg} alt="React Icon" />
          </Li>
          <Li>
            <Icon src={Angular} alt="Angular Icon" />
          </Li>
          <Li>
            <Icon src={NodeJs} alt="Node.js Icon" />
          </Li>
          <Li>
            <Icon src={MySql} alt="MySQL Icon" />
          </Li>
        </Ul>
      </IconsList>
      <Particles
        params={particlesParams}
        style={{ position: 'absolute', zIndex: '-1', top: '0', left: '0' }}
      />
    </Cont>
  );
};

export default Hero;
