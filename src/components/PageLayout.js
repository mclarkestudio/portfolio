import React from "react"
import styled from "styled-components"
import { transitionTime } from './Transition';
import { device } from './Device';

export const LayoutContainer = styled.div`
  margin-left: 0;
  width: 100%;

  /* Color props */
  background-color: ${props => props.bgcolor || 'none'};
  
  /* Blurred Image Background */
  /* background: url('https://images.unsplash.com/photo-1510548470459-83d740bff5de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80') no-repeat center;
  filter: blur(8px);
  -webkit-filter: blur(8px); */

  transition: width ${transitionTime}, margin-left ${transitionTime};

  @media ${device.laptop} { 
    margin-left: 10%;
    width: 90%;
  }
  
  @media ${device.laptopL} { 
    margin-left: 15%;
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
