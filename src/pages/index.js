import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Article from "../components/Article"
import { WebCopy } from "../copy/webCopy"
import Type, { Heading } from "../components/Type"

const IndexPage = ({ location }) => {
  // Route location is provided by gatsby per page component
  return (
    <>
      <SEO title="Home" />
      <Layout location={location}>
        <hr />
        <Heading>Projects</Heading>
        <hr />
        <Heading>Liminal</Heading>
        <hr />
        <Heading>Datavore</Heading>
        <hr />
        <Heading>Splashlight</Heading>
        <hr />
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
