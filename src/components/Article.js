import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"

import { TextBlock, Row, Item, ImageBlock } from "./layout"
import Type, { Paragraph } from "./Type"
import { ImageGallery } from "./ImageGallery"

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
  const titleEl = `#${i.id}`
  const bodyEl = `#${i.id}-body`

  const StickyHeader = () => (
    <Type stickyTitle>
      <Row>
        <Item>
          <a href={`/#${i.id}`} title="To top of article">
            <sup>{i.id}</sup>
          </a>
          <Type bold>
            <span id={i.id}>{i.heading}</span>
          </Type>
        </Item>
        <BackHomeButton />
      </Row>
    </Type>
  )

  function createMarkup() {
    return { __html: i.para }
  }

  const DynamicImageGallery = () => {
    return (
      <ImageBlock>
        {/* --- LIMINAL --- */}
        {i.id === "L-2020+" && <ImageGallery dir="liminal" />}
        {/* --- DATAVORE --- */}
        {i.id === "D-2020" && <ImageGallery dir="datavore" />}
        {/* --- SPLASHLIGHT --- */}
        {i.id === "S-2019" && <ImageGallery dir="splashlight" />}
        {/* --- GAGOSIAN --- */}
        {i.id === "G-2017" && <></>}
      </ImageBlock>
    )
  }

  const DynamicContent = () => (
    <>
      <br />
      <br />
      <span id={`${i.id}-body`}></span>
      <Row>
        <Item>
          <TextBlock>
            <Paragraph>
              <span dangerouslySetInnerHTML={createMarkup()}></span>
            </Paragraph>
            <Paragraph>{i.para2}</Paragraph>
          </TextBlock>
        </Item>
        <Item>
          <TextBlock>
            {i.role && (
              <Item>
                <Paragraph bold>Role</Paragraph>
                <Paragraph>{i.role}</Paragraph>
              </Item>
            )}
            {i.resp && (
              <Item>
                <Paragraph bold>Responsibilities</Paragraph>
                <Paragraph>{i.resp}</Paragraph>
              </Item>
            )}
            {i.team && (
              <Item>
                <Paragraph bold>Team</Paragraph>
                <Paragraph>{i.team}</Paragraph>
              </Item>
            )}
          </TextBlock>
        </Item>
      </Row>

      <br />
      <br />
      <br />
      <br />
    </>
  )

  // Motion accordian state
  const [expanded, setExpanded] = useState(0)
  const isOpen = i === expanded

  const HeaderMask = styled.div`
    max-height: 100px;
  `

  const StyledArticle = styled.article`
    background-color: white;
    /* position: relative;
    z-index: 5; */
  `

  return (
    <>
      <article>
        <br />
        <br />
        <hr />
        <motion.header
          initial={false}
          // animate={{ backgroundColor: isOpen ? "lightorange" : "lightyellow" }}
          onClick={() => setExpanded(isOpen ? false : i)}
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
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
              // style={{ display: "contents" }}
            >
              <DynamicImageGallery />
              <DynamicContent />
            </motion.section>
          )}
        </AnimatePresence>
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
