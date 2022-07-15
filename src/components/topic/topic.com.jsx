import { Link } from "gatsby"
import React from "react"
import Topicstyle from "./topic.css"

const Topic = ({ data }) => {
  return (
    <Topicstyle>
      <Link to={data.link}>
        <div className="image">
          <img src={data.image} alt="data.description.head" />
        </div>
      </Link>
      <div className="description">
        <Link to={data.link}>
          <h5>{data.description.head}</h5>
        </Link>
        <p>{data.description.paragraph}</p>
      </div>
    </Topicstyle>
  )
}

export default Topic
