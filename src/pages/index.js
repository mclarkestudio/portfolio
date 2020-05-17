import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Article from "../components/Article"
import { WebCopy } from "../copy/webCopy"
import Image from "../components/image"

const IndexPage = ({ location }) => {
  // Route location is provided by gatsby per page component
  return (
    <>
      <SEO title="Home" />
      <Layout location={location}>
        <Image />
        {WebCopy.map(i => (
          <>
            <Article key={i.id} i={i} />
          </>
        ))}
        <hr />
        <br />
      </Layout>
    </>
  )
}

export default IndexPage
