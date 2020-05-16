import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import device from "./devices"
import PageHeader from "./PageHeader"
import Contact from "./Contact"

// Normalizations
import "./styles.css"
// Fonts
import "../static/fonts/inter.css"

export const TextBlock = styled.div`
  flex: 1 1 auto;
  /* margin: 1rem auto; */
  max-width: 800px;
`

export const Row = styled.div`
  display: flex;
  flex-direction: ${props => (props.mobileRow ? "row" : "column")};
  max-width: 1920px;
  justify-content: space-between;
  /* margin: auto; */

  @media ${device.tablet} {
    flex-direction: row;
  }
`

export const RowItem = styled.div`
  flex: 1 1 auto;
  padding: 1rem 4rem 1rem 0;
  /* max-width: 800px; */
`

const Layout = ({ children, location }) => {
  return (
    <>
      <div
        style={{
          margin: `1.5rem`,
          // maxWidth: "1280px",
        }}
      >
        <main>
          <PageHeader location={location} />
          {children}
          <footer>
            <Contact />
          </footer>
        </main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
