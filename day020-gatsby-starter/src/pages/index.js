import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>My first Gatsby site</h1>
    <p>Now go build something great.</p>    
  </Layout>
)

export default IndexPage
