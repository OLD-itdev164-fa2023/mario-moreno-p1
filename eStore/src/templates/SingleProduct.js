import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Product from "../components/product"

function SingleProduct({ data }) {
  return (
    <Layout>
      <div className="container">
        <div className="image-container">
          <GatsbyImage
            image={data.contentfulProduct.image.gatsbyImageData}
            alt={data.contentfulProduct.title}
          />
        </div>
        <div>
          <h3>{data.contentfulProduct.title}</h3>
          <h3>${data.contentfulProduct.price}</h3>
          <p>{data.contentfulProduct.description.description}</p>
        </div>
        <div>
          <h5>Rating: {data.contentfulProduct.rating.rate}</h5>
          <h5>Likes: {data.contentfulProduct.rating.count}</h5>
        </div>
      </div>
      <div>
        <h2>Related Products</h2>
        <div className="flex flex-wrap justify-center justify-items-start mt-5 content-start">
          {data.allContentfulProduct.edges.map(edge => {
            return <Product edge={edge} key={edge.node.id} />
          })}
        </div>
      </div>
    </Layout>
  )
}

export default SingleProduct

export const query = graphql`
  query ($id: String, $category: String) {
    contentfulProduct(id: { eq: $id }) {
      id
      title
      description {
        description
      }
      price
      rating {
        rate
        count
      }
      category
      image {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: TRACED_SVG
          width: 300
        )
      }
    }
    allContentfulProduct(filter: { category: { eq: $category } }) {
      edges {
        node {
          id
          title
          price
          slug
          category
          rating {
            rate
            count
          }
          image {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: TRACED_SVG
              width: 150
            )
          }
        }
      }
    }
  }
`
