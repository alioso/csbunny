import React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import Header from "../components/Header"

interface Props {
  pageContext: any
}

const Page: React.FC<Props> = ({ pageContext }) => {
  const { page } = pageContext

  return (
    <div>
      <Header />
      <div>{renderRichText(page.body, {})}</div>
    </div>
  )
}

export default Page
