import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import FileDownloadSvg from "../../assets/file-download-line.svg"
import LinkedInSvg from "../../assets/linkedin-box-line.svg"
import YoutubeSvg from "../../assets/youtube-line.svg"

import "./HomepageHero.scss"

const HomepageHero = () => {
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
      </div>

      <h3 className="homepage-hero__see-work">Check out some of my work 👇</h3>
    </section>
  )
}

export default HomepageHero
