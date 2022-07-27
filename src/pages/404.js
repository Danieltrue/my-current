import { Link } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="row">
      <h6>Sorry</h6>
      <p>But we couldn't find the page</p>
      <Link to="/">Go Back Home</Link>
    </div>
  </Layout>
)

export default NotFoundPage
