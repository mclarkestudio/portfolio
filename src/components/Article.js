import React from 'react'
import PropTypes from "prop-types"
import styled from 'styled-components'

import Type from '../components/Type'
import Image, { ImageCard } from './image';
import { device } from './Device';
import LayoutContainer from './PageLayout'
import Header from './header';
import Hero from './Hero';

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
    margin-bottom: 2rem;
    max-width: ${props => props.small ? '400px' : null};
`

// const Paragraph = (props) => {
//     return (
//         <Type p>
//             {props.children}
//         </Type>
//     )
// }

// const Heading = (props) => {
//     return (
//         <Type p bold>
//             {props.children}
//         </Type>
//     )
// }

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
        
            <Type title>
                <FlexContainer>
                    <Item>
                        <Item>
                            <Row>
                                <a href={`/#${i.id}`} title='To top of article'>
                                    <sup>{i.id}</sup>
                                </a>
                                <BackHomeButton />
                            </Row>
                            <div>
                                {i.heading}
                            </div>
                            <br />

                            {/* <div>
                                {i.role}
                            </div> */}
                        </Item>
                        {/* <Item small>
                            {i.slug}
                        </Item> */}
                    </Item>
                </FlexContainer>
            </Type>
        
    )

    const Images = () => (
        <LayoutContainer>
            {/* <Type p centered>
                {i.slug}
                <br />
                {i.role}
            </Type>  */}
            <Item>
                <Type>
                    {i.slug}
                </Type>
            </Item>
            <Item>
                <Hero />
            </Item>
            {/* <Item>
                <Type centered style={{color: 'lightgray', fontSize: '1rem'}}>
                    Image caption goes here.
                </Type>
            </Item> */}

            <ImageCard>
                <Image iphone/>
            </ImageCard>
            {/* <Image /> */}
            <ImageCard>
                <Image iphone/>
            </ImageCard>
        </LayoutContainer>
    )

    return (
        <article>
            <StickyHeader />
            <a name={i.id} />
            <br />
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