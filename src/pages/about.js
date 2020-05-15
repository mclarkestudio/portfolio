import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import Article from "../components/Article"
import Type from "../components/Type"
import PageHeader from "../components/PageHeader"
import Contact from "../components/Contact"

import { WebCopy } from "../copy/webCopy"

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
          <div style={{ maxWidth: "800px" }}>
            Matthew is a product designer, developer, and team lead based in New
            York City. He has spent 5 years designing and improving user
            experience within agile product teams. As a design lead, Matthew
            works across a range of diciplines in order to define customer
            problems, prioritize work, and build products and services that
            work.
          </div>
        </Type>
      </Layout>
    </>
  )
}

export default IndexPage
