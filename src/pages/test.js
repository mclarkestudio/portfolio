import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { ImageGallery } from '../components/ImageGallery';

const IndexPage = () => {
  return (
    <>
      <SEO title="test" />
      <Layout>
        <ImageGallery dir='liminal'/>
      </Layout>
    </>
  )
}

export default IndexPage
