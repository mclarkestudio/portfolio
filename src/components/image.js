import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { device } from "./Device"
import { transitionTime } from "./Transition"

export const ImageCard = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 80px 10%;
  z-index: 4;
  transition: max-width ${transitionTime};
  
  /* Responsive code for offset containers */
  /* @media ${device.tablet} { 
    max-width: 300px;
    padding: 10% 30%;
  }

  @media ${device.laptop} { 
    max-width: 320px;
    padding: 10% 30%;
  }

  @media ${device.laptopL} { 
    max-width: 400px;
    padding: 10% 30%;
  } */
`

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

const Image = props => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hero8.png" }) {
        ...fluidImage
      }
      iphoneImage: file(relativePath: { eq: "iphone.png" }) {
        ...fluidImage
      }
    }
  `)

  // Props to image path
  // @TODO: change way images are queried for articles
  const placeholderPath = data.placeholderImage.childImageSharp.fluid
  const iphonePath = data.iphoneImage.childImageSharp.fluid

  const imagePath = props.iphone ? iphonePath : placeholderPath

  return <Img fluid={imagePath} />
}

export default Image
