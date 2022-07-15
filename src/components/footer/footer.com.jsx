import React from "react"
import { Link } from "gatsby"

import Footerstyle from "./footer.css.js"

const Footer = () => {
  return (
    <Footerstyle>
      <div class="row">
        <main>
          <Link to="/">
            <div className="logo">
              <img
                src="https://images2.imgbox.com/bc/aa/7ihmGbGA_o.png"
                alt="Besignq"
              />
            </div>
            <div className="social_handle"></div>
            <p className="copyright">
              Copyright @ 2022 - {new Date().getFullYear()}
            </p>
          </Link>
          <div className="footer">
            <div className="explore">
              <p>
                <a>Explore</a>
              </p>
              <Link to="/">Article</Link>
            </div>
            <div className="knowme">
              <p>
                <a>More About Me</a>
              </p>
              <Link to="/">Newsletter</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/about">About me</Link>
            </div>
            <div className="legal">
              <p>
                <a>Legal</a>
              </p>
              <Link to="/terms">Terms & Condition</Link>
              <Link to="/privacy">Privacy Policy</Link>
            </div>
          </div>
        </main>
      </div>
    </Footerstyle>
  )
}

export default Footer
