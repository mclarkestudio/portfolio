import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as R from 'ramda'
// import styled from "styled-components"
// import { device } from "./Device"
// import { transitionTime } from "./Transition"

// export const ImageCard = styled.div`
//   max-width: 400px;
//   margin: auto;
//   padding: 80px 10%;
//   z-index: 4;
//   transition: max-width ${transitionTime};
// `

export const highQualityFluidImage = graphql`
  fragment highQualityFluidImage on File {
    childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
        }
    }
  }
`

export const LiminalImageGallery = () => {

    // Get all images in /images/ANY_DIRECTORY
    const data = useStaticQuery(graphql`
        query {
            allFile(filter: {relativeDirectory: {glob: "*"}, extension: {regex: "/(jpg)|(png)|(jpeg)/"}}) {
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
    const dataEdges = data.allFile.edges;

    // Group image nodes into directories
    const fn = R.groupBy(R.path(['node','relativeDirectory']))
    const groupedNodes = fn(dataEdges)
    console.info(groupedNodes, 'Image Nodes Grouped By Directory')

    return (
        <>
            {data.allFile.edges.map(i => (
                <Img key={i.node.id} fluid={i.node.childImageSharp.fluid} />
            ))}
        </>
    )
}

export default LiminalImageGallery;
