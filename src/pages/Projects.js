import React from 'react';

import styled from 'styled-components';

import projects from '../assets/projects.json';
import Project from '../components/Project';
import Anchor from '../components/UI/Anchor';
import Title from '../components/UI/Title';

const Wrap = styled.div`
  padding: 0 15px;
`;

const Work = () => {
  const getImg = (img) => {
    // eslint-disable-next-line global-require,import/no-dynamic-require
    return require(`../assets/images/${img}`);
  };

  const workOutput = projects.map(({ title, image, name, description, build, live, repo }) => {
    return (
      <Project
        key={title}
        image={getImg(image)}
        alt={`${name} mockup image`}
        title={title}
        description={description}
        build={build}
        live={live}
        repo={repo}
      />
    );
  });

  return (
    <>
      <Anchor id="projects" />
      <Title>{'{ projects }'}</Title>
      <Wrap>{workOutput}</Wrap>
    </>
  );
};

export default Work;
