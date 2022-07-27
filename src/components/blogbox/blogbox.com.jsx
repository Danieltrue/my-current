import { Link } from "gatsby"
import React from "react"
import Blogboxstyle from "./blogcom.css"

const Blogbox = ({ blog, route, no }) => {
  return (
    <Blogboxstyle>
      <div className="blog-image">
        {/* <Link to={`/${route}`}>
          <img src={blog.image} alt="Just be Happy" />
        </Link> */}
        <p>{no !== 10 ? "0" + no : no}</p>
      </div>
      <div>
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
