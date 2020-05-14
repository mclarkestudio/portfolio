import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Type, { Paragraph } from "./Type"
import device from "./devices"
import { LayoutContainer, ContentContainer } from "./layout"
import { ImageGallery } from "./ImageGallery"

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
`

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
      <FlexContainer>
        <Row>
          <Item>
            <a href={`/#${i.id}`} title="To top of article">
              <sup>{i.id}</sup>
            </a>
            <Type bold>{i.heading}</Type>
          </Item>
          <BackHomeButton />
        </Row>
      </FlexContainer>
    </Type>
  )

  function createMarkup() {
    return { __html: i.para }
  }

  const DynamicImageGallery = () => {
    return (
      <Item>
        {/* --- LIMINAL --- */}
        {i.id === "L-2020+" && <ImageGallery dir="liminal" />}
        {/* --- DATAVORE --- */}
        {i.id === "D-2020" && <ImageGallery dir="datavore" />}
        {/* --- SPLASHLIGHT --- */}
        {i.id === "S-2019" && <ImageGallery dir="splashlight" />}
        {/* --- GAGOSIAN --- */}
        {i.id === "G-2017" && <></>}
      </Item>
    )
  }

  const DynamicContent = () => (
    <ContentContainer>
      <Item small>
        <br />
        <br />
        <Paragraph>
          <span dangerouslySetInnerHTML={createMarkup()}></span>
        </Paragraph>
        <Paragraph>{i.para2}</Paragraph>
        <Row>
          {i.role && (
            <Item>
              <Paragraph bold>Role</Paragraph>
              <Paragraph>{i.role}</Paragraph>
              <br />
            </Item>
          )}
          {i.resp && (
            <Item>
              <Paragraph bold>Responsibilities</Paragraph>
              <Paragraph>{i.resp}</Paragraph>
              <br />
            </Item>
          )}
        </Row>
      </Item>
    </ContentContainer>
  )

  return (
    <>
      <article>
        <hr />
        <a name={i.id} />
        <StickyHeader />
        <br />
        <br />
        <br />
        <DynamicImageGallery />
        <DynamicContent />
      </article>
    </>
  )
}

Article.propTypes = {
  heading: PropTypes.string.isRequired,
  // slug: PropTypes.string.isRequired,
  // date: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
  para2: PropTypes.string.isRequired,
}

Article.defaultProps = {
  // heading: 'Liminal',
  // slug: 'A personal media library for the web.',
  // date: '2020–On-going.',
  // para: 'Liminal helps you collect web links, build feeds, and keep track of your interests. Liminal helps you collect web links, build feeds, and keep track of your interests. Liminal helps you collect web links, build feeds, and keep track of your interests. Liminal helps you collect web links, build feeds, and keep track of your interests. '
}

export default Article
