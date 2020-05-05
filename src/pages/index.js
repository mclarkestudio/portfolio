import React, { useState } from "react"
import { Link } from "gatsby"

import "../components/styles.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Article from '../components/Article'
import Type from "../components/Type"

const ArticleCopy = [
  {
    heading: 'Liminal',
    slug: 'A personal media library for the web.',
    footer: '2020–On-going',
  },
  {
    heading: 'Datavore Labs',
    slug: 'The code-free tool for advanced time-series analysis.',
    footer: '2020–On-going',
  },
  {
    heading: 'Splashlight x Telmar',
    slug: 'The highest standards in e-commerce photography and video.',
    footer: '2020–On-going',
  },
  {
    heading: 'Gagosian Gallery',
    slug: 'Modern and contemporary art.',
    footer: '2020-On-going.',
  },
]

const IndexPage = () => {

  const [expanded, setExpanded] = useState(0);

  return (
  <>
    <SEO title="Home" />
    <Layout>
      <div>
        <Type className="title sticky">
            Matthew Clarke.&nbsp;
            <Link href='/'>About</Link>.&nbsp;
            <Link href='/'>Contact</Link>.&nbsp;
            <br />
            Product Design.&nbsp;
        </Type>
        <Image />
      </div>
      {/* <Type variant='' */}
      {ArticleCopy.map(i => (
        <Article
          key={i}
          i={i}
          expanded={expanded}
          setExpanded={setExpanded}
          heading={i.heading}
          slug={i.slug}
          footer={i.footer}
        />
      ))}
      <div>About</div>
      <div>Contact</div>
    </Layout>
  </>
  )
};

export default IndexPage
