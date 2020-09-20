import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Article from "../components/Article"
import Element from "../components/element"
import { WebCopy } from "../copy/webCopy"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Type, Paragraph, StickyTitle, Heading } from "../components/Type"
import styled from "styled-components"

import R from "ramda"

export const highQualityFluidImage = graphql`
  fragment highQualityFluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1680, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

const IndexPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          relativeDirectory: { glob: "posts" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        }
      ) {
        edges {
          node {
            id
            relativeDirectory
            ...highQualityFluidImage
          }
        }
      }
    }
  `)

  // The array of nodes from graphql
  const dataEdges = data.allFile.edges
  const renderData = dataEdges

  return (
    <>
      <SEO title="Matthew Clarke. Principal Product Designer." />
      <Layout location={location}>
        {/* <Type>☰ ☱ ☲ ☳ ☴ ☵ ☶ ☷</Type> */}
        <hr />
        {/* <LiminalVideo /> */}
        {renderData.map(i => (
          <Img
            key={i.node.id}
            fluid={i.node.childImageSharp.fluid}
            alt={i.node.name}
          />
        ))}
        <hr />
        <br />
      </Layout>
    </>
  )
}

export default IndexPage
