import * as React from "react"
import { graphql } from "gatsby"

import PageLayout from "../layouts/PageLayout"

interface Props {
  data: {
    allContentfulEvent: {
      nodes: {
        id: string
        date: string
        dateForOp: string
        title: string
      }[]
    }
  }
}

const EventsPage: React.FC<Props> = ({ data }) => {
  const events = data?.allContentfulEvent?.nodes
  const orderedEvents = events?.sort((a, b) => {
    const aDate = new Date(a.dateForOp).valueOf()
    const bDate = new Date(b.dateForOp).valueOf()

    console.log(aDate, bDate)

    return aDate - bDate
  })

  return (
    <PageLayout>
      <div>
        {orderedEvents.map((event) => {
          const dayOfWeekName = new Date(event.dateForOp).toLocaleString(
            "en-US",
            {
              weekday: "long"
            }
          )

          return (
            <section key={event.id}>
              <h3>{event.title}</h3>
              <div>
                {dayOfWeekName}, {event.date}
              </div>
            </section>
          )
        })}
        <h2>Upcoming</h2>
        <div></div>
        <h2>Previous</h2>
        <div></div>
      </div>
    </PageLayout>
  )
}

export const query = graphql`
  query AllEventsQuery {
    allContentfulEvent {
      nodes {
        id
        slug
        title
        date(formatString: "MMMM Do YYYY")
        dateForOp: date(formatString: "YYYY, MM, DD")
      }
    }
  }
`

export default EventsPage
