import React, { useState } from 'react'
// import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from "prop-types"
import styled from 'styled-components'
import { motion, AnimatePresence } from "framer-motion"

// import { device } from './Device';
import Type from '../components/Type'
import Image from './image'

const HeadingType = styled(Type)`
    margin: 0;
`;

const IdType = styled(HeadingType)`
    margin-left: auto;
    color: black;
    font-weight: 100;
    font-family: IBM Plex Mono;
    font-style: italic;
    /* background-color: yellow; */
    /* padding: 0 1em; */
`;

const StyledSvg = styled.svg`
    width: 1rem;
    margin: 0rem 0 0 2rem;
`;

const MotionCard = styled(motion.div)`
    margin: 0rem 0 0 0;
    width: 100%;
    z-index: 4;
    
    &:hover {
        background-color: pink;
    }
`

const CardHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: white;
    padding: 2rem 0 1rem 0;
`;

const Article = ({i, ...props}) => {

    // const [dashArray, setDashArray] = useState("1 7");
    const [expanded, setExpanded] = useState(0);
    const isOpen = i === expanded
    const uri = encodeURI(props.heading)

    return (
        <>
            <article
                className="centered"
            >
                <MotionCard
                    initial={false}
                    animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
                    onClick={() => setExpanded(isOpen ? false : i)}
                    className="sticky"
                >
                    <a name={props.id}></a>
                    <CardHeader >
                        <HeadingType variant='h1'>
                            {props.heading}
                        </HeadingType>
                        <IdType>
                            {props.date}
                        </IdType>
                        <StyledSvg className='svgIcon' viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2L19 19L36 2" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1 7"/>
                        </StyledSvg>
                    </CardHeader>
                </MotionCard>
                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.section
                            key="content"
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={{
                                open: { opacity: 1, height: "auto" },
                                collapsed: { opacity: 0, height: 0 }
                            }}
                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        >
                            <h1>{props.slug}</h1>
                            {/* <h1>{props.date}</h1> */}
                            <h1>{props.para}</h1>
                            {/* <Type>{props.footer}</Type> */}
                            <Image />
                        </motion.section>
                        )}
                    </AnimatePresence>
            </article>
        </>
    )
}

Article.propTypes = {
    heading: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    para: PropTypes.string.isRequired,
}

Article.defaultProps = {
    heading: 'Liminal',
    slug: 'A personal media library for the web.',
    date: '2020–On-going.',
    para: 'Liminal helps you collect web links, build feeds, and keep track of your interests.'
}

export default Article;