import React from "react"
import PropTypes from "prop-types"
import "./styles.css"

const Layout = ({ children }) => {

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          padding: `0 0.5rem 0.5rem`,
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
