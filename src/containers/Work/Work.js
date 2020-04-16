import React from 'react';

import Project from '../../components/Project/Project';

import projects from '../../assets/projects.json';

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

const Work = () => {
  return (
    <div style={{ padding: '0 15px' }} id="work">
      {workOutput}
    </div>
  );
};

export default Work;
