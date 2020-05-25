import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import device from "./devices"

import LiminalSource from "../videos/liminal.mp4"
import DatavoreProductSource from "../videos/datavore.mp4"
import DatavoreWebSource from "../videos/datavore-web.mp4"
import liminalScreen from "../images/liminalScreen.png"
import datavoreWebScreen from "../images/datavoreWebScreen.png"
import datavoreProductScreen from "../images/datavoreProductScreen.png"

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
      <source src={LiminalSource} type="video/mp4" />
    </VideoWrapper>
  )
}

export const DatavoreWebVideo = () => {
  return (
    <VideoWrapper poster={datavoreWebScreen}>
      <source src={DatavoreWebSource} type="video/mp4" />
    </VideoWrapper>
  )
}

export const DatavoreProductVideo = () => {
  return (
    <VideoWrapper poster={datavoreProductScreen}>
      <source src={DatavoreProductSource} type="video/mp4" />
    </VideoWrapper>
  )
}
