// import React from "react"
import styled from "styled-components"
import { transitionTime } from "./Transition"
import { device } from "./Device"

export const LayoutContainer = styled.div`
  margin: auto;
  max-width: 1280px;
  background-color: ${props => props.bgcolor || "none"};
  transition: width ${transitionTime}, margin-left ${transitionTime};

  /* Responsive code for offset containers */
  /* @media ${device.laptop} {
    width: 70%;
  }
  
  @media ${device.laptopL} {
    width: 50%;
  } */
`

export default LayoutContainer
