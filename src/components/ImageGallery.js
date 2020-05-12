import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as R from 'ramda'

export const highQualityFluidImage = graphql`
  fragment highQualityFluidImage on File {
    childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
        }
    }
  }
`

export const ImageGallery = (props) => {

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

    // Return directory based on props
    function getDirData(dir) {
        return (dir === 'liminal' ? groupedNodes.liminal : dataEdges)
      }
    
    // Render data to image component
    const renderData = getDirData(props.dir)

    return (
        <>
            {renderData.map(i => (
                <Img key={i.node.id} fluid={i.node.childImageSharp.fluid} />
            ))}
        </>
    )
}

export default ImageGallery;
