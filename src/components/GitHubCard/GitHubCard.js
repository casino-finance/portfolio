import React from 'react';

import styled from 'styled-components';

const Card = styled.div`
  padding: 12px;
  margin: 8px;
  border: 2px solid #e91e63;
  border-radius: 12px;
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.shadow};
  outline: none;
  cursor: pointer;
`;

const GitHubCard = ({ children, link, language }) => {
  return (
    <Card>
      <a href={link} rel="noopener noreferrer" target="_blank">
        <h3>{children}</h3>
        <p>{language}</p>
      </a>
    </Card>
  );
};

export default GitHubCard;
