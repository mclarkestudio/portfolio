import React from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"

import Type from "./Typeface"
import Image, { ImageCard } from "./Image"
import { device } from "./Device"
import { LayoutContainer } from "./Layout"
import Hero from "./Hero"

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
  max-width: ${props => (props.small ? "700px" : null)};
`

const Paragraph = props => {
  return <Type p>{props.children}</Type>
}

const Heading = props => {
  return (
    <>
      <Type p bold>
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

    a {
      text-decoration: none;
    }

    a:hover {
      opacity: 1;
      font-style: normal;
    }
  `
  return (
    <RightButton>
      <a href="/#home" title="Back to top">
        <sup>⤴</sup>
      </a>
    </RightButton>
  )
}

const Article = ({ i, ...props }) => {
  const StickyHeader = () => (
    <Type stickyTitle>
      <LayoutContainer>
        <FlexContainer>
          <Row>
            <a href={`/#${i.id}`} title="To top of article">
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
      <Type>{i.heading}</Type>
      <Item />
      <Item />
      <Item />
      <Item />
      <br />
      <br />
      <Item>
        <Paragraph>
          {i.slug}
        </Paragraph>
      </Item>
      <Item small>
        <br />
        <Paragraph>{i.para}</Paragraph>
        <br />
      </Item>
      <Item small>
        <Item>
          <Heading>Role</Heading>
          <Paragraph>{i.role}</Paragraph>
        </Item>
        <Item></Item>
        <Heading>Responsibilities</Heading>
        <Paragraph>{i.resp}</Paragraph>
      </Item>
      <br />
      <br />
      <Item>
        <Hero />
      </Item>
      <ImageCard>
        <Image iphone />
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

// Article.propTypes = {
//     heading: PropTypes.string.isRequired,
//     slug: PropTypes.string.isRequired,
//     date: PropTypes.string.isRequired,
//     para: PropTypes.string.isRequired,
// }

Article.defaultProps = {
  // heading: 'Liminal',
  // slug: 'A personal media library for the web.',
  // date: '2020–On-going.',
  // para: 'Liminal helps you collect web links, build feeds, and keep track of your interests. Liminal helps you collect web links, build feeds, and keep track of your interests. Liminal helps you collect web links, build feeds, and keep track of your interests. Liminal helps you collect web links, build feeds, and keep track of your interests. '
}

export default Article
