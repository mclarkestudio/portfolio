import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { device } from "./Device"

import "../static/Inter Web/inter.css"

const BaseType = styled.div`
  /* BASE TYPEFACE */
  color: black;
  font-family: Inter, sans-serif;
  /* font-family: Neue Haas Grotesk Text Pro; */
  font-style: normal;
  font-weight: ${props => (props.bold ? 600 : 400)};
  line-height: 142.02%;
  text-align: ${props => (props.centered ? "center" : null)};

  /* LARGE OPINIONATED BASE */
  font-size: 1.5rem;
  display: ${props => (props.inLine ? "inline" : null)};

  @media ${device.tablet} {
    font-size: 2rem;
  }

  @media ${device.laptop} {
    font-size: 2.3rem;
  }

  /* 🔗 LINKS */
  a {
    color: black;
    text-decoration-style: dotted;
  }

  a:hover {
    font-family: IBM Plex Mono;
    font-style: italic;
    font-weight: 100;
    text-decoration: none;
  }
`

const Paragraph = styled(BaseType)`
  font-size: 1rem;
  max-width: 40em;
  margin-bottom: 0.5rem;
  /* margin-right: 2rem; */
  /* margin: auto; */

  @media ${device.tablet} {
    font-size: 1rem;
  }

  @media ${device.laptop} {
    font-size: 1.2rem;
  }
`

const StickyDiv = styled(BaseType)`
  position: -webkit-sticky;
  position: -moz-sticky;
  position: -ms-sticky;
  position: -o-sticky;
  position: sticky;
  top: 0px;

  background-color: #ffffff;
  /* backdrop-filter: blur(5px); */
  z-index: 9;
  /* opacity: 0.5; */
`

const StickyTitle = styled(StickyDiv)`
  /* mix-blend-mode: difference; */
  /* color: white; */
  z-index: 3;

  *,
  a {
    /* color: white; */
  }

  ::selection,
  ::-moz-selection,
  *::selection,
  *::-moz-selection {
    background: white;
    color: black;
  }
`

const Type = props => {
  if (props.p) {
    return <Paragraph {...props}>{props.children}</Paragraph>
  }

  if (props.stickyTitle) {
    return <StickyTitle {...props}>{props.children}</StickyTitle>
  }

  return <BaseType {...props}>{props.children}</BaseType>
}

Type.propTypes = {
  p: PropTypes.bool,
  stickyTitle: PropTypes.bool,
}

Type.defaultProps = {
  // variant: 'h1',
}

export default Type
