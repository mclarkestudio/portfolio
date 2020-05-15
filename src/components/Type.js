import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import device from "./devices"

export const Type = styled.div`
  /* BASE TYPEFACE */
  color: black;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: ${props => (props.bold ? 600 : 400)};
  line-height: 142.02%;
  text-align: ${props => (props.centered ? "center" : null)};

  display: ${props => (props.inLine ? "inline" : null)};

  /* BASE Mobile Display */
  font-size: 1.3rem;

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

export const Paragraph = styled(Type)`
  margin-bottom: 0.5rem;
  /* font-size: 1rem; */

  @media ${device.tablet} {
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }

  @media ${device.laptop} {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
`

const StickyDiv = styled(Type)`
  position: -webkit-sticky;
  position: -moz-sticky;
  position: -ms-sticky;
  position: -o-sticky;
  position: sticky;
  top: 0px;

  /* background-color: white; */
  /* background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1)
  ); */
  /* -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px); */
  z-index: 9;
  /* opacity: 0.5; */
`

export const StickyTitle = styled(StickyDiv)`
  /* mix-blend-mode: difference; */
  /* color: white; */
  padding-bottom: 4rem;
  z-index: 3;

  *,
  a {
    /* color: white; */
  }

  /* ::selection,
  ::-moz-selection,
  *::selection,
  *::-moz-selection {
    background: white;
    color: black;
  } */
`

export default Type
