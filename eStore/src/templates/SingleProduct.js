import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Product from "../components/product"

function SingleProduct({ data }) {
  return (
    <Layout>
      <div className="flex flex-wrap justify-center min-h-[400px] items-center px-0 bg-slate-100">
        <div className="">
          <GatsbyImage
            image={data.contentfulProduct.image.gatsbyImageData}
            alt={data.contentfulProduct.title}
          />
        </div>
        <div className="p-5">
          <div className="">
            <h3>{data.contentfulProduct.title}</h3>
            <h3>${data.contentfulProduct.price}</h3>
            <p>{data.contentfulProduct.description.description}</p>
          </div>
          <div className="flex ">
            <h5 className="mr-5">
              Rating: {data.contentfulProduct.rating.rate}
            </h5>
            <h5>Likes: {data.contentfulProduct.rating.count}</h5>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center py-5 mt-3">
          <h1 className="mb-0 text-4xl">Related Products</h1>
        </div>
        <div className="flex flex-wrap justify-center justify-items-start content-start">
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
          height: 300
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
              height: 200
            )
          }
        }
      }
    }
  }
`
