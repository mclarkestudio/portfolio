import React, { useState } from "react"
import PropTypes from "prop-types"
import Type from "./Type"

const HoverLink = ({ href, linkContent, hoverContent, hoverColor }) => {
  const [hovered, setHovered] = useState(false)
  function toggleHover(i) {
    setHovered(!hovered)
  }

  return (
    <>
      <Type hoverColor={hoverColor}>
        <a
          onMouseEnter={() => toggleHover()}
          onMouseLeave={() => toggleHover()}
          href={href}
        >
          {linkContent}
        </a>
        &nbsp;
        {hovered && <span>{hoverContent}</span>}
      </Type>
    </>
  )
}

HoverLink.propTypes = {
  href: PropTypes.string.isRequired,
  linkContent: PropTypes.string.isRequired,
  hoverContent: PropTypes.string.isRequired,
}

HoverLink.defaultProps = {
  href: "www.google.com",
  linkContent: "linkContent",
  hoverContent: "hoverContent",
}

export default HoverLink
