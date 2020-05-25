import React from "react"
import LiminalSource from "../videos/liminal.mp4"
import styled from "styled-components"

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
`

export const LiminalVideo = () => {
  return (
    <VideoBackground>
      <VideoContainer>
        <StyledVideo width="100%" autoPlay loop>
          <source src={LiminalSource} type="video/mp4" />
        </StyledVideo>
      </VideoContainer>
    </VideoBackground>
  )
}
