import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Type, Paragraph } from "../components/Type"

const IndexPage = ({ location }) => {
  // Route location is provided by gatsby per page component
  return (
    <>
      <SEO title="Home" />
      <Layout location={location}>
        <Type>
          <a name="about" />
        </Type>
        <Type>
          <br />
          <div style={{ maxWidth: "800px" }}>
            Matthew is a product designer, developer, and team lead based in New
            York City. He has spent 5 years designing and improving user
            experience within agile product teams. As a design lead, Matthew
            works across a range of diciplines in order to define customer
            problems, prioritize work, and build products and services that
            work.
          </div>
          <br />
          <br />
          <br />
        </Type>
      </Layout>
    </>
  )
}

export default IndexPage
