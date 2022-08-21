import React from "react"
import { Link } from "gatsby"
import HoverVideoPlayer from "react-hover-video-player"

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
            {tile.image && tile.feature && (
              <div>
                <img src={tile.image.url} className={styles.featuredImage} />
              </div>
            )}
            {tile.image && !tile.feature && (
              <HoverVideoPlayer
                videoSrc="/sh.mp4"
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute"
                }}
                videoStyle={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                  objectPosition: "50%",
                  zIndex: 2
                }}
                pausedOverlay={<>Booyah</>}
                loadingOverlay={
                  <div className="loading-overlay">
                    <div className="loading-spinner" /> loading ...
                  </div>
                }
              />
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
