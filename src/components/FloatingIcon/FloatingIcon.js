import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const FloatingIcon = ({ src, alt }) => {
  return (
    <StaticImage
      src={src}
      quality={95}
      placeholder="traced SVG"
      formats={["AUTO", "WEBP", "AVIF"]}
      alt={alt}
      className="homepage-hero__floating-icon"
    />
  )
}

export default FloatingIcon
