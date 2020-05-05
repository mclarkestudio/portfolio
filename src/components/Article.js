import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from "prop-types"
import styled from 'styled-components'

// const StyledIcon = styled.div`
    
// `;


const Flex = styled.div`
    display: flex;
`;

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
            <article
                {...props}
                style={{ maxWidth: '630px' }}
                className="centered"
            >
                <hr />
                <Flex>
                    <div>
                        <svg className='svgIcon' viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2L19 19L36 2" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="10 10"/>
                        </svg>
                    </div>
                    <div style={{ maxWidth: '430px' }}>
                        <h1><strong>{props.heading}</strong></h1>
                        <h1>{props.slug}</h1>
                        <h2>{props.footer}</h2>
                    </div>
                </Flex>
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