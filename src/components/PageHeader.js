import React from "react"
import Type from "./Type"
import { Link } from "gatsby"
import styled from "styled-components"
import device from "./devices"
import { Row, RowItem } from "./layout"
import Clock from "react-live-clock"

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
  //   var isOther = !isProjects | !isAbout ? true : false
  console.log(location)

  const ProjectsLink = () => <Link to="/">← Projects</Link>
  const AboutLink = () => <Link to="about">About</Link>
  const AllLinks = () => (
    <>
      <ProjectsLink />
      ,&nbsp;
      <AboutLink />
    </>
  )

  //   const ProjectsSpan = <Link to="/">← Projects</Link>
  //   const AboutSpan = <Link to="about">About</Link>
  //   const otherSpan = ProjectsSpan + ",&nbsp;" + AboutSpan

  return (
    <>
      <StyledDiv>
        <a name="home" />
        <Row>
          <RowItem>
            <Type>
              <span style={{ whiteSpace: "nowrap" }}>
                Matthew Clarke,&nbsp;
              </span>
              {isAbout && <ProjectsLink />}
              {isProjects && <AboutLink />}
              {!isAbout && !isProjects && <AllLinks />}
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
          </RowItem>
          <span>
            <br />
            <Type textAlign="right" whiteSpace="nowrap">
              ⌖ New York City
            </Type>
            {/* <Type>◭◭∊x ⋰ ⋮⋱⋰⋮ ⋮</Type> */}
            <Type textAlign="right">
              ❂ <Clock format="h:mm a" interval={1000} ticking={true} />
            </Type>
          </span>
        </Row>
      </StyledDiv>
    </>
  )
}

export default PageHeader
