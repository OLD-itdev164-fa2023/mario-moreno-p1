import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Product from "../components/product"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProduct {
        edges {
          node {
            id
            title
            price
            slug
            rating {
              rate
              count
            }
            image {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: TRACED_SVG
                width: 200
              )
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Seo title="Home" />
      {data.allContentfulProduct.edges.map(edge => {
        return <Product edge={edge} key={edge.node.id} />
      })}
    </Layout>
  )
}
export const Head = () => <Seo title="Home" />

export default IndexPage
