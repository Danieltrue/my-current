import { Link } from "gatsby"
import React from "react"
import Blogboxstyle from "./blogcom.css"

const Blogbox = ({ blog }) => {
  return (
    <Blogboxstyle>
      <div className="blog-image">
        <Link to={`/${blog.title}`}>
          <img src={blog.image} alt="Just be Happy" />
        </Link>
      </div>
      <div>
        <div className="category-p">
          {blog.cat.map(el => {
            return <p className="category">{el}</p>
          })}
        </div>
        <Link to={`/${blog.title}`}>
          <h2>{blog.title}</h2>
        </Link>
        <p>{blog.description}</p>
        <p className="data">{blog.date}</p>
      </div>
    </Blogboxstyle>
  )
}

export default Blogbox
