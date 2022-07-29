import { Link } from "gatsby"
import * as React from "react"
import Welcomestyle from "./style/welcome.css"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Welcome = () => (
	<Welcomestyle>
	  <Layout>
	    <Seo title="Welcome" />
	    <div className="row">
	    	<h1>Thank you</h1>
	      <p>Thanks for sending your message</p>
	      <Link to="/">Go Back Home</Link>
	    </div>
	  </Layout>
	</Welcomestyle>

)

export default Welcome
