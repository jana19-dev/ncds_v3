exports.createPages = ({ graphql, boundActionCreators }) => {
  const path = require('path')
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allSanityContribution {
            edges {
              node {
                _id,
                slug {
                  current
                },
                title,
                date (formatString: "MMMM Do, YYYY"),
                description,
                images {
                  asset {
                    url
                  }
                }
              }
            }
          }
          allSanityPublication {
            edges {
              node {
                _id,
                slug {
                  current
                },
                title,
                description,
                images {
                  asset {
                    url
                  }
                }
              }
            }
          }
          allSanityGallery {
            edges {
              node {
                _id,
                slug {
                  current
                },
                title,
                description,
                images {
                  asset {
                    url
                  }
                }
              }
            }
          }
          allSanityEvent {
            edges {
              node {
                _id,
                slug {
                  current
                },
                title,
                description,
                image {
                  asset {
                    url
                  }
                }
              }
            }
          }
          allSanityObituary {
            edges {
              node {
                _id,
                slug {
                  current
                },
                name,
                description,
                image {
                  asset {
                    url
                  }
                }
              }
            }
          }
        }
      `
      ).then(result => {
        if (result.errors) reject(result.errors)
        result.data.allSanityContribution.edges.forEach(({ node }) => {
          createPage({
            path: `contributions/${node.slug.current}`,
            component: path.resolve('src/templates/contribution.js'),
            context: node
          })
        })
        result.data.allSanityPublication.edges.forEach(({ node }) => {
          createPage({
            path: `publications/${node.slug.current}`,
            component: path.resolve('src/templates/publication.js'),
            context: node
          })
        })
        result.data.allSanityGallery.edges.forEach(({ node }) => {
          createPage({
            path: `gallery/${node.slug.current}`,
            component: path.resolve('src/templates/gallery.js'),
            context: node
          })
        })
        result.data.allSanityEvent.edges.forEach(({ node }) => {
          createPage({
            path: `events/${node.slug.current}`,
            component: path.resolve('src/templates/event.js'),
            context: node
          })
        })
        result.data.allSanityObituary.edges.forEach(({ node }) => {
          createPage({
            path: `obituaries/${node.slug.current}`,
            component: path.resolve('src/templates/obituary.js'),
            context: node
          })
        })
      })
    )
  })
}
