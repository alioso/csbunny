const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const queryResults = await graphql(`
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
  console.log(queryResults)
  const pageTemplate = path.resolve(`src/templates/page.tsx`)
  queryResults.data.allContentfulPage.nodes.forEach((node) => {
    createPage({
      path: `/${node.slug}`,
      component: pageTemplate,
      context: {
        page: node
      }
    })
  })
}
