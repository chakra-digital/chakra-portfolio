import * as React from "react"
import { Link } from "gatsby"
import HomepageHero from "../components/HomepageHero/HomepageHero"
import ProjectThumbnail from "../components/Projects/ProjectThumbnail"

import Layout from "../components/Layout/layout"
import Seo from "../components/seo"

import "./index.scss"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <HomepageHero />
      {/* <div>the box with all the projthumbnails
        projectthumbnails
        projectthumbnails (uniqe id for that proj)
        projectthumbnails
        projectthumbnails
        projectthumbnails
      </div> */}
    </Layout>
  )
}

export default IndexPage

// Presentational vs layout components 💡
