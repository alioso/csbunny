import React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import PageLayout from "../layouts/PageLayout"

interface Props {
  pageContext: any
}

const Page: React.FC<Props> = ({ pageContext }) => {
  const { event } = pageContext

  return (
    <PageLayout>
      <h1>{event.title}</h1>
      <div>{event.body && renderRichText(event.body, {})}</div>
    </PageLayout>
  )
}

export default Page
