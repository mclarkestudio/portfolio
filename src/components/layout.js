import React from "react"
import PropTypes from "prop-types"
import "./styles.css"

const Layout = ({ children }) => {

  return (
    <>
      <div
        style={{
          padding: `0 1rem`,
          maxWidth: '1280px',
          marginLeft:'400px'
        }}
      >
        <main>
          {children}
        </main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
