import styled from "styled-components"
import device from "./devices"

export const Type = styled.div`
  /* BASE TYPEFACE */
  color: black;
  font-family: "Neue Haas Grotesk", sans-serif;
  /* font-family: Inter, sans-serif; */
  font-style: normal;
  font-weight: ${props => (props.bold ? 600 : 300)};
  line-height: 142.02%;

  display: ${props => (props.inLine ? "inline" : null)};

  /* BASE Mobile Display */
  font-size: 2rem;

  @media ${device.tablet} {
    font-size: 2rem;
    text-align: ${props => (props.textAlign ? props.textAlign : null)};
  }

  @media ${device.laptop} {
    font-size: 2.4rem;
  }

  /* 🔗 LINKS */
  a {
    color: black;
    text-decoration-style: dotted;
  }

  a:hover {
    font-family: IBM Plex Mono;

    /* Line hieght offsets virticle jump */
    line-height: 120%;
    /* Line hieght offsets virticle jump */

    /* color: #ff0018; */
    color: ${props => (props.hoverColor ? props.hoverColor : "#ff0018")};
    font-style: italic;
    font-weight: 100;
    text-decoration: none;
  }
`

export const Paragraph = styled(Type)`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;

  @media ${device.tablet} {
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
  margin-bottom: 3rem;

  z-index: 3;

  /* padding: 1rem; */
  /* background-color: #ebf1f6; */
  transition: background-color 0.45s;

  /* @media ${device.laptop} {
    background-color: transparent;
    mix-blend-mode: difference;
    color: white;

    *,
    a {
      color: white;
    }
  } */

  /* ::selection,
  ::-moz-selection,
  *::selection,
  *::-moz-selection {
    background: white;
    color: black;
  } */
`

export const Heading = styled(Type)`
  font-family: "IBM Plex Mono", monospace;
  font-style: italic;
  font-weight: 100;
  /* color: orangered; */
  font-size: ${props => (props.fontSize ? props.fontSize : "2rem")};

  @media ${device.tablet} {
    font-size: ${props => (props.fontSize ? props.fontSize : "4rem")};
  }

  @media ${device.laptop} {
    font-size: ${props => (props.fontSize ? props.fontSize : "5rem")};
  }
`

export default Type
