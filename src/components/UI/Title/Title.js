import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 1.6rem;
`;

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
