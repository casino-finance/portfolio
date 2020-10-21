import React from 'react';

import styled from 'styled-components';

import Anchor from '../components/UI/Anchor';
import Title from '../components/UI/Title';


const Cont = styled.div`
  padding: 0 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Img = styled.img`
  width: calc(24vw - 4px);
  height: calc(24vw - 4px);
  border-radius: 10px;
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
`;

const Wrap = styled.div`
  padding: 0 15px;
  text-align: center;
`;


const Instagram = () => {
  return (
      <>
        <Anchor id="NFT" />
        <Title>NFTs</Title>
        <Wrap>
        <h3>
          Accumulate CFI and GAMBLE thru dozens of ways.
        </h3>
        <h3>
          Claim your favorite limited editions NFTs from variety of providers.
        </h3>
        <br />
        <br />
        <h3>
          Below are some and many more to come!
        </h3>
      </Wrap>
        <Cont>
        
          <StyledImg>
            <Img src='https://i.ibb.co/tCcC78g/z3c-Fp01585562587.png' alt="nf1" />
          </StyledImg>
          <br />
          <StyledImg>
            <Img src='https://i.ibb.co/0mFBt4C/1-i-N66b-Hfi-Ep9c-Bji-Zr-CYn5-Q.jpg' alt="nf2" />
          </StyledImg>
        
        </Cont>
        <Cont>
        
        <StyledImg>
          <Img src='https://i.ibb.co/6BdvbRv/Fx-X5caie56ynwsjysm2-Xu-Nozd-Mysq1-YNDRbt9-X9-Veer-Nm1981-Q9-Qb-BMHnphfc-Bvt7z-Hmv-GBys-GAP4y-DMXDZ8.gif' alt="nf1" />
        </StyledImg>
        <br />
        <StyledImg>
          <Img src='https://i.ibb.co/Cn8xBYm/1-ipv-xq-Frtz-B3-EXG5-Rru-VQ.gif' alt="nf2" />
        </StyledImg>
      
      </Cont>
        
      </>
  );
};

export default Instagram;
