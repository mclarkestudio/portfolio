import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import device from "./devices"

import liminalSource from "../videos/liminal.mp4"
import liminalScreen from "../images/liminalScreen.png"

import datavoreProductSource from "../videos/datavore.mp4"
import datavoreProductScreen from "../images/datavoreProductScreen.png"
import datavoreWebSource from "../videos/datavore-web.mp4"
import datavoreWebScreen from "../images/datavoreWebScreen.png"

import splashlightSource from "../videos/splashlight.mp4"
import splashlightScreen from "../images/splashlightScreen.png"

const VideoBackground = styled.div`
  display: flex;
  padding: 5rem 0;
  justify-content: center;
  align-items: center;

  background-color: #f7fbfa;
`

const VideoContainer = styled.div`
  /* @TODO: use media queries soon with image height control */
  width: 70%;

  @media ${device.laptop} {
    width: 70%;
  }
`

const StyledVideo = styled.video`
  box-shadow: 3px 3px 10px 6px #ccc;
  border-radius: 4px;
  border-bottom: 1px solid white;
  border-bottom-style: inset;
`

const VideoWrapper = ({ children, poster }) => {
  const videoRef = useRef()

  // Video Speed
  const setPlayBack = () => {
    videoRef.current.playbackRate = 1.5
  }

  return (
    <VideoBackground>
      <VideoContainer>
        <StyledVideo
          poster={poster}
          ref={videoRef}
          onCanPlay={() => setPlayBack()}
          width="100%"
          playsinline
          muted
          autoPlay
          loop
          preload="auto"
        >
          {children}
        </StyledVideo>
      </VideoContainer>
    </VideoBackground>
  )
}

export const LiminalVideo = () => {
  return (
    <VideoWrapper poster={liminalScreen}>
      <source src={liminalSource} type="video/mp4" />
    </VideoWrapper>
  )
}

export const DatavoreWebVideo = () => {
  return (
    <VideoWrapper poster={datavoreWebScreen}>
      <source src={datavoreWebSource} type="video/mp4" />
    </VideoWrapper>
  )
}

export const DatavoreProductVideo = () => {
  return (
    <VideoWrapper poster={datavoreProductScreen}>
      <source src={datavoreProductSource} type="video/mp4" />
    </VideoWrapper>
  )
}

export const SplashlightVideo = () => {
  return (
    <VideoWrapper poster={splashlightScreen}>
      <source src={splashlightSource} type="video/mp4" />
    </VideoWrapper>
  )
}
