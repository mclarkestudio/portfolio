import React from "react"
import Type, { Paragraph } from "./Type"
import styled from "styled-components"
import { TextBlock } from "./layout"
import HoverLink from "./hoverLink"

const StyledSection = styled.div`
  background-color: black;
  color: white;
  margin: 1.5rem -1.5rem -1.5rem -1.5rem;
  padding: 1.5rem;

  *,
  a {
    color: white;
  }
`

const Contact = () => {
  return (
    <>
      <Type>
        <a name="about" />
        <hr />
      </Type>
      <br />
      <br />
      <Type>
        <div style={{ maxWidth: "800px" }}>
          Matthew is a product designer, developer, and team lead based in New
          York City. He has spent 5 years designing and improving user
          experience within agile product teams. As a design lead, Matthew works
          across a range of diciplines in order to define customer problems,
          prioritize work, and build products and services that work.
        </div>
      </Type>
      <StyledSection>
        <Type>
          <a name="Contact" />
          Contact
        </Type>
        <br />
        <br />
        <HoverLink
          href="mailto:mclarkstudio@gmail.com"
          linkContent="Email"
          hoverContent="mclarkestudio@gmail.com"
        />
        <HoverLink
          href="https://www.linkedin.com/in/mclarkestudio"
          linkContent="LinkedIn"
          hoverContent="linkedin.com/in/mclarkestudio"
        />
        <HoverLink
          href="https://github.com/mclarkestudio"
          linkContent="Github"
          hoverContent="github.com/mclarkestudio"
        />
        <HoverLink
          href="https://www.are.na/matthew-clarke"
          linkContent="Arena"
          hoverContent="are.na/matthew-clarke"
        />
        <HoverLink
          href="https://opensea.io/assets/0x6ac07b7c4601b5ce11de8dfe6335b871c7c4dd4d/4000464563"
          linkContent="Urbit"
          hoverContent="~migpur-tippel"
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
