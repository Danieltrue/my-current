import React from "react"
import Layout from "../components/layout"
import Nav from "../components/nav/nav.com"
import Footer from "../components/footer/footer.com"
import Typescriptstyle from "./style/typescript.css"

const Typescript = () => {
  return (
    <Typescriptstyle>
      <Layout>
        <Nav />
        <div className="row">
          <div className="image">
            <img
              src="https://images2.imgbox.com/95/90/4cAQE7Ie_o.png"
              alt="typescript"
            />
          </div>
          <main>
            <h2>Lesson for Typescript</h2>
            <div className="grid"></div>
          </main>
        </div>
        <Footer />
      </Layout>
    </Typescriptstyle>
  )
}

export default Typescript
