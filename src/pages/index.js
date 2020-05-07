import React, { useState } from "react"

import Layout from "../components/layout"
import Image, { ImageCard } from '../components/image';
import SEO from "../components/seo"
import Article from '../components/Article'
import Type from "../components/Type"

import { WebCopy, ProjectCopy } from '../copy/webCopy'
import LayoutContainer from "../components/PageLayout"
import Hero from '../components/Hero';


const NavItem = ({i}) => {

  // State and toggle action for NavItem Hover
  const [hovered, setHovered] = useState(false);
  function toggleHover(i) {
    setHovered(!hovered);
  }

  return (
    <div>
      <a
        key='id' 
        href={`/#${i.id}`}
        onMouseEnter={() => toggleHover()}
        onMouseLeave={() => toggleHover()}
      >
        {i.id}
      </a>
      &nbsp;
      {hovered && (
          <span className="title">{i.heading}</span>
      )}
    </div>
  )
}

const StickyPageTitle = () => {
  return (
    <Type title>
      Matthew Clarke,&nbsp;
      <a href='/#about'>About</a>,&nbsp;
      <a href='/#contact'>Contact</a>.
      <br />
      Product Design. Web Development. Design Lead.
      <br />
      <br />
      {ProjectCopy.map(i => (
        <NavItem 
          key={i.id}
          i={i}
        />
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
        <div style={{ maxWidth: '800px', marginLeft: 'auto' }}>
          {/* <Hero /> */}
          <Image />
        </div>
        {/* <hr /> */}
      </div>
      {WebCopy.map(i => (
        <>
          <br />
          <br />
          <Article
            key={i.id}
            i={i}
          />
          {/* <hr /> */}
        </>
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
    </Layout>
  </>
  )
};

export default IndexPage
