const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pageResults = await graphql(`
    query allContentfulPage {
      allContentfulPage {
        nodes {
          id
          slug
          body {
            raw
          }
        }
      }
    }
  `)
  const eventResults = await graphql(`
    query allContentfulEvent {
      allContentfulEvent {
        nodes {
          id
          title
          date
          slug
          body {
            raw
          }
        }
      }
    }
  `)
  const pageTemplate = path.resolve(`src/templates/page.tsx`)
  const eventTemplate = path.resolve(`src/templates/event.tsx`)

  pageResults.data.allContentfulPage.nodes.forEach((node) => {
    createPage({
      path: `/${node.slug}`,
      component: pageTemplate,
      context: {
        page: node
      }
    })
  })

  eventResults.data.allContentfulEvent.nodes.forEach((node) => {
    createPage({
      path: `/events/${node.slug}`,
      component: eventTemplate,
      context: {
        event: node
      }
    })
  })
}
