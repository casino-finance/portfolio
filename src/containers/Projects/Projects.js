import React from 'react';

import Anchor from '../../components/UI/Anchor/Anchor';
import Title from '../../components/UI/Title/Title';
import Project from '../../components/Project/Project';

import projects from '../../assets/projects.json';

const Work = () => {
  const getImg = (img) => {
    // eslint-disable-next-line global-require,import/no-dynamic-require
    return require('../../assets/images/' + img);
  };

  const workOutput = projects.map((project) => {
    return (
      <Project
        key={project.title}
        image={getImg(project.image)}
        alt={project.name + 'mockup image'}
        title={project.title}
        description={project.description}
        build={project.build}
        live={project.live}
        repo={project.repo}
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
