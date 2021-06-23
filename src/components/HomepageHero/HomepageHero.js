import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import FloatingIcon from "../FloatingIcon/FloatingIcon"
import FileDownloadSvg from "../../assets/file-download-line.svg"
import LinkedInSvg from "../../assets/linkedin-box-line.svg"
import YoutubeSvg from "../../assets/youtube-line.svg"

import "./HomepageHero.scss"

const HomepageHero = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { relativePath: { regex: "/^logo-/" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(
              placeholder: DOMINANT_COLOR
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `)

  // ^ writing query up top in components vs on bottom in pages

  const iconsArray = data.allFile.nodes

  return (
    <section className="homepage-hero">
      <div className="homepage-hero__headings">
        <h1 className="display">Web Dev</h1>
        <h1 className="display">Multimedia Artist</h1>
        <h1 className="display">Marketing Ninja</h1>
      </div>
      <div className="homepage-hero__poster-image-wrapper">
        <StaticImage
          src="../../images/jc-folio-pic.png"
          quality={95}
          placeholder="traced SVG"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Joshua Chakra"
          className="homepage-hero__poster-image"
        />
      </div>
      <div className="homepage-hero__floating-icons">
        {iconsArray.map(icon => {
          console.log(icon)
          return <FloatingIcon imgObj={icon} />
        })}
      </div>

      <div className="homepage-hero__bottom-content">
        <p className="homepage-hero__bio">
          Hey there ~ some say I'm a unicorn <span> 🦄 </span> Over a decade in
          the game as content producer, designer, entrepreneur, marketer and
          above all, developer. Loving every new challenge. Blessed with two
          princesses and a loving Mrs <span> 👑 </span> Passionate about the
          future of tech!
        </p>
        <div className="homepage-hero__links">
          <Link to="" className="link">
            <FileDownloadSvg />
            Download my Resume →
          </Link>
          <Link to="" className="link">
            <LinkedInSvg />
            Follow on Instagram →
          </Link>
          <Link to="" className="link">
            <YoutubeSvg />
            YouTube Channel →
          </Link>
        </div>
        f
      </div>

      <h3 className="homepage-hero__see-work">Check out some of my work 👇</h3>
    </section>
  )
}

export default HomepageHero
