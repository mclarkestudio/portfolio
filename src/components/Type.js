import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { device } from './Device'
import { transitionTime } from './Transition';

const StyledH1 = styled.div`
    font-size: 1.5em;
    transition: font-size ${transitionTime};
    line-height: 142.02%;
    display: ${props => props.inLine ? 'inline' : null };

    @media ${device.tablet} {
        font-size: 2rem;
    }

    @media ${device.laptop} {
        font-size: 2.3rem;
    }
`

const Type = (props) => {

    if (props.variant === 'h1') {
        return (
            <StyledH1 {...props}>
                {props.children}
            </StyledH1>
        )
    } else {
        return (
            <StyledH1 {...props}>
                {props.children}
            </StyledH1>
        )
    }
}

Type.propTypes = {
    variant: PropTypes.oneOf(['h1', 'h2', 'p']).isRequired,
}

Type.defaultProps = {
    variant: 'h1',
}

export default Type;
