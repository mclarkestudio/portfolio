import React from 'react'
import PropTypes from "prop-types"
import styled from 'styled-components'

import Type from '../components/Type'
import Image, { ImageCard } from './image';
import { device } from './Device';
import LayoutContainer from './PageLayout'
import Header from './header';
import Hero from './Hero';
import Layout from './layout';
import DevPageRenderer from '../../.cache/public-page-renderer-dev';

const Row = styled.div`
    display: flex;
    flex-direction: row;

    /* @media ${device.tablet} {
        flex-direction: column;
    } */
`

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media ${device.tablet} {
        flex-direction: column;
    }
`

const Item = styled.div`
    flex: 1 1 auto; 
    /* margin-bottom: 1rem; */
    max-width: ${props => props.small ? '700px' : null};
`

const Paragraph = (props) => {
    return (
        <Type p>
            {props.children}
        </Type>
    )
}

const Heading = (props) => {
    return (
        <>
        {/* <hr style={{ borderColor: '#aeaeae' }} /> */}
        <Type p bold>
            {/* <hr /> */}
            {props.children}
        </Type>
        </>
    )
}

const BackHomeButton = () => {
    const RightButton = styled.div`
        margin-left: auto;
        margin-right: 1rem;
        margin-top: 0.5rem;
        /* filter: blur(); */
        
        a {
            text-decoration: none;
            /* opacity: 0.2; */
        }

        a:hover {
            opacity: 1;
            font-style: normal;
        }
        /* transform: rotate(180deg); */
    `
    return (
        <RightButton>
            <a href='/#home' title='Back to top'>
                <sup>⤴</sup>
            </a>
        </RightButton>
    )
}

const MobileBackground = styled.div`
    background-color: yellow;
`

const Article = ({i, ...props}) => {

    const StickyHeader = () => (
        <Type stickyTitle>
            <LayoutContainer>
                    <FlexContainer>
                            <Row>
                                <a href={`/#${i.id}`} title='To top of article'>
                                    <sup>{i.id}</sup>
                                </a>
                                <BackHomeButton />
                            </Row>
                    </FlexContainer>
            </LayoutContainer>
        </Type>
    )

    const Images = () => (
        <LayoutContainer>
            {/* <Type p centered>
                {i.slug}
                <br />
                {i.role}
            </Type>  */}
            <Type>
                {i.heading}
            </Type>
            <Item />
            <Item />
            <Item />
            <Item />
            <br />
            <br />
                <Item small>
                    <br />
                    <Paragraph>
                        {i.para}
                    </Paragraph>
                    <br />
                </Item>
                <Item small>
                    <Item>
                        <Heading>
                            Role
                        </Heading>
                        <Paragraph>
                            {i.role}
                        </Paragraph>
                    </Item>
                    <Heading>
                        Responsibilities
                    </Heading>
                    <Paragraph>
                        {i.resp}
                    </Paragraph>
                </Item>
                <br />
                <br />
        {/* <LayoutContainer> */}
            <Item>
                <Hero />
            </Item>
            <ImageCard>
                <Image iphone/>
            </ImageCard>
        </LayoutContainer>
    )

    return (
        <article>
            <a name={i.id} />
            <StickyHeader />
            <Images />
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