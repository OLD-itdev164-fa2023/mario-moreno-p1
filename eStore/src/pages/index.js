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
                height: 200
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
      <div className="flex flex-wrap justify-center justify-items-start mt-5 content-start">
        {data.allContentfulProduct.edges.map(edge => {
          return <Product edge={edge} key={edge.node.id} />
        })}
      </div>
    </Layout>
  )
}
export const Head = () => <Seo title="Home" />

export default IndexPage
