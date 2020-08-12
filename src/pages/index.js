import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Article from "../components/Article"
import { WebCopy } from "../copy/webCopy"

import { Type, Paragraph, StickyTitle, Heading } from "../components/Type"
import styled from "styled-components"

const ParagraphBlock = styled.div`
  max-width: 900px;
`

const IndexPage = ({ location }) => {
  // Route location is provided by gatsby per page component

  const [mouseActive, setMouseActive] = useState(false)
  return (
    <>
      <SEO title="Matthew Clarke. Principal Product Designer." />
      <Layout location={location}>
        <hr />
        <br />
        <br />
        <ParagraphBlock onMouseEnter={e => setMouseActive(false)}>
          <Type>
            Matthew is currently designing a new software application to help
            people learn about artists online.
          </Type>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </ParagraphBlock>
        <hr />
        <Type onMouseEnter={e => setMouseActive(true)}>
          <br />
          Get in touch
          <br />
          {mouseActive && "mclarkestudio@gmail.com"}
          <br />
          <br />
        </Type>

        {/* <hr /> */}
        {/* <Type>☰ ☱ ☲ ☳ ☴ ☵ ☶ ☷</Type> */}
        {/* {WebCopy.map(i => (
          <>
            <Article key={i.id} i={i} />
          </>
        ))} */}
        {/* <hr /> */}
        <br />
      </Layout>
    </>
  )
}

export default IndexPage
