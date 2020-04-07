import React from 'react';
import styled from 'styled-components';
import Headroom from 'react-headroom';

const Bar = styled.header`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  height: 56px;
  display: flex;
  box-sizing: border-box;
  z-index: 90;
  justify-content: space-between;
  background-color: #221a36;

  @media ${(props) => props.theme.mediaQueries.large} {
    width: 95%;
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    justify-content: center;
  }
`;

const Title = styled.p`
  margin: auto 0;
  cursor: pointer;
  animation: slide-in-left 2s;
  transition: all 250ms ease-out;

  @keyframes slide-in-left {
    0% {
      margin-left: -1000%;
    }
    50% {
      margin-left: -1000%;
    }
    100% {
      margin-left: 0px;
    }
  }

  @media (hover: hover) {
    :hover {
      color: #e91e63;
      -webkit-transform: scale(1.2);
      -ms-transform: scale(1.2);
      transform: scale(1.2);
    }
  }
`;

const Nav = styled.nav`
  margin: auto 0;

  @media ${(props) => props.theme.mediaQueries.medium} {
    display: none;
  }
`;

const Ul = styled.ul`
  list-style: none;
  animation: slide-in-top 2.5s;

  @keyframes slide-in-top {
    0% {
      margin-top: -1000%;
    }
    50% {
      margin-top: -1000%;
    }
    100% {
      margin-top: 0px;
    }
  }
`;

const Li = styled.li`
  margin: 0 10px;
  display: inline-block;
  transition: all 250ms ease-out;
  cursor: pointer;

  @media (hover: hover) {
    :hover {
      color: #e91e63;
      -webkit-transform: scale(1.2);
      -ms-transform: scale(1.2);
      transform: scale(1.2);
    }
  }
`;

const Toolbar = () => {
  return (
    <Headroom>
      <Bar>
        <Title>
          <a href="#root">{'{ petr.rajtslegr }'}</a>
        </Title>
        <Nav>
          <Ul>
            <Li>
              <a href="#about">{'{ about }'}</a>
            </Li>
            <Li>
              <a href="#work">{'{ work }'}</a>
            </Li>
            <Li>
              <a href="#contact">{'{ contact }'}</a>
            </Li>
          </Ul>
        </Nav>
      </Bar>
    </Headroom>
  );
};

export default Toolbar;
