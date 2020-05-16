import React from "react"
import Type from "./Type"
import { Link } from "gatsby"
import styled from "styled-components"
import device from "./devices"

const StyledDiv = styled.div`
  /* height: 87vh; */

  @media ${device.tablet} {
    /* height: 85vh; */
  }
  @media ${device.laptop} {
    /* height: 84vh; */
  }
`

const PageHeader = ({ location }) => {
  var isAbout = location.pathname.includes("about") ? true : false
  var isProjects = location.pathname === "/" ? true : false
  console.log(location)

  const ProjectsSpan = <Link to="/">← Projects</Link>
  const AboutSpan = <Link to="about">About</Link>

  return (
    <StyledDiv>
      <a name="home" />
      <Type>
        Matthew Clarke,&nbsp;
        {isAbout && ProjectsSpan}
        {isProjects && AboutSpan}
        ,&nbsp;
        <a href="#contact">Contact</a>.
        <br />
        Design Lead. Product Design and Development.
        <br />
        <br />
        {/* <Type style={{ maxWidth: "800px" }}>
          New York-based designer with 6 years experience building digital user
          interfaces within agile product teams.
        </Type> */}
        {/* {ProjectCopy.map(i => (
          <HoverLink key={i.id} linkContent={i.id} hoverContent={i.heading} />
        ))} */}
      </Type>
      <br />
      {/* <div style={{ width: "70%", maxWidth: "1300px", marginLeft: "auto" }}>
              <Image />
            </div> */}
    </StyledDiv>
  )
}

export default PageHeader
