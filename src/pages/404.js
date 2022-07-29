import { Link } from "gatsby"
import * as React from "react"
import FouroFour from "./style/fourofour.css"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
	<FouroFour>
	  <Layout>
	    <Seo title="404" />
	    <div className="row">
	      <h6>Sorry</h6>
	      <ul>
		      <li>4</li>
		      <li>0</li>
		      <li>4</li>
	      </ul>
	      <p>But we couldn't find the page</p>
	      <Link to="/">Go Back Home</Link>
	    </div>
	  </Layout>
	</FouroFour>

)

export default NotFoundPage
