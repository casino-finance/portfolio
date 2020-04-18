import React from 'react';
import styled from 'styled-components';

const SyledAnchor = styled.a`
  display: block;
  position: relative;
  top: -2.4rem;
  visibility: hidden;

  @media ${(props) => props.theme.mediaQueries.medium} {
    top: -1.2rem;
  }
`;

const Anchor = (props) => {
  return <SyledAnchor id={props.id} />;
};

export default Anchor;
