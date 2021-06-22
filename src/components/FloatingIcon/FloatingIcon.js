import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "./FloatingIcon.scss"

const FloatingIcon = ({ imgObj, alt }) => {
  const image = getImage(imgObj)

  return (
    <div className="floating-icon">
      <GatsbyImage image={image} alt={alt} />
    </div>
  )
}

export default FloatingIcon
