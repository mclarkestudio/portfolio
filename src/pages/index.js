import React, { useState } from "react"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/seo"
import Article from "../components/Article"
import Type from "../components/Typeface"

import { WebCopy, ProjectCopy } from "../copy/webCopy"
// import LayoutContainer from "../components/Layout"
// import Hero from "../components/Hero"

const NavItem = ({ i }) => {
  // NavItem hover toggle
  const [hovered, setHovered] = useState(false)
  function toggleHover(i) {
    setHovered(!hovered)
  }

  return (
    <div>
      <a
        key="id"
        href={`/#${i.id}`}
        onMouseEnter={() => toggleHover()}
        onMouseLeave={() => toggleHover()}
      >
        {i.id}
      </a>
      &nbsp;
      {hovered && <span className="title">{i.heading}</span>}
    </div>
  )
}

const StickyPageTitle = () => {
  return (
    <Type>
      Matthew Clarke,&nbsp;
      <a href="/#about">About</a>,&nbsp;
      <a href="/#contact">Contact</a>.
      <br />
      Design Lead. Product Design and Development.
      <br />
      <br />
      {ProjectCopy.map(i => (
        <NavItem key={i.id} i={i} />
      ))}
    </Type>
  )
}

const IndexPage = () => {
  return (
    <>
      <SEO title=" " />
      <Layout>
        <div>
          <a name="home" />
          <StickyPageTitle />
          <br />
          <div style={{ maxWidth: "70%", marginLeft: "auto" }}>
            <Image />
          </div>
        </div>
        {WebCopy.map(i => (
          <>
            <Article key={i.id} i={i} />
          </>
        ))}
        <Type>
          <a name="about" />
          About
        </Type>
      </Layout>
    </>
  )
}

export default IndexPage
