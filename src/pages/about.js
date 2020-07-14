import React from "react"

import Layout, { RowItem } from "../components/layout"
import SEO from "../components/seo"
import { Type, StickyTitle, Paragraph } from "../components/Type"

const AboutPage = ({ location }) => {
  // Route location is provided by gatsby per page component

  return (
    <>
      <SEO title="Home" />
      <Layout location={location}>
        <hr />
        <Type style={{ display: "contents" }}>
          <StickyTitle>
            <RowItem>
              <a name="about" href="#about">
                About
              </a>
            </RowItem>
          </StickyTitle>
        </Type>
        <Type>
          <div style={{ maxWidth: "800px" }}>
            <span>Hi!</span> I'm Matthew Clarke, a product designer with 6 years
            experience helping agile teams craft and launch new products and
            services.
            <br />
            <br />
            <Paragraph>
              I specialize in launching new information systems that require a
              designer at every stage of the process. With experience in
              research, design, and front-end development, I enjoy collaborating
              with all contributors to bring a product feature to life. When I'm
              not designing or coding, you can find me facilitating product
              discussion, canvassing team members for the next best solution,
              and honing an iterative design approach geared towards the team,
              its mission, and roadmap.
              <br />
              <br />
              With a background in art and publishing, I'm both a meticulous
              editor and aesthetically-driven, curious person. I pride myself in
              knowing the fundamentals of human-computer interactions and how to
              ensure consistency in innovative digital products. Before working
              full-time in New York, I received a BFA at the School of the Art
              Institute of Chicago and interned at the New Museum of
              Contemporary Art and Vice Media.
              <br />
              <br />
              I'm currently open to new projects focused in thoughtful,
              human-centered design. Have a project in mind? Get in touch,
              below!
            </Paragraph>
          </div>
          <br />
        </Type>
      </Layout>
    </>
  )
}

export default AboutPage
