import * as React from "react"

import * as styles from "../css/pageLayout.module.css"
import Header from "../components/Header"

interface Props {
  children: any
}

const PageLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.pageLayout}>
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default PageLayout
