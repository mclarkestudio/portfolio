import React, { useState } from 'react'
// import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from "prop-types"
import styled from 'styled-components'
import { motion, AnimatePresence } from "framer-motion"

// import { device } from './Device';
import Type from '../components/Type'
import Image from './image'

const StyledType = styled(Type)`
    margin: 0;
`;

const StyledSvg = styled.svg`
    width: 1rem;
    margin: 0rem 0 0 auto;

`;

const StyledMotionArticle = styled(motion.article)`
    max-width: 600px;
`

const MotionCard = styled(motion.div)`
    margin: 1rem 0 0 0;
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

const Article = ({i, expanded, setExpanded, ...props}) => {

    const [dashArray, setDashArray] = useState("1 7");
    const isOpen = i === expanded;

    return (
        <>
            <article
                // {...props}
                className="centered"
                // onMouseEnter={setDashArray("0")}
            >
                <hr />
                <MotionCard
                    initial={false}
                    animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
                    onClick={() => setExpanded(isOpen ? false : i)}
                    className="sticky"
                >
                    <CardHeader >
                        <StyledType variant='h1'>
                            {props.heading}
                        </StyledType>
                        <StyledSvg className='svgIcon' viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2L19 19L36 2" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray={dashArray}/>
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
                            <Type variant='h1'>{props.slug}</Type>
                            <Type variant='h1'>{props.footer}</Type>
                            {/* <Image /> */}
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
    footer: PropTypes.string.isRequired,
    para: PropTypes.string.isRequired,
}

Article.defaultProps = {
    heading: 'Liminal',
    slug: 'A personal media library for the web.',
    footer: '2020–On-going.',
    para: 'Liminal helps you collect web links, build feeds, and keep track of your interests.'
}

export default Article;