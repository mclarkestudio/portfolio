import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Article from "../components/Article"
import Type from "../components/Type"

import { WebCopy } from "../copy/webCopy"

const IndexPage = ({ location }) => {
  // Route location is provided by gatsby per page component
  return (
    <>
      <SEO title="Home" />
      <Layout location={location}>
        <Type style={{ maxWidth: "800px" }}>
          New York-based designer with 6 years experience building digital user
          interfaces within agile product teams.
          <br />
          <br />
          <br />
        </Type>

        {WebCopy.map(i => (
          <>
            <Article key={i.id} i={i} />
          </>
        ))}
      </Layout>
    </>
  )
}

export default IndexPage
