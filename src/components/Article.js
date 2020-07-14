import React, { useState, useRef } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"

import { ContentBlock, TextBlock, Row, RowItem } from "./layout"
import { Type, Paragraph, StickyTitle, Heading } from "./Type"
import { ImageGallery } from "./ImageGallery"
import { WebCopy } from "../copy/webCopy"
import device from "./devices"

// import Hero2 from "../images/hero2.svg"

const firstArticleId = WebCopy[0].id
const secondArticleId = WebCopy[1].id
const thirdArticleId = WebCopy[2].id
const fourthArticleId = WebCopy[3].id
const fifthArticleId = WebCopy[4].id

const RightButton = styled.div`
  margin-left: auto;
  margin-top: 0.5rem;
  font-size: 1rem;
  word-wrap: nowrap;

  @media ${device.tablet} {
    font-size: inherit;
    /* font-size: 1.3rem; */
  }

  a {
    text-decoration: none;
  }

  a:hover {
    opacity: 1;
    font-style: normal;
  }
`
const StyledArticle = styled.article`
  /* opacity: 0.2; */
  /* transition: opacity 0.45s; */

  &:hover {
    opacity: 1;
  }
`

const StyledSpan = styled.div`
  padding-left: 6px;
  /* font-size: 0.4em; */
  font-weight: 400;
  /* color: ${props => props.isOpen ? 'black' : 'lightgray'}; */
  display: inline-block;
  transform: ${props => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`

const Article = ({ i, ...props }) => {
  // Init references in function component
  // to be declared in JSX ref={}
  const titleRef = useRef(null)
  const bodyRef = useRef(null)

  const StickyHeader = ({ i }) => (
    <StickyTitle>
      <Row mobileRow>
        <RowItem>
          {/* <a href={`/#${i.id}`} title="To top of article">
            <sup>{i.id}</sup>
          </a> */}
          <Type ref={titleRef}>
          <Heading>{i.heading}</Heading>
          </Type>
        </RowItem>
        <RightButton>{i.date}<StyledSpan isOpen={isOpen}>{'⇃'}</StyledSpan></RightButton>
      </Row>
    </StickyTitle>
  )

  function createMarkup() {
    return { __html: i.para }
  }

  const DynamicImageGallery = () => {
    return (
      <>
        {/* --- LIMINAL --- */}
        {i.id === firstArticleId && <ImageGallery dir="liminal" />}
        {/* --- DATAVORE --- */}
        {i.id === secondArticleId && <ImageGallery dir="datavore" />}
        {/* --- SPLASHLIGHT --- */}
        {i.id === thirdArticleId && <ImageGallery dir="splashlight" />}
        {/* --- GAGOSIAN --- */}
        {i.id === fourthArticleId && <ImageGallery dir="gallery" />}
        {/* --- MORE WORK --- */}
        {i.id === fifthArticleId && <ImageGallery dir="visual" />}
      </>
    )
  }

  const DynamicContent = () => (
    <ContentBlock>
      {/* <Row ref={bodyRef}> */}
      <RowItem>
        <TextBlock>
          <Paragraph>
            <span dangerouslySetInnerHTML={createMarkup()}></span>
          </Paragraph>
          {i.para2 && <Paragraph>{i.para2}</Paragraph>}
          {i.para3 && <Paragraph>{i.para3}</Paragraph>}
        </TextBlock>
      </RowItem>
      <RowItem>
        <TextBlock>
          {/* {i.role && (
            <RowItem>
              <Paragraph bold>Role</Paragraph>
              <Paragraph>{i.role}</Paragraph>
            </RowItem>
          )} */}
          {i.resp && (
            <RowItem>
              <Paragraph bold>Responsibilities</Paragraph>
              <Paragraph>{i.resp}</Paragraph>
            </RowItem>
          )}
          {i.team && (
            <RowItem>
              <Paragraph bold>Team</Paragraph>
              <Paragraph>{i.team}</Paragraph>
            </RowItem>
          )}
        </TextBlock>
      </RowItem>
      {/* </Row> */}
    </ContentBlock>
  )

  // Motion accordian state
  // Set first article as open = useState(i.id === firstArticleId ? i : null)
  const [expanded, setExpanded] = useState(i.id === firstArticleId ? i : null)
  // const [expanded, setExpanded] = useState(null)
  const isOpen = i === expanded

  return (
    <>
      <StyledArticle>
        <motion.header
          initial={false}
          // animate={{ backgroundColor: isOpen ? "lightorange" : "lightyellow" }}
          onClick={() => setExpanded(isOpen ? false : i)}
          // 'display: contents' so that sicky header css is disolved into the section below
          style={{ cursor: "pointer", display: "contents" }}
        >
          <hr />
          <StickyHeader i={i} isOpen={isOpen} />
        </motion.header>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.section
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.7, ease: [0.04, 0.62, 0.23, 0.98] }}
              id={i.id}
            >
              <Type>{i.role}</Type>
              <br />
              <DynamicImageGallery />
              <DynamicContent />
            </motion.section>
          )}
        </AnimatePresence>
      </StyledArticle>
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
