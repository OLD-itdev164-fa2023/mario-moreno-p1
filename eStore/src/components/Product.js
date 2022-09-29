import React from "react"
import { Link } from "gatsby"

import { GatsbyImage } from "gatsby-plugin-image"

function Product({ edge }) {
  return (
    <div className="product-container">
      <Link to={`/product/${edge.node.slug}`}>
        <div>
          <GatsbyImage
            image={edge.node.image.gatsbyImageData}
            alt={edge.node.title}
          />
        </div>
        <div>
          <h4>{edge.node.title}</h4>
          <h4>${edge.node.price}</h4>
        </div>
        <div>
          <h5>Rating: {edge.node.rating.rate}</h5>
          <h5>Likes: {edge.node.rating.count}</h5>
        </div>
      </Link>
    </div>
  )
}

export default Product
