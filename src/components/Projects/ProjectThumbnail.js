import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "./ProjectThumbnail.scss"

const ProjectThumbnail = ({ imgObj, alt }) => {
  const image = getImage(imgObj)

  return (
    <div className="project-thumbnail">
      <GatsbyImage image={image} alt={alt} />
      <Link to="https://carsoncreekranch.com"></Link>
      <h3>Project Name</h3>
      <h5>CATEGORY</h5>
    </div>
  )
}

export default ProjectThumbnail
