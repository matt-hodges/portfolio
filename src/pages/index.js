import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/projects"
import Layout from "../components/layout"
import Banner from "../components/banner"


export default function Home({ data }) {
  return (
    <Layout>
      <Banner title="Matt Hodges" description={data.contentfulInfo.description.description} />
      <Projects projects={data.allContentfulProject.edges} title="Projects" />
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulProject(limit: 10) {
      edges {
        node {
          title
          description {
            description
          }
          link
          image {
            file {
              url
            }
          }
        }
      }
    }
    contentfulInfo {
      id
      description {
        description
      }
    }
  }
`
