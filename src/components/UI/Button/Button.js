import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  padding: 5px 12px;
  border-radius: 9999px;
  color: ${(props) => props.theme.colors.purple};
  background-color: ${(props) => props.theme.colors.pink};
  font: inherit;
  font-weight: 600;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 250ms ease-out;

  :first-of-type {
    margin-right: 6px;
  }

  @media (hover: hover) {
    :hover {
      background-color: ${(props) => props.theme.colors.yellow};
    }
  }
`;

const Button = (props) => {
  return (
    <a href={props.link} rel="noopener noreferrer" target="_blank">
      <StyledButton>{props.children}</StyledButton>
    </a>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
};

export default Button;
