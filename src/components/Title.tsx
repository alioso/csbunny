import React from "react"
import * as styles from "../css/title.module.css"

interface Props {
  classes: string
}

const Title: React.FC<Props> = ({ classes }) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.title} ${classes}`}>Shinjoo Cho</div>
    </div>
  )
}

export default Title
