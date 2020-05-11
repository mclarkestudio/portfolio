import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { transitionTime } from "./Transition"
import { device } from "./Device"

import "./styles.css"
import "../static/Inter Web/inter.css"

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

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `1.5rem`,
          // maxWidth: '1280px'
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
