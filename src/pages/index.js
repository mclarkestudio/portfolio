import React, { useState } from "react"
import { Link } from "gatsby"

import "../components/styles.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Article from '../components/Article'
import Type from "../components/Type"
import { LayoutContainer  } from '../components/PageLayout'

import { WebCopy, ProjectCopy } from '../copy/webCopy'

const NavItem = ({i}) => {

  // State for NavItems
  const [hovered, setHovered] = useState(false);

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
          <span className="title">{i.heading}</span>
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
          <Type title inLine>
            Matthew Clarke,&nbsp;
          </Type>
          <Type title inLine>
            <a href='/#about'>About</a>,&nbsp;
          </Type>
          <Type title inLine>
            <a href='/#contact'>Contact</a>.
          </Type>
          <br />
          <Type title inLine>
            Product Design. Web Development. 
          </Type>
          <br />
          <br />
          {ProjectCopy.map(i => (
            <NavItem 
              key={i.id}
              i={i}
            />
          ))}
        <br />
        </div>
        <Image />
      </div>
      {WebCopy.map(i => (
        <Article
          key={i.id}
          i={i}
        />
      ))}
      {/* <hr /> */}
      {/* <div className='footer'>
        <Type>
            <a name='about' />
          </Type>
          <Type inLine>
          Matthew is a product designer, developer,
          and team lead based in New York City.
          He has spent 5 years designing and improving user experience within agile product teams. 
          As a design lead, Matthew works across a range of diciplines in order to define customer 
          problems, prioritize work, and build products and services that work.
          </Type>
          <Type inLine>
            <Link href='/#contact'>Contact</Link>.
          </Type>
          <Type>
            Product Design. Service Design. Team Lead.
        </Type>
      </div>
      <div className='footer'>
        <Type inLine className="title">
            <a name='contact' />
            Contact,&nbsp;
          </Type>
          <Type inLine className="title">
            <Link href='/'>mclarkestudio@gmail.com</Link>,&nbsp;
          </Type>
          <Type inLine className="title">
            <Link href='/#contact'>Contact</Link>.
          </Type>
          <Type className="title">
            Product Design. Service Design. Team Lead.
        </Type>
      </div> */}
      
      <LayoutContainer>
        {/* <Type>About</Type> */}
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
