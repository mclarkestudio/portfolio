import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { LiminalImageGallery } from '../components/ImageGallery';

const IndexPage = () => {
  return (
    <>
      <SEO title="test" />
      <Layout>
        <LiminalImageGallery />
      </Layout>
    </>
  )
}

export default IndexPage
