import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { device } from './Device'
import { transitionTime } from './Transition';

const StyledDiv = styled.div`
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
            <StyledDiv {...props}>
                {props.children}
            </StyledDiv>
        )
    } else {
        return (
            <StyledDiv as="p" {...props}>
                {props.children}
            </StyledDiv>
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
