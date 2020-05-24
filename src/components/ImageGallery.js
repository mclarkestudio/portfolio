import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import * as R from "ramda"
import styled from "styled-components"
import Swiper from "react-id-swiper"

import "./imagegallery.css"
import device from "./devices"

const ImageWrapper = styled.div`
  padding-bottom: 16px;

  /* -webkit-box-shadow: 4px 15px 81px -15px rgba(255, 0, 0, 0.37);
  -moz-box-shadow: 4px 15px 81px -15px rgba(0, 0, 0, 0.37);
  box-shadow: 4px 15px 81px -15px rgba(0, 0, 0, 0.37); */

  @media ${device.tablet} {
    padding-bottom: 32px;
  }
`

export const highQualityFluidImage = graphql`
  fragment highQualityFluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1280, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const ImageGallery = ({ dir }) => {
  // Get all images in each /dir in /images/
  // Add an image to /images/liminal/, etc
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          relativeDirectory: { glob: "*" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        }
      ) {
        edges {
          node {
            id
            relativeDirectory
            ...highQualityFluidImage
          }
        }
      }
    }
  `)

  // The array of nodes from graphql
  const dataEdges = data.allFile.edges
  // Group image nodes into directories
  const fn = R.groupBy(R.path(["node", "relativeDirectory"]))
  const groupedNodes = fn(dataEdges)
  // console.info(groupedNodes, 'Image Nodes Grouped By Directory')
  // Return directory based on props
  function getDirData(dir) {
    switch (dir) {
      // If I have props.dir, then lookup dir data in groupedNodes
      case dir:
        var p = dir
        console.info(
          `🖼️ Rendering ${groupedNodes[p].length} images from /${p} into ImageGallery`
        )
        return groupedNodes[p]
      default:
        console.error(
          dir,
          "Missing dir prop in ImageGallery. Rendering all images to component."
        )
        return null
    }
  }
  // Render data to image component
  const renderData = getDirData(dir)

  // SWIPER -------------------------------------------------------
  const [gallerySwiper, getGallerySwiper] = useState(null)
  const [thumbnailSwiper, getThumbnailSwiper] = useState(null)
  const gallerySwiperParams = {
    themeColor: "black",
    getSwiper: getGallerySwiper,
    spaceBetween: 10,
    autoplay: {
      delay: 3000,
    },
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      // nextEl: ".swiper-button-next swiper-button-black gallery-next",
      // prevEl: ".swiper-button-prev swiper-button-black gallery-prev",
      clickable: true,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   type: "fraction",
    // },
    // scrollbar: {
      // el: ".swiper-scrollbar",
      // draggable: true,
      // hide: true,
    // },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  }

  const thumbnailSwiperParams = {
    getSwiper: getThumbnailSwiper,
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: "auto",
    touchRatio: 0.2,
    slideToClickedSlide: true,
    slideActiveClass: "gallery-thumbs--item__active",
    wrapperClass: "swiper-wrapper",
    a11y: {
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
    },
    mousewheel: true,
  }

  useEffect(() => {
    if (
      gallerySwiper !== null &&
      gallerySwiper.controller &&
      thumbnailSwiper !== null &&
      thumbnailSwiper.controller
    ) {
      gallerySwiper.controller.control = thumbnailSwiper
      thumbnailSwiper.controller.control = gallerySwiper
    }
  }, [gallerySwiper, thumbnailSwiper])

  // console.log(gallerySwiper, "Gallery Swiper")
  // console.log(thumbnailSwiper, "Thumbnail Swiper")

  return (
    <div>
      {/* <div className="gallery-thumbs">
        <Swiper {...thumbnailSwiperParams}>
          {renderData.map(i => (
            <div key={i.node.id} className="gallery-thumbs--item">
              <Img
                fluid={i.node.childImageSharp.fluid}
                alt={i.node.childImageSharp.fluid}
              />
            </div>
          ))}
        </Swiper>
      </div> */}
      <Swiper {...gallerySwiperParams}>
        {renderData.map(i => (
          <ImageWrapper>
            <Img
              key={i.node.id}
              fluid={i.node.childImageSharp.fluid}
              alt={i.node.name}
            />
          </ImageWrapper>
        ))}
      </Swiper>
    </div>
  )
}

ImageGallery.propTypes = {
  dir: PropTypes.string.isRequired,
}

export default ImageGallery
