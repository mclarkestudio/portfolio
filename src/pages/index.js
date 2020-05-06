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
            Matthew Clarke,&nbsp;
          </Type>
          <Type inLine className="title">
            <Link href='/'>About</Link>,&nbsp;
          </Type>
          <Type inLine className="title">
            <Link href='/'>Contact</Link>.
          </Type>
          <Type className="title">
            Product Design and Development.
          </Type>
          <br />
          {ArticleCopy.map(i => (
              <Type key='id' className="title">
                <a href={`/#${i.id}`}>{i.id}</a>.&nbsp;
              </Type>
          ))}
        <br />
        </div>
        <Image />
      </div>
      <LayoutContainer bgcolor='white'>
        {ArticleCopy.map(i => (
          <Article
            key='id'
            i={i}
            expanded={expanded}
            setExpanded={setExpanded}
            heading={i.heading}
            slug={i.slug}
            footer={i.footer}
            id={i.id}
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
