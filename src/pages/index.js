import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import HomepageHero from "../components/HomepageHero/HomepageHero"
import ProjectThumbnail from "../components/Projects/ProjectThumbnail"

import Layout from "../components/Layout/layout"
import Seo from "../components/seo"

import "./index.scss"
import "../components/Projects/ProjectThumbnail.scss"

const IndexPage = () => {
  const thumbs = useStaticQuery(graphql`
    query MyQueryThumbs {
      allFile(filter: { relativePath: { regex: "/^project-/" } }) {
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

  const thumbsArray = thumbs.allFile.nodes

  return (
    <Layout>
      <Seo title="Home" />
      <HomepageHero />
      <section className="project-thumbnails">
        {thumbsArray.map(thumb => {
          console.log(thumb)
          return <ProjectThumbnail imgObj={thumb} />
        })}
      </section>
    </Layout>
  )
}

export default IndexPage

// Presentational vs layout components 💡
