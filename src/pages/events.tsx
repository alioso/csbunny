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

type Timeline = "previous" | "upcoming"
type Sorting = "asc" | "desc"

const EventsPage: React.FC<Props> = ({ data }) => {
  const listEvents = (isTimeline: Timeline, isSorting: Sorting) => {
    const [timeline, setTimeline] = React.useState<Timeline>("upcoming")
    const [sorting, setSorting] = React.useState<Sorting>("asc")
    const events = data?.allContentfulEvent?.nodes

    React.useEffect(() => {
      setTimeline(isTimeline)
      setSorting(isSorting)
    }, [isTimeline, isSorting])

    const timelinedEvents = events?.filter((event) => {
      const eventDate = new Date(event.dateForOp).valueOf()
      const todayDate = new Date()
      const tomorrowDate = new Date()
      tomorrowDate.setTime(todayDate.getTime() - 8.64e7)
      const today = todayDate.valueOf()
      const tomorrow = tomorrowDate.valueOf()

      if (timeline === "upcoming") {
        return eventDate > tomorrow
      } else {
        return eventDate < today
      }
    })

    const orderedEvents = timelinedEvents?.sort((a, b) => {
      const aDate = new Date(a.dateForOp).valueOf()
      const bDate = new Date(b.dateForOp).valueOf()

      return sorting === "asc" ? aDate - bDate : bDate - aDate
    })

    return orderedEvents.map((event) => {
      const dayOfWeekName = new Date(event.dateForOp).toLocaleString("en-US", {
        weekday: "long"
      })

      return (
        <section key={event.id}>
          <h3>{event.title}</h3>
          <div>
            {dayOfWeekName}, {event.date}
          </div>
        </section>
      )
    })
  }

  return (
    <PageLayout>
      <div>
        <h2>Upcoming</h2>
        <div>{listEvents("upcoming", "desc")}</div>
        <h2>Previous</h2>
        <div>{listEvents("previous", "asc")}</div>
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
