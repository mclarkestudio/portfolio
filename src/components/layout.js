import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { transitionTime } from "./Transition"

export const LayoutContainer = styled.div`
  /* margin: auto; */
  /* max-width: 1080px; */
  background-color: ${props => props.bgcolor || "none"};
  transition: width ${transitionTime}, margin-left ${transitionTime};
`

export const ContentContainer = styled.div`
  max-width: 1080px;
  margin: auto;
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
