import React from "react"
import Type, { Heading } from "./Type"
import { Link } from "gatsby"
import styled from "styled-components"
import device from "./devices"
import { Row, RowItem } from "./layout"
import Clock from "react-live-clock"

const StyledDiv = styled.div`
  /* position: sticky; */
  /* top: 0; */
  /* width: 100%; */
  /* height: 900px; */

  @media ${device.tablet} {
    /* height: 85vh; */
  }
  @media ${device.laptop} {
    /* height: 84vh; */
  }
`

const NoWrapTitle = styled.span`
  white-space: nowrap;
`

const StyledLink = styled.a`
  &:hover {
    color: white !important;
  }
`

const PageHeader = ({ location }) => {
  var isAbout = location.pathname.includes("about") ? true : false
  var isProjects = location.pathname === "/" ? true : false

  const ProjectsLink = () => (
    <Link to="/" style={{ whiteSpace: "nowrap" }}>
      ← Projects
    </Link>
  )
  const AboutLink = () => <Link to="about">About</Link>
  const AllLinks = () => (
    <>
      <ProjectsLink />
      ,&nbsp;
      <AboutLink />
    </>
  )

  return (
    <>
      <StyledDiv>
        <Row>
          <RowItem>
            <Type>
              Matthew is an artist, designer, <br /> and software developer.
            </Type>
          </RowItem>
          <span>
            <br />
            <Type textAlign="right" whiteSpace="nowrap">
              ⌖ Brooklyn, NY
            </Type>
            {/* <Type>⋮⋱⋰⋮</Type> */}
            <Type textAlign="right">
              ❂ <Clock format="h:mm a" interval={1000} ticking={true} />
            </Type>
          </span>
        </Row>
        <br />
        <br />
        <Row>
          <span style={{ minWidth: "20%" }}>
            <Type>Currently </Type>
          </span>
          <span>
            <Type>Building a new tool to research art online.</Type>
          </span>
        </Row>
        <br />
        <br />
        <Row>
          <span style={{ minWidth: "20%" }}>
            <Type>Previously </Type>
          </span>
          <span>
            <Type>
              Gagosian Gallery, Vice Media, New Museum of Contemporary Art
            </Type>
          </span>
        </Row>
        <br />
        <br />
      </StyledDiv>
    </>
  )
}

export default PageHeader
