import React from 'react';

import styled from 'styled-components';

import Anchor from '../components/UI/Anchor';
import Title from '../components/UI/Title';

const Wrap = styled.div`
  text-align: center;
`;

const Letter = styled.span`
  font-size: 3.4rem;
`;

const Contact = () => {
  return (
    <>
      <Anchor id="contact" />
      <Title>Contact Us 24/7</Title>
      <Wrap>
        <h2>Like most casinos are. We are live 24/7.</h2>
        <h2>Reach us for anytype of degen questions!</h2>
        <br />
        <br />
        <h3>Just don&apos;t expect quick answers.</h3>
        <a
          href="mailto:info@casinofinance.org?subject=Contact me!"
          rel="noopener noreferrer"
          target="_blank"
        >
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <Letter role="img" aria-label="Letter Emoji">
            📧
          </Letter>
        </a>
      </Wrap>
    </>
  );
};

export default Contact;
