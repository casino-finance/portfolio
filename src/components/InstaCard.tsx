import React from 'react';

import styled from 'styled-components';

const StyledCard = styled.div`
  position: relative;
  width: 24vw;
  height: 24vw;
  margin-bottom: 3.5vh;
  border: 2px solid #e91e63;
  border-radius: 12px;
  box-sizing: border-box;
  background: ${(props) => props.theme.color.grey[200]};
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  outline: none;
  cursor: pointer;
`;


const InstaCard: React.FC = ({ children }) => <StyledCard>{children}</StyledCard>



export default InstaCard;
