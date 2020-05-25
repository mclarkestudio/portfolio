import React from "react"
import styled from "styled-components"
import { ImageWrapper } from "./ImageGallery"

import LiminalSource from "../videos/liminal.mp4"

const VideoBackground = styled.div`
  display: flex;
  padding: 5rem 0;
  justify-content: center;
  align-items: center;

  background-color: #f7fbfa;
`

const VideoContainer = styled.div`
  width: 70%;
`

const StyledVideo = styled.video`
  box-shadow: 3px 3px 10px 6px #ccc;
  border-radius: 4px;
  border-bottom: 1px solid white;
  border-bottom-style: inset;
`

const VideoWrapper = ({ children }) => {
  return (
    <VideoBackground>
      <VideoContainer>
        <StyledVideo width="100%" autoPlay loop>
          {children}
        </StyledVideo>
      </VideoContainer>
    </VideoBackground>
  )
}

export const LiminalVideo = () => {
  return (
    <VideoWrapper>
      <source src={LiminalSource} type="video/mp4" />
    </VideoWrapper>
  )
}
