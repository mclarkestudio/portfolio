import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { device } from './Device'
import { transitionTime } from './Transition';

const BaseType = styled.div`
    font-size: 1.5rem;
    transition: font-size ${transitionTime};
    line-height: 142.02%;
    display: ${props => props.inLine ? 'inline' : null };

    /* 🔗 LINKS */
    a {
        text-decoration-style: dotted;
    }

    a:hover {
        a:hover {
        font-family: IBM Plex Mono;
        font-style: italic;
        font-weight: 100;
        text-decoration: none;
        }
    }

    @media ${device.tablet} {
        font-size: 2rem;
    }

    @media ${device.laptop} {
        font-size: 2.3rem;
    }
`

const TitleType = styled(BaseType)`
    /* margin-bottom: 40px; */
    mix-blend-mode: difference;
    color: white;
    z-index: 3;
    /* display: inline; */

    * {
        color: white
    }

    *::selection,
    *::-moz-selection {
    background: white;
    color: black;
    }
`

const Type = (props) => {

if (props.title) { return <TitleType {...props}>{props.children}</TitleType> }
if (props.variant === 'h1') { return (<BaseType {...props}> {props.children} </BaseType>) }

    return (
        <BaseType {...props}>
            {props.children}
        </BaseType>
    )
}

Type.propTypes = {
    variant: PropTypes.oneOf(['h1', 'h2', 'p']).isRequired,
}

Type.defaultProps = {
    variant: 'h1',
}

export default Type;
