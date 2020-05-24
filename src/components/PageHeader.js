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

const NoWrapTitle = styled.span`
    white-space: nowrap;
`

const PageHeader = ({ location }) => {
  var isAbout = location.pathname.includes("about") ? true : false
  var isProjects = location.pathname === "/" ? true : false
  //   var isOther = !isProjects | !isAbout ? true : false
  // console.log(location)

  const ProjectsLink = () => <Link to="/" style={{ whiteSpace: 'nowrap' }}>← Projects</Link>
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
        {/* #home anchor content */}
        <a name="home" style={{ display: 'none' }}>Home</a>
        <Row>
          <RowItem>
            <Type>
              <NoWrapTitle>
                Matthew Clarke,&nbsp;
              </NoWrapTitle>
              {isAbout && <ProjectsLink />}
              {isProjects && <AboutLink />}
              {!isAbout && !isProjects && <AllLinks />}
              ,&nbsp;
              <a href="#contact">Contact</a>.
              <br />
              <span>
                Design Lead. Product Design and Development.
              </span>
              <br />
              <br />
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
