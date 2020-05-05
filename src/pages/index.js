import React from "react"
import { Link } from "gatsby"

import "../components/styles.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Article from '../components/Article';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Layout>
      <h1>
          Matthew Clarke.&nbsp;
          <Link href='/'>About</Link>.&nbsp;
          <Link href='/'>Contact</Link>.&nbsp;
          <br />
          Product Design.
      </h1>
      <div style={{ maxWidth: '360px' }} className="centered" >
        <Image />
      </div>
      <Article
        heading='Liminal'
        slug='A personal media library for the web.'
        footer='Principal Design. 2020–On-going.'
      />
      <Article
        heading='Datavore Labs'
        slug='The code-free tool for advanced time-series analysis.'
        footer='Design Lead. 2019-On-going.'
      />
      <Article
        heading='Splashlight x Telmar'
        slug='The highest standards in e-commerce photography and video.'
        footer='UX Manager. 2017-2019'
      />
      <Article
        heading='Gagosian Gallery'
        slug='Modern and contemporary art'
        footer='Publications Assistant. 2020-On-going.'
      />
    </Layout>
  </>
);

export default IndexPage
