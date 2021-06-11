import * as React from "react"
import { Link } from "gatsby"
import HomepageHero from "../components/HomepageHero/HomepageHero"

import Layout from "../components/Layout/layout"
import Seo from "../components/seo"

import "./index.scss"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <HomepageHero />
    </Layout>
  )
}

export default IndexPage
