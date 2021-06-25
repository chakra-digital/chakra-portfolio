import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { wordify } from '../../utils';

import './ProjectThumbnail.scss';

const ProjectThumbnail = ({ imgObj, relativePath }) => {
  const image = getImage(imgObj);
  /**
   * Here, we are taking the relativePath prop and splitting the string using --
   * then grabbing the item at index 2 (the third item) which is the part of
   * our file name that contains the project name.  In this case, it's already
   * in the format of a slug since it's dash-separated in the filename.
   */
  const slug = relativePath.split('--')[2];
  /**
   * We use our wordify() function to pass slug which returns us a human readable title
   */
  const title = wordify(slug);
  /**
   * Here, we are effectively running another split on the full relativePath prop
   * and this time, getting the 4th item in the array which is our category segment.
   * e.g. if our relativePath is "project-thumb--1--palm-tree--social-content.jpg", the 4th
   * item is going to be "social-content.jpg"
   * Since it will contain the file extension, we run another split with '.' to separate
   * the extension and grab the first item, which would just be "social-content".  Then
   * we pass that into our wordify function to again grab a human readable version.
   */
  const category = wordify(relativePath.split('--')[3].split('.')[0]);

  return (
    <Link className="project-thumbnail" to={slug}>
      <GatsbyImage image={image} alt={slug} />
      <h3>{title}</h3>
      <h5>{category}</h5>
    </Link>
  );
};

export default ProjectThumbnail;
