import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import device from "./devices"
// import PageHeader from "./PageHeader"
import Contact from "./Contact"

// Normalizations
import "./styles.css"
// Fonts
import "../static/fonts/Inter/inter.css"
import "../static/fonts/IBM-Plex/css/ibm-plex.min.css"
import PageHeader from "./PageHeader"

export const TextBlock = styled.div`
  flex: 1 1 auto;
  /* margin: 1rem auto; */
  max-width: 800px;
`

export const ContentBlock = styled.div`
  flex: 1 1 auto;
  /* margin: 1rem auto; */
  max-width: 720px;
  margin: auto;
`

export const Row = styled.div`
  display: flex;
  flex-direction: ${props => (props.mobileRow ? "row" : "column")};
  /* max-width: 1920px; */
  justify-content: space-between;
  /* margin: auto; */

  @media ${device.tablet} {
    flex-direction: row;
  }
`

export const RowItem = styled.div`
  flex: 1 1 auto;
  padding: 1rem 0rem 1rem 0rem;
  margin-left: ${props => (props.marginLeft ? props.marginLeft : null)};
  @media ${device.tablet} {
    padding: 1rem 0rem 1rem 0;
  }
  /* max-width: 800px; */
`

export const MainLayout = styled.div`
  padding: 0 1rem;
  margin: 0rem auto;
  max-width: 1280px;

  @media ${device.laptop} {
    padding: 0 3rem;
    margin: 1.5rem auto;
  }
`

const Layout = ({ children, location }) => {
  return (
    <>
      <MainLayout>
        <main>
          <PageHeader location={location} />
          {children}
          <footer>
            <Contact />
          </footer>
        </main>
      </MainLayout>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
