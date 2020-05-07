import React, { useState } from 'react'
// import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from "prop-types"
// import styled from 'styled-components'
// import { motion, AnimatePresence } from "framer-motion"
// import { device } from './Device';
import Type from '../components/Type'
import Image from './image'
// import { transitionTime } from './Transition'
// import { LayoutContainer } from './PageLayout';
// import { device } from './Device';
// import Layout from './layout'
import Sticky from './Sticky'

// const HeadingType = styled(Type)`
//     margin: 0;
// `;

// const StyledSvg = styled.svg`
//     width: 1rem;
//     margin: 0rem 0 0 2rem;
// `;

// const Flex = styled.div`
//     display: flex;
//     flex-direction: column;

//     @media ${device.tablet} {
//         flex-direction: row;
//     }
// `;

const Article = ({i, ...props}) => {

    const TitleTag = () => (
        <>
            <a name={i.id}></a>
            <a href={`/#${i.id}`}>
                <sup>{i.id}</sup>
            </a>
            <br/>
        </>
    )

    const StickyHeader = () => (
        <Sticky>
            <TitleTag />
            <Type title>
                {i.heading}
            </Type>
            <Type title>
                {i.role}
            </Type>
            {/* <p className='title'>{i.resp}</p> */}
        </Sticky>
    )

    return (
        <article>
            <StickyHeader />
            <br />
            <Image />
            <Image />
            <Image />
            <Image />
        </article>
    )
}

Article.propTypes = {
    heading: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    para: PropTypes.string.isRequired,
}

Article.defaultProps = {
    // heading: 'Liminal',
    // slug: 'A personal media library for the web.',
    // date: '2020–On-going.',
    // para: 'Liminal helps you collect web links, build feeds, and keep track of your interests. Liminal helps you collect web links, build feeds, and keep track of your interests. Liminal helps you collect web links, build feeds, and keep track of your interests. Liminal helps you collect web links, build feeds, and keep track of your interests. '
}

export default Article;