const path = require(`path`)
const { graphql } = require("gatsby")

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const results = await graphql(`
    query MyQuery {
      allContentfulBlog {
        nodes {
          slug
        }
      }
    }
  `)
  if (results.error) {
    console.log(results.error)
    return
  }

  results.data.allContentfulBlog.nodes.forEach(node => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.slug,
      },
    })
  })
}
