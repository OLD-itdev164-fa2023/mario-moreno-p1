import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Product from "../components/product"
import slugify from "slugify"

import getCategories from "../components/utils/getCategories"

const CategoryPage = ({ data }) => {
  const categories = getCategories(data.allContentfulProduct.edges)
  const items = data.allContentfulProduct.edges

  return (
    <Layout>
      <Seo title="Home" />
      <div className="container flex mx-auto">
        <div className="flex flex-col w-1/3 mt-5 py-5 px-4">
          <h1 className="text-2xl mb-4">Categories</h1>
          <div className="flex flex-col">
            <Link to="/" className="mb-2 no-underline text-black">
              All Categories
            </Link>
            {categories.map((category, index) => {
              const [text, count] = category
              return (
                <Link
                  to={`/categories/${slugify(text, { lower: true })}`}
                  className="mb-2 no-underline text-orange-600	"
                  key={index}
                >{`${text} (${count})`}</Link>
              )
            })}
          </div>
        </div>
        <div className="flex flex-wrap justify-start py-8 content-start gap-5">
          {items.map(edge => {
            return <Product edge={edge} key={edge.node.id} />
          })}
        </div>
      </div>
    </Layout>
  )
}
export const Head = () => <Seo title="Home" />

export const query = graphql`
  query ($category: String) {
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

export default CategoryPage
