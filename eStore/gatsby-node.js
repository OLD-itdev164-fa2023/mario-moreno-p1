exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allContentfulProduct {
        edges {
          node {
            title
            slug
            id
            category
          }
        }
      }
    }
  `)
  result.data.allContentfulProduct.edges.forEach(edge => {
    createPage({
      path: `/product/${edge.node.slug}`,
      component: require.resolve("./src/templates/SingleProduct.js"),
      context: {
        id: edge.node.id,
        category: edge.node.category,
      },
      defer: true,
    })
  })

  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
