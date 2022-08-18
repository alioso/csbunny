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
      <div>{event.body && renderRichText(event.body, {})}</div>
    </PageLayout>
  )
}

export default Page
