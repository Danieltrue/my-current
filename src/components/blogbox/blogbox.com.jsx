import { Link } from "gatsby"
import React from "react"
import Blogboxstyle from "./blogcom.css"
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'
import ReactTimeAgo from 'react-time-ago'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)

const Blogbox = ({ blog, route, no }) => {
  function cutString(s, n) {
    var cut = s.indexOf(" ", n)
    if (cut === -1) return s
    return s.substring(0, cut)
  }

  return (
    <Blogboxstyle>
      <div className="blog-image">
        <p>{no !== 10 ? "0" + no : no}</p>
      </div>
      <div>
        <Link to={`/blog/${route}`}>
          <h2>{blog.title}</h2>
        </Link>
        <Link to={`/blog/${route}`}>
        
        <p>{cutString(blog.description, 60)}</p>
        <p className="data"><ReactTimeAgo date={blog.date} locale="en-US"/></p>
        </Link>
      </div>
    </Blogboxstyle>
  )
}

export default Blogbox
