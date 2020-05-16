import React from "react"
import Type, { Paragraph } from "./Type"
import styled from "styled-components"
// import { TextBlock } from "./layout"
import HoverLink from "./hoverLink"

const StyledSection = styled.div`
  background-color: #000000;
  color: white;
  /* margin: 1.5rem -1.5rem -1.5rem -1.5rem; */
  padding: 2rem;

  *,
  a {
    color: white;
  }
`

const Contact = () => {
  return (
    <>
      <StyledSection>
        <Type>
          <a name="contact" />
          Contact
        </Type>
        <br />
        <br />
        <HoverLink
          href="mailto:mclarkstudio@gmail.com"
          linkContent="Email"
          hoverContent="mclarkestudio@gmail.com"
          hoverColor="white"
        />
        <HoverLink
          href="https://www.linkedin.com/in/mclarkestudio"
          linkContent="LinkedIn"
          hoverContent="linkedin.com/in/mclarkestudio"
          hoverColor="white"
        />
        <HoverLink
          href="https://github.com/mclarkestudio"
          linkContent="Github"
          hoverContent="github.com/mclarkestudio"
          hoverColor="white"
        />
        <HoverLink
          href="https://www.are.na/matthew-clarke"
          linkContent="Arena"
          hoverContent="are.na/matthew-clarke"
          hoverColor="white"
        />
        <HoverLink
          href="https://opensea.io/assets/0x6ac07b7c4601b5ce11de8dfe6335b871c7c4dd4d/4000464563"
          linkContent="Urbit"
          hoverContent="~migpur-tippel"
          hoverColor="white"
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </StyledSection>
    </>
  )
}

export default Contact
