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
          <a href='/'>About</a>.&nbsp;
          <a href='/'>Contact</a>.&nbsp;
          <br />
          Product Design.
      </h1>
      <div style={{ width: '460px' }} className="centered" >
        <Image />
      </div>
      <Article>
      </Article>
    </Layout>
  </>
);

export default IndexPage
