import React from 'react';

const ProjectPage = ({ pageContext }) => {
  return (
    <div>
      <h1>{pageContext.name}</h1>
      <p>{pageContext.projectPageData.heading}</p>
    </div>
  );
};

export default ProjectPage;
