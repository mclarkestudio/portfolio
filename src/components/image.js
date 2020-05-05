import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { device } from './Device';
import { transitionTime } from './Transition';
import LayoutContainer from "./PageLayout";

const ImageCard = styled.div`
  max-width: 300px;
  margin: auto;
  padding: 100px 20%;
  z-index: 4;
  transition: max-width ${transitionTime};
  
  @media ${device.tablet} { 
    max-width: 350px;
    /* padding: 10% 30%; */
  }

  @media ${device.laptop} { 
    max-width: 400px;
    /* padding: 10% 30%; */
  }

  @media ${device.laptopL} { 
    max-width: 450px;
    /* padding: 10% 30%; */
  }
`;

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "iphone.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <LayoutContainer bgcolor='black'>
      <ImageCard>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </ImageCard> 
    </LayoutContainer>
  )
}

export default Image
