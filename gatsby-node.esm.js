import path from 'path';
import projects from './src/projects.json';

const createProjectPages = actions => {
  const { createPage } = actions;
  const projectPageTemplate = path.resolve(
    './src/templates/ProjectPage/ProjectPage.js'
  );
  projects.forEach(project => {
    createPage({
      path: project.slug,
      component: projectPageTemplate,
      context: project,
    });
  });
};

export function createPages({ actions }) {
  createProjectPages(actions);
}
