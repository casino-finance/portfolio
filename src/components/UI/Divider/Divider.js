import React from 'react';

import styled from 'styled-components';

const StyledHr = styled.hr`
  background: ${(props) => props.theme.colors.pink};
  border: 0;
  clear: both;
  display: block;
  margin: 1.2rem auto;
  text-align: center;
  width: 100%;
  height: 2px;
  overflow: hidden;
  position: relative;
  box-shadow: ${(props) => props.theme.shadow};

  @media ${(props) => props.theme.mediaQueries.large} {
    margin: 2.4rem auto;
  }
`;

const Divider = () => {
  return <StyledHr />;
};

export default Divider;
