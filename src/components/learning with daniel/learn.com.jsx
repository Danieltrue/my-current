import { Link } from "gatsby"
import React from "react"
import { useState } from "react"
import Topic from "../topic/topic.com.jsx"
import Learnstyle from "./learn.css.js"

const Learn = () => {
  const [channel, setChannel] = useState([
    {
      topic: "Learning typescript",
      image: "https://images2.imgbox.com/95/90/4cAQE7Ie_o.png",
      description: {
        head: "Learning typescript",
        paragraph:
          "Do you want to learn typescript without the hassle of researching to understand better then just start here and start learning typescript.",
      },
      link: "/typescript",
    },
  ])
  return (
    <Learnstyle>
      <div className="row">
        <h4>Learning with Daniel</h4>
        <main>
          {channel.map((el, id) => {
            return <Topic key={id} data={el} />
          })}
        </main>
      </div>
    </Learnstyle>
  )
}

export default Learn
