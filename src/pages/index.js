import React, { useState } from "react"
import { Link } from "gatsby"

import "../components/styles.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Article from '../components/Article'
import Type from "../components/Type"
import { LayoutContainer } from '../components/PageLayout'

import { ArticleCopy } from '../copy/ArticleCopy'

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
      <LayoutContainer bgcolor='white'>
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
      </LayoutContainer>
      <div>About</div>
      <div>Contact</div>
    </Layout>
  </>
  )
};

export default IndexPage
