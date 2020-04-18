import React from 'react';
import styled from 'styled-components';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Anchor from '../../components/UI/Anchor/Anchor';
import Title from '../../components/UI/Title/Title';

const Letter = styled.span`
  font-size: 3.4em;
`;

const Contact = () => {
  return (
    <Aux>
      <Anchor id="contact" />
      <Title>{'{ contact }'}</Title>
      <div style={{ textAlign: 'center' }}>
        <h1>Let&apos;s make something great together!</h1>
        <h1>You can get in touch with me here.</h1>
        <a
          href="mailto:petr.rajtslegr@google.com?subject=Contact me!"
          rel="noopener noreferrer"
          target="_blank"
        >
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <Letter role="img" aria-label="Letter Emoji">
            📧
          </Letter>
        </a>
      </div>
    </Aux>
  );
};

export default Contact;
