import React from "react"

import Swiper from "react-id-swiper"
import "swiper/css/swiper.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ImageGallery } from "../components/ImageGallery"

const SimpleSwiper = () => {
  const params = {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 30,
  }

  const Slides = () => {
    const data = ["Slide 1", "Slide 2", "Slide 3"]
    return data.map(i => <div key={i}>{i}</div>)
  }

  // rebuildOnUpdate renderPrevButton shouldSwiperUpdate
  return (
    <Swiper {...params}>
      <ImageGallery dir="liminal" />
      <Slides />
    </Swiper>
  )
}

const IndexPage = () => {
  return (
    <>
      <SEO title="test" />
      <Layout>
        <SimpleSwiper />
      </Layout>
    </>
  )
}

export default IndexPage
