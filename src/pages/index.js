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

const NavItem = ({i}) => {

  // State for NavItems
  const [hovered, setHovered] = useState(false);

  // Local boolean enables showing div per item in iteration map
  const isHovered = i === hovered;

  function toggleHover(i) {
    setHovered(!hovered);
  }
  
  return (
    <Type 
      key='id' 
      className="title"
    >
      <a
        href={`/#${i.id}`}
        onMouseEnter={() => toggleHover()}
        onMouseOut={() => toggleHover()}
      >
        {i.id}
      </a>&nbsp;
      {hovered && (
        <>
          <strong className="title">{i.heading}</strong>
          {/* <span className="title">{i.slug}</span> */}
        </>
      )}
    </Type>
  )
}


const IndexPage = () => {
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
            <Link href='/#sbout'>About</Link>,&nbsp;
          </Type>
          <Type inLine className="title">
            <Link href='/#contact'>Contact</Link>.
          </Type>
          <Type className="title">
            Product Design. Service Design. Team Lead.
          </Type>
          <br />
          {ArticleCopy.map(i => (
            <NavItem 
              key={i.id}
              i={i}
              // hovered={hovered}
              // setHovered={setHovered}
            />
          ))}
        <br />
        </div>
        <Image />
      </div>
      <LayoutContainer bgcolor='white'>
        {ArticleCopy.map(i => (
          <Article
            key={i.id}
            i={i}
            heading={i.heading}
            slug={i.slug}
            date={i.date}
            id={i.id}
          />
        ))}
      </LayoutContainer>
      <hr />
      <LayoutContainer>
        <Type>About</Type>
        <p></p>
      </LayoutContainer>
      {/* <LayoutContainer bgcolor='beige'>
        <Type> Contact</Type>
      </LayoutContainer> */}
    </Layout>
  </>
  )
};

export default IndexPage
