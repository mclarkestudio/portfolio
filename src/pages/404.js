import React from "react"

import Layout, { RowItem } from "../components/layout"
import SEO from "../components/seo"
import { Type, Paragraph, StickyTitle } from "../components/Type"
import PageHeader from "../components/PageHeader"
import styled from "styled-components"

const AboutPage = ({ location }) => {
  // Route location is provided by gatsby per page component

  return (
    <>
      <SEO title="404: Page Not found" />
      <Layout location={location}>
        <hr />
        <Type style={{ display: "contents" }}>
          <a name="404" />
          <br />
          <br />
          <Type>404: Page not found at</Type>
          <Type style={{ overflowWrap: "break-word" }}>
            {location.pathname}
          </Type>
          <br />
          <br />
        </Type>
      </Layout>
    </>
  )
}

export default AboutPage
