import React, { useState } from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Article from "../components/Article"
import Type from "../components/Type"

import { WebCopy, ProjectCopy } from "../copy/webCopy"
import About from "../components/About"
import { motion } from "framer-motion"
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
        // key={i.id}
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
          <div style={{ width: "70%", maxWidth: "1300px", marginLeft: "auto" }}>
            <Image />
          </div>
        </div>
        {WebCopy.map(i => (
          <>
            <Article key={i.id} i={i} />
          </>
        ))}
        <About />
      </Layout>
    </>
  )
}

export default IndexPage
