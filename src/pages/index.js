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
        <div className="title sticky">
          <Type inLine className="title">
            Matthew Clarke. &nbsp;
          </Type>
          <Type inLine className="title">
            <Link href='/'>About</Link>.&nbsp;
          </Type>
          <Type inLine className="title">
            <Link href='/'>Contact</Link>.
          </Type>
          <Type className="title">
            Product Designer. Web Developer. Team Lead.
          </Type>
          <Type>
            <Link href='/'>L-2020+</Link>.&nbsp;
          </Type>
          <Type>
            <Link href='/'>D-2020</Link>.&nbsp;
          </Type>
          <Type>
            <Link href='/'>S-2018-20</Link>.&nbsp;
          </Type>
        </div>

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
