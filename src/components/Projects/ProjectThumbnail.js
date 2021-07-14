import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { wordify } from '../../utils';

import './ProjectThumbnail.scss';

const ProjectThumbnail = ({ imgObj, name, category, slug, alt }) => {
  const image = getImage(imgObj);

  return (
    <Link className="project-thumbnail" to={slug}>
      <GatsbyImage image={image} alt={alt} />
      <div className="project-thumbnail__overlay">
        <div className="text">See project</div>
      </div>
      <h3>{name}</h3>
      <h5>{category}</h5>
    </Link>
  );
};

export default ProjectThumbnail;
