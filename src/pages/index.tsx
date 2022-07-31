import * as React from "react"
import { graphql } from "gatsby"

import HomePageGrid from "../components/HomePageGrid/HomePageGrid"
import Page from "../layouts/page"

// markup
const Home: React.FC<any> = ({ data }) => {
  return (
    <Page>
      <HomePageGrid tiles={data.allContentfulHomeTiles.nodes} />
    </Page>
  )
}

export const query = graphql`
  query HomePageQuery {
    allContentfulHomeTiles(limit: 6, sort: { fields: order }) {
      nodes {
        id
        title
        page {
          title
          slug
          image {
            url
          }
        }
        image {
          url
        }
      }
    }
  }
`

export default Home
