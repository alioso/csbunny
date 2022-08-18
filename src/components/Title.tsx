import { Link } from "gatsby"
import React from "react"
import * as styles from "../css/title.module.css"

interface Props {
  classes?: string
}

const Title: React.FC<Props> = ({ classes }) => {
  return (
    <div className={`${styles.container} ${classes}`}>
      <Link to="/">
        <div className={`${styles.title} title`}>Shinjoo Cho</div>
        <div className={`${styles.subTitle} sub-title`}>bandoneon / piano</div>
      </Link>
    </div>
  )
}

export default Title
