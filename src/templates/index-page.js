import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'
import contactInfo from '../../site/settings/contact_info.json'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mission,
  missionDescription,
  mainpitch,
  description,
  intro,
}) => (
  <div className="container">
      <div className= "section">
        <div className="columns">
          <div 
              className="hero column is-6 is-offset-1"
              >
            <h1
              className="heading--twenties"
            >
              {title}

            </h1>
            <p
              className="default--twenties column is-10"
            >
              {subheading}
            </p>
          </div>
          <div
            className="column is-4 is-offset-1"
            style={{
              backgroundImage: `url(${
                !!image.childImageSharp ? image.childImageSharp.fluid.src : image
              })`,
            }}
          >
          </div>
      </div>
    </div>
    <section className="">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="process__heading">
                <h1 className="heading--twenties">{mission}</h1>
              </div>
              <div className="line"></div>
              <div className="feature__container">     
                <div className="process__description">
                  <p className="default--twenties">{missionDescription}</p>
                </div>
                <Features gridItems={intro.blurbs} />
                <Link className="more-services__link" to="/blog">
                  <span className="arrow--circle" ></span>
                  <span>Services</span> 
                </Link>
              </div>
              {/* <BlogRoll /> */}

            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mission: PropTypes.string,
  missionDescription: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mission={frontmatter.mission}
        missionDescription={frontmatter.missionDescription}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
            title
          }
          heading
          description
        }
        mission
        missionDescription
      }
    }
  }
`
