import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { transitionTime } from "./Transition"

// Base, custom normalizations
// Dont import other styles here

export const LayoutContainer = styled.div`
  margin: auto;
  max-width: 1280px;
  background-color: ${props => props.bgcolor || "none"};
  transition: width ${transitionTime}, margin-left ${transitionTime};
`

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `1.5rem`,
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
