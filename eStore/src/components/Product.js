import React from "react"
import { Link } from "gatsby"

import { GatsbyImage } from "gatsby-plugin-image"

function Product({ edge }) {
  return (
    <div className="flex w-[300px] justify-center items-start text-center bg-white border-2 border-gray-300	p-4 rounded-md shadow-md ">
      <Link
        to={`/product/${edge.node.slug}`}
        className="no-underline text-gray-500	"
      >
        <div className=" flex h-[230px] justify-center items-center ">
          <GatsbyImage
            image={edge.node.image.gatsbyImageData}
            alt={edge.node.title}
          />
        </div>
        <div>
          <h4 className="text-base text-black">{edge.node.title}</h4>
          <h4 className="text-lg text-amber-600">${edge.node.price}</h4>
        </div>
        <div className="flex justify-center">
          <h5 className="mr-4">Rating: {edge.node.rating.rate}</h5>
          <h5>Likes: {edge.node.rating.count}</h5>
        </div>
      </Link>
    </div>
  )
}

export default Product
