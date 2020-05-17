import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Type } from "../components/Type"

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
          <Type>
            <a name="404" href="#404">
              404: Page not found{" "}
            </a>
          </Type>
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
