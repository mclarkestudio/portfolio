import React, { useState } from "react"
import PropTypes from "prop-types"
import Type from "./Type"
import styled from "styled-components"
import device from "./devices"

// Mobile links should not have hover state, and should include linkcontent as type

const MobileLinkContent = styled.span`
  ::before {
    display: block;
    content: '${props => props.hoverContent}';
    opacity: 1;
    visibility: visible;
  }

  @media ${device.laptop} {
    display: none;
    ::before {
      display: none;
      opacity: 0;
      visibility: hidden;
    }
  }
`

const DesktopLinkContent = styled.span`
  display: none;

  @media ${device.laptop} {
    display: inline-block;
  }
`

const HoverLink = ({ href, linkContent, hoverContent, hoverColor, props }) => {
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
          {...props}
        >
          {linkContent}
        </a>
        &nbsp;
        <MobileLinkContent hovered={hovered} hoverContent={hoverContent}>
          <br />
        </MobileLinkContent>
        <DesktopLinkContent>
          {hovered && <span>{hoverContent}</span>}
        </DesktopLinkContent>
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
