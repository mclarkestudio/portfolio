import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from "prop-types"
import styled from 'styled-components'

const Article = (props) => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "iphone.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return (
        <>
            <article {...props} style={{ maxWidth: '630px' }} className="centered">
                <hr />
                <div className='flex'>
                    <h1>{props.heading}</h1>
                    <h1>{props.slug}</h1>
                    <h2>{props.footer}</h2>
                </div>
            </article>
        </>
    )
}

// Require copy props
Article.propTypes = {
    heading: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    footer: PropTypes.string.isRequired
}

Article.defaultProps = {
    heading: 'Liminal',
    slug: 'A personal media library for the web.',
    footer: 'Principal Design. 2020–On-going.'
}

export default Article;