import React, { useEffect, useState, Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import * as R from "ramda"
import styled from "styled-components"
import Swiper from "react-id-swiper"
import "swiper/css/swiper.css"

import "./imagegallery.css"
import device from "./devices"
import { LiminalVideo, DatavoreWebVideo, DatavoreProductVideo } from "./videos"

export const ImageWrapper = styled.div`
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

export const ImageGallery = ({ dir, video }) => {
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
  const groupImages = R.groupBy(R.path(["node", "relativeDirectory"]))
  const groupedNodes = groupImages(dataEdges)
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
  // const [gallerySwiper, getGallerySwiper] = useState(null)
  // const [thumbnailSwiper, getThumbnailSwiper] = useState(null)
  const gallerySwiperParams = {
    themeColor: "black",
    // getSwiper: getGallerySwiper,
    // spaceBetween: 30,
    // effect: "fade",
    // autoplay: {
    //   delay: 3000,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets",
      // renderBullet: (index, className) => {
      //   return '<span className="' + className + '">' + (index + 1) + "</span>"
      // },
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  }

  return (
    <div>
      <Swiper {...gallerySwiperParams} rebuildOnUpdate>
        {/* Returning Fragments because swiper always wants a react element? (hack) */}
        {dir === "liminal" ? (
          <ImageWrapper>
            <LiminalVideo />
          </ImageWrapper>
        ) : (
          <Fragment></Fragment>
        )}
        {dir === "datavore" ? (
          <ImageWrapper>
            <DatavoreProductVideo />
          </ImageWrapper>
        ) : (
          <Fragment></Fragment>
        )}
        {dir === "datavore" ? (
          <ImageWrapper>
            <DatavoreWebVideo />
          </ImageWrapper>
        ) : (
          <Fragment></Fragment>
        )}
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
