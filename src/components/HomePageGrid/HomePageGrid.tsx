import React from "react"

import * as styles from "./HomePageGrid.module.css"

interface Props {
  tiles: {
    title: string
    id: string
  }[]
}

const HomePageGrid: React.FC<Props> = ({ tiles }) => {
  return (
    <div className={styles.container}>
      {tiles.map((tile, index) => {
        const gIndex = `g${index}`
        const GridItemClasses = `${styles.tile} ${styles[gIndex]}`

        return (
          <div key={tile.id} className={GridItemClasses}>
            <div>{tile.title}</div>
          </div>
        )
      })}
    </div>
  )
}

export default HomePageGrid
