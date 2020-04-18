import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 1.6rem;
`;

const Title = (props) => {
  return <StyledTitle>{props.children}</StyledTitle>;
};

export default Title;
