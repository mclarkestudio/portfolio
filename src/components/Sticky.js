import React from 'react'
import styled from 'styled-components';

const StickyDiv = styled.div` 
    .sticky {
        position: -webkit-sticky;
        position: -moz-sticky;
        position: -ms-sticky;
        position: -o-sticky;
        position: sticky;
        top: 0px;
    }
`

const Sticky = (props) => {
    return (
        <StickyDiv className="sticky"{...props}>
            {props.children}
        </StickyDiv>
    )
}

export default Sticky;
