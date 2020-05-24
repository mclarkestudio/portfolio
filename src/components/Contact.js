import React from "react"
import { Heading } from "./Type"
import styled from "styled-components"
// import { TextBlock } from "./layout"
import HoverLink from "./hoverLink"

import resume from '../static/Matthew-Clarke-Resume.pdf'

const DarkDiv = styled.div`
  background-color: #000000;
  color: white;
  /* margin: 1.5rem -1.5rem -1.5rem -1.5rem; */
  padding: 2rem;

  *,
  a {
    color: white;
  }

  hr {
    border-bottom-color: white;
  }
`

// const Box = styled.div`
//   margin: 1rem;
//   padding: 1rem;
//   border: 5px solid white;
// `

// const Box = styled.div`
//   background-color: #000000;
//   color: white;
//   /* margin: 1.5rem -1.5rem -1.5rem -1.5rem; */
//   padding: 2rem;

//   *,
//   a {
//     color: white;
//   }
// `

const Contact = () => {
  return (
    <>
      <DarkDiv>
        <hr />
        <Heading>
          <a name="contact">Contact</a>
        </Heading>
        <hr />
        <br />
        <br />
        <HoverLink
          href="mailto:mclarkestudio@gmail.com"
          linkContent="Email"
          hoverContent="mclarkestudio@gmail.com"
          hoverColor="white"
          target="_blank"
        />
        <HoverLink
          href="https://www.linkedin.com/in/mclarkestudio"
          linkContent="LinkedIn"
          hoverContent="linkedin.com/in/mclarkestudio"
          hoverColor="white"
          target="_blank"
        />
        <HoverLink
          href="https://github.com/mclarkestudio"
          linkContent="Github"
          hoverContent="github.com/mclarkestudio"
          hoverColor="white"
          target="_blank"
        />
        <HoverLink
          href="https://www.are.na/matthew-clarke"
          linkContent="Arena"
          hoverContent="are.na/matthew-clarke"
          hoverColor="white"
          target="_blank"
        />
        <HoverLink
          href="https://opensea.io/assets/0x6ac07b7c4601b5ce11de8dfe6335b871c7c4dd4d/4000464563"
          linkContent="Urbit"
          hoverContent="~migpur-tippel"
          hoverColor="white"
          target="_blank"
        />
        <br />
        <br />
        <br />
        <HoverLink
          href={resume}
          linkContent="Download Resume"
          hoverContent=""
          hoverColor="white"
          download
          target="_blank"
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </DarkDiv>
    </>
  )
}

export default Contact
