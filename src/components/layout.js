import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { transitionTime } from "./Transition"
import device from "./devices"

// Normalizations
import "./styles.css"
// Fonts
import "../static/fonts/inter.css"

export const TextBlock = styled.div`
  flex: 1 1 auto;
  /* margin: 1rem auto; */
  max-width: 800px;
`

export const ImageBlock = styled.div`
  margin: 4rem 0rem 0rem 0rem;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
/* 
  @media ${device.tablet} {
    flex-direction: column;
  } */
`

export const Item = styled.div`
  flex: 1 1 auto;
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
