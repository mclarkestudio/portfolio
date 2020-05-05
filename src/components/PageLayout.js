import React from "react"
import styled from "styled-components"
import { transitionTime } from './Transition';
import { device } from './Device';

export const LayoutContainer = styled.div`
  margin-left: 0;
  width: 100%;
  background-color: ${props => props.bgcolor || 'none'};
  transition: width ${transitionTime}, margin-left ${transitionTime};

  @media ${device.laptop} { 
    margin-left: 5%;
    width: 90%;
  }
  @media ${device.laptopL} { 
    margin-left: 10%;
    width: 70%;
  }
`;

// LayoutContainer.propTypes = {
//     heading: PropTypes.string.isRequired,
// }

// LayoutContainer.defaultProps = {
//     heading: 'Liminal',
//     slug: 'A personal media library for the web.',
//     footer: '2020–On-going.',
//     para: 'Liminal helps you collect web links, build feeds, and keep track of your interests.'
// }

export default LayoutContainer;
