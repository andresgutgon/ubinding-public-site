const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsWork {
          edges {
            node {
              slug
              locale
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsWork.edges.map(({ node: work }) => {
        const { slug, locale } = work
        const localizedPath = locale == 'es' ? 'trabajos' : 'treballs'
        createPage({
          path: `${locale}/${localizedPath}/${work.slug}`,
          component: path.resolve(`./src/templates/work.js`),
          context: {
            slug,
            locale
          },
        })
      })
      resolve()
    })
  })
}
