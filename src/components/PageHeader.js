import React from "react"
import Type from "./Type"
import { Link } from "gatsby"

const PageHeader = ({ location }) => {
  var isAbout = location.pathname === "/about" ? true : false
  var isProjects = location.pathname === "/" ? true : false

  return (
    <div>
      <a name="home" />
      <Type>
        Matthew Clarke,&nbsp;
        {isAbout && <Link to="/">← Projects</Link>}
        {isProjects && <Link to="about">About</Link>}
        ,&nbsp;
        <a href="/#contact">Contact</a>.
        <br />
        Design Lead. Product Design and Development.
        <br />
        <br />
        {/* {ProjectCopy.map(i => (
          <HoverLink key={i.id} linkContent={i.id} hoverContent={i.heading} />
        ))} */}
      </Type>
      <br />
      {/* <div style={{ width: "70%", maxWidth: "1300px", marginLeft: "auto" }}>
              <Image />
            </div> */}
    </div>
  )
}

export default PageHeader
