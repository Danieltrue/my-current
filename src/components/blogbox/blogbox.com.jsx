import { Link } from "gatsby"
import React from "react"
import Blogboxstyle from "./blogcom.css"

const Blogbox = ({ blog, route }) => {
  return (
    <Blogboxstyle>
      <div className="blog-image">
        <Link to={`/${route}`}>
          <img src={blog.image} alt="Just be Happy" />
        </Link>
      </div>
      <div>
        <div className="category-p">
          <p className="category">{blog.category}</p>
        </div>
        <Link to={`/${route}`}>
          <h2>{blog.title}</h2>
        </Link>
        <p>{blog.description}</p>
        <p className="data">{blog.date}</p>
      </div>
    </Blogboxstyle>
  )
}

export default Blogbox
