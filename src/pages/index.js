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
        {/* <Type bold>Products and Services</Type> */}
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
