import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Article from "../components/Article"
import { Type, Paragraph } from "../components/Type"

import { WebCopy } from "../copy/webCopy"
import Image from "../components/Image"

const IndexPage = ({ location }) => {
  // Route location is provided by gatsby per page component
  return (
    <>
      <SEO title="Home" />
      <Layout location={location}>
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
