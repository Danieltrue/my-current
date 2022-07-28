import * as React from "react"
import PropTypes from "prop-types"
import Global from "../pages/global"

// import Seo from "./seo"
import { graphql, useStaticQuery } from "gatsby"

const Layout = ({ children }) => {
  useStaticQuery(graphql`
    query siteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div style={{ overflowX: "hidden" }}>
      <Global />
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
