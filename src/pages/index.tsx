import * as React from "react"
import { graphql } from "gatsby"

import HomePageGrid from "../components/HomePageGrid"
import Title from "../components/Title"
import * as styles from "../css/homepage.module.css"

// markup
const Home: React.FC<any> = ({ data }) => {
  return (
    <div className={styles.homepageContainer}>
      {/*<Title />*/}
      <HomePageGrid tiles={data.allContentfulHomeTiles.nodes} />
    </div>
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
        }
        feature
        image {
          url
        }
      }
    }
  }
`

export default Home
