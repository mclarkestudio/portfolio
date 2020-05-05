import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { device } from './Device';
import { transitionTime } from './Transition';

const ImageContainer = styled.div`
  margin-left: 0;
  width: 100%;
  background-color: black;
  transition: width ${transitionTime}, margin-left ${transitionTime};

  @media ${device.laptop} { 
    margin-left: 5%;
    width: 90%;
  }
  @media ${device.laptopL} { 
    margin-left: 10%;
    width: 70%;
  }
`;

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
    <ImageContainer>
      <ImageCard>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </ImageCard> 
    </ImageContainer>
  )
}

export default Image
