import React, { useState } from 'react'
// import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from "prop-types"
import styled from 'styled-components'
// import { motion, AnimatePresence } from "framer-motion"

// import { device } from './Device';
import Type from '../components/Type'
import Image from './image'
import { transitionTime } from './Transition'
import { LayoutContainer } from './PageLayout';

const HeadingType = styled(Type)`
    margin: 0;
`;

const IdType = styled(HeadingType)`
    margin-left: auto;
    color: black;
    font-weight: 100;
    font-family: IBM Plex Mono;
    font-style: italic;
`;

const StyledSvg = styled.svg`
    width: 1rem;
    margin: 0rem 0 0 2rem;
`;

const CardHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 2rem 0 1rem 0;
    transition: background-color ${transitionTime};
`;

const ArticleContent = styled.div`
    width: 440px;
    margin: auto;
`;

const Flex = styled.div`
    display: flex;
`;

const FlexItem = styled.div`
    /* flex: 50% 1 0; */
    width: 40%;
`;

const Article = ({i, ...props}) => {

    // const [dashArray, setDashArray] = useState("1 7");
    const [expanded, setExpanded] = useState(0);
    const isOpen = i === expanded

    return (
        <>
            {/* <hr /> */}
            <article
                className="centered"
            >
                    <a name={props.id}></a>
                    <br />
                    <br />
                    <Type>
                        <a href={`/#${props.id}`}>
                        <sup>{props.id}</sup>
                        </a>&nbsp; <br/>
                    </Type>
                    <Flex>
                        <FlexItem>
                            <Type>
                                {props.heading}&nbsp;
                                {/* {props.slug} */}
                            </Type>
                        </FlexItem>
                        <Flex>
                            <ArticleContent>
                                <p>{props.para}</p>
                            </ArticleContent>
                        </Flex>
                    </Flex>

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