import React from "react"
import { Link } from "gatsby"
import * as styles from "../css/homePageGrid.module.css"

interface Props {
  tiles: {
    title: string
    id: string
    feature: boolean
    slug: string
    image: {
      url: string
    }
  }[]
}

const HomePageGrid: React.FC<Props> = ({ tiles }) => {
  return (
    <div className={styles.container}>
      {tiles.map((tile, index) => {
        const gIndex = `tile${index}`
        const GridItemClasses = `${styles.tile} ${styles[gIndex]} ${
          !tile.feature && styles.menuTile
        }`

        return (
          <div key={tile.id} className={GridItemClasses}>
            {tile.image && (
              <div>
                <img src={tile.image.url} className={styles.featuredImage} />
              </div>
            )}
            {!tile.feature && (
              <div>
                <Link to={tile.slug}>{tile.title}</Link>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default HomePageGrid
