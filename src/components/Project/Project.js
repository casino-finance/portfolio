import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 200px;
  border-radius: 30px;
  box-shadow: ${(props) => props.theme.shadow};

  @media ${(props) => props.theme.mediaQueries.medium} {
    width: 100px;
    border-radius: 15px;
  }
`;

const Row = styled.div`
  margin-bottom: 1.2rem;
  border: 2px solid #e91e63;
  border-radius: 12px;
  position: relative;
  box-sizing: border-box;
  box-shadow: ${(props) => props.theme.shadow};
`;

const MockupColumn = styled.div`
  margin: 8px 0;
  text-align: center;
  width: 40%;

  @media ${(props) => props.theme.mediaQueries.medium} {
    width: 100%;
  }
`;

const TextColumn = styled.div`
  text-align: left;
  width: 60%;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 10px;

  @media ${(props) => props.theme.mediaQueries.medium} {
    text-align: left;
    width: 95%;
    margin: auto;
    position: relative;
  }
`;

const Title = styled.h1`
  text-decoration: underline;

  @media ${(props) => props.theme.mediaQueries.medium} {
    text-align: center;
  }
`;

const Desc = styled.h3``;

const Build = styled.p`
  position: absolute;
  bottom: 0px;
  left: 0px;

  @media ${(props) => props.theme.mediaQueries.medium} {
    position: relative;
    margin-top: 5px;
    bottom: 5px;
  }
`;

const Project = (props) => {
  return (
    <Row>
      <MockupColumn>
        <Img src={props.image} alt={props.alt} />
      </MockupColumn>
      <TextColumn>
        <Title>{props.title}</Title>
        <Desc>{props.description}</Desc>
        <Build>{props.build}</Build>
      </TextColumn>
    </Row>
  );
};

export default Project;
