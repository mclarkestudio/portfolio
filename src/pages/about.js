import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Type, Paragraph } from "../components/Type"
import PageHeader from "../components/PageHeader"

const AboutPage = ({ location }) => {
  // Route location is provided by gatsby per page component

  return (
    <>
      <SEO title="Home" />
      <Layout location={location}>
        <Type>
          <a name="about" />
          About
          <br />
          <br />
        </Type>
        <Paragraph>
          <div style={{ maxWidth: "800px" }}>
            New York-based designer with 6 years experience building digital
            user interfaces within agile product teams.
            <br />
            Aeshetically-driven, systems-level thinker helping teams prioritize
            work, define human-centered problems, and build unified products and
            services. Matthew works across a range of diciplines in order to
            define customer problems, prioritize work, and build products and
            services that work.
          </div>
          <br />
        </Paragraph>
      </Layout>
    </>
  )
}

export default AboutPage
