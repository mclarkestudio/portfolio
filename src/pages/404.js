import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Type, Heading } from "../components/Type"

const AboutPage = ({ location }) => {
  // Route location is provided by gatsby per page component

  return (
    <>
      <SEO title="404: Page Not found" />
      <Layout location={location}>
        <hr />
        <Type style={{ display: "contents" }}>
          <br />
          <br />
          <Heading>
              404: Page not found
          </Heading>
          <Heading style={{ overflowWrap: "break-word" }}>
            <br />
            {location.pathname === "/404" ? null : location.pathname}
            <br />
            <br />
          </Heading>
          <br />
        </Type>
      </Layout>
    </>
  )
}

export default AboutPage
