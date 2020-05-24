import styled from "styled-components"
import device from "./devices"

export const Type = styled.div`
  /* BASE TYPEFACE */
  color: black;
  /* font-family: "Neue Haas Grotesk", sans-serif; */
  font-family: Inter, -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif;
  font-style: normal;
  font-weight: ${props => (props.bold ? 600 : 300)};
  line-height: 142.02%;
  white-space: ${props => (props.whiteSpace ? props.whiteSpace : null)};

  display: ${props => (props.inLine ? "inline" : null)};
  /* text-decoration-thickness: auto; */

  /* BASE Mobile Display */
  font-size: 1.3rem;

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
    font-family: 'IBM Plex Mono', Menlo, Consolas, Monaco, 'Liberation Mono', Lucida Console, monospace;

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
  /* Not so sticky for the time being... */
  /* position: -webkit-sticky;
  position: -moz-sticky;
  position: -ms-sticky;
  position: -o-sticky;
  position: sticky; */
  top: 0px;
  z-index: 9;
`

export const StickyTitle = styled(StickyDiv)`
  margin-bottom: 3rem;
  z-index: 3;
  transition: background-color 0.45s;
`

export const Heading = styled(Type)`
  font-family: "IBM Plex Mono", monospace;
  font-style: italic;
  font-weight: 100;
  /* color: orangered; */
  font-size: ${props => (props.fontSize ? props.fontSize : "1.7rem")};

  @media ${device.tablet} {
    font-size: ${props => (props.fontSize ? props.fontSize : "4rem")};
  }

  @media ${device.laptop} {
    font-size: ${props => (props.fontSize ? props.fontSize : "5rem")};
  }
`

export default Type
