import React from 'react';
import styled from 'styled-components';

const StyledHr = styled.hr`
  background: ${(props) => props.theme.colors.pink};
  border: 0;
  clear: both;
  display: block;
  margin: 0 auto 2.4rem;
  text-align: center;
  height: 2px;
  overflow: hidden;
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);
  box-shadow: ${(props) => props.theme.shadow};

  @media ${(props) => props.theme.mediaQueries.medium} {
    margin: 0 auto 1.2rem;
  }
`;

const Divider = () => {
  return <StyledHr />;
};

export default Divider;
