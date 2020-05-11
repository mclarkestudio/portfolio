import React from "react"
import PropTypes from "prop-types"
import "./styles.css"
import "../static/Inter Web/inter.css"

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
