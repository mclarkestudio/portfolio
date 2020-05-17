import React from "react"
import SEO from "../components/seo"
import { ImageGallery } from "../components/ImageGallery"

const IndexPage = () => {
  return (
    <>
      <SEO title="test" />
      {/* <Layout> */}
      <ImageGallery dir="liminal" />
      <ImageGallery dir="datavore" />
      {/* </Layout> */}
    </>
  )
}

export default IndexPage
