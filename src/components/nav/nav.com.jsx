import { Link } from "gatsby"
import React from "react"
import Navstyle from "./nav.css.js"

const Nav = () => {
  return (
    <Navstyle>
      <div class="row">
        <main>
          <Link to="/">
            <div className="logo">
              <img
                src="https://images2.imgbox.com/bc/aa/7ihmGbGA_o.png"
                alt="Besignq"
              />
            </div>
          </Link>
          <ul>
            <Link to="/blog">
              <li>Blog</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>Contact us</li>
            </Link>
          </ul>
        </main>
      </div>
    </Navstyle>
  )
}

export default Nav
