import React from "react"

import Layout, { ContentContainer } from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Article from "../components/Article"
import Type from "../components/Type"
import Contact from "../components/Contact"

import { WebCopy, ProjectCopy } from "../copy/webCopy"
import HoverLink from "../components/hoverLink"

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
        <HoverLink key={i.id} linkContent={i.id} hoverContent={i.heading} />
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
        <Contact />
      </Layout>
    </>
  )
}

export default IndexPage
