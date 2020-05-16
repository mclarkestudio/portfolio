import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"

import { TextBlock, Row, RowItem } from "./layout"
import { Type, Paragraph, StickyTitle } from "./Type"
import { ImageGallery } from "./ImageGallery"
import { WebCopy } from "../copy/webCopy"
import LiminalSVG from "./liminalSVG"

// import Hero2 from "../images/hero2.svg"

const firstArticleId = WebCopy[0].id
const secondArticleId = WebCopy[1].id
const thirdArticleId = WebCopy[2].id
const fourthArticleId = WebCopy[3].id

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
const StyledArticle = styled.article`
  /* opacity: 0.2; */
  /* transition: opacity 0.45s; */

  &:hover {
    opacity: 1;
  }
`

const BackHomeButton = () => {
  return (
    <RightButton>
      <a href="/#home" title="Back to top">
        <sup>⤴</sup>
      </a>
    </RightButton>
  )
}

const Article = ({ i, ...props }) => {
  // Init references in function component
  // to be declared in JSX ref={}
  const titleRef = useRef(null)
  const bodyRef = useRef(null)

  const StickyHeader = () => (
    <StickyTitle>
      <Row mobileRow>
        <RowItem>
          {/* <a href={`/#${i.id}`} title="To top of article">
            <sup>{i.id}</sup>
          </a> */}
          <Type ref={titleRef}>
            <span id={i.id}>{i.heading}</span>
          </Type>
        </RowItem>
        <BackHomeButton />
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
        {i.id === fourthArticleId && <></>}
      </>
    )
  }

  const DynamicContent = () => (
    <>
      <Row ref={bodyRef}>
        <RowItem>
          <TextBlock>
            <Paragraph>
              <span dangerouslySetInnerHTML={createMarkup()}></span>
            </Paragraph>
            <Paragraph>{i.para2}</Paragraph>
          </TextBlock>
        </RowItem>
        <RowItem>
          <TextBlock>
            {i.role && (
              <RowItem>
                <Paragraph bold>Role</Paragraph>
                <Paragraph>{i.role}</Paragraph>
              </RowItem>
            )}
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
      </Row>
    </>
  )

  // Motion accordian state
  const [expanded, setExpanded] = useState(i.id === firstArticleId ? i : null)
  const isOpen = i === expanded

  return (
    <>
      <StyledArticle>
        <hr />
        <motion.header
          initial={false}
          // animate={{ backgroundColor: isOpen ? "lightorange" : "lightyellow" }}
          onClick={() => setExpanded(isOpen ? false : i)}
          // 'display: contents' so that sicky header css is disolved into the section below
          style={{ cursor: "pointer", display: "contents" }}
        >
          <a name={i.id} />
          <StickyHeader />
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
            >
              <DynamicImageGallery />
              {/* <Hero2 width="auto" height="auto" /> */}
              {/* <LiminalSVG /> */}
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
