import React from "react"
import Layout from "../components/layout"
import Nav from "../components/nav/nav.com"
import Footer from "../components/footer/footer.com"
import Form from "../components/form/form.com"
import Seo from "../components/seo"

const Contact = () => {
  return (
    <>
    <Seo title="Contact" />
      <Layout>
        <Nav />
        <div className="row">
          <Form />
        </div>
        <Footer />
      </Layout>
    </>
  )
}

export default Contact
