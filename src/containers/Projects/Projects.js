import React from 'react';

import projects from '../../assets/projects.json';
import Project from '../../components/Project/Project';
import Anchor from '../../components/UI/Anchor/Anchor';
import Title from '../../components/UI/Title/Title';

const Work = () => {
  const getImg = (img) => {
    // eslint-disable-next-line global-require,import/no-dynamic-require
    return require(`../../assets/images/${img}`);
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
      <div style={{ padding: '0 15px' }}>{workOutput}</div>
    </>
  );
};

export default Work;
