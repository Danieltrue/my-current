import React from "react"
import Layout from "../components/layout"
import Nav from "../components/nav/nav.com"
import Footer from "../components/footer/footer.com"
import Typescriptstyle from "./style/typescript.css"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import Blogbox from "../components/blogbox/blogbox.com"



const Typescript = ({data}) => {
  return (
    <Typescriptstyle>
    <Seo title="Learning Typescript" description="Want to learn typescript without enrolling in a fancy bootcamp, you can learn typescript from a typescript dev and learn it the fun way"/>
      <Layout>
        <Nav />
        <div className="row">
       
          <main>
            <h2 className="tutorial">Lesson for Typescript</h2>
            <div className="grid">
              {data.allContentfulBlog.edges.map(({ node }, index) => {
                return node.post.childrenMarkdownRemark.map(nodes => {
                  return (
                    <Blogbox
                      key={node.id}
                      blog={nodes.frontmatter}
                      route={node.slug}
                      no={index + 1}
                    />
                  )
                })
              })}
            </div>
          </main>
        </div>
        <Footer />
      </Layout>
    </Typescriptstyle>
  )
}

export const query = graphql`
query {
  allContentfulBlog(filter: {category: {eq: "typescript"}}) {
    edges {
      node {
        id
        post {
          childrenMarkdownRemark {
            frontmatter {
              title
              date
              description
              image
              category
            }
          }
        }
        slug
      }
    }
  }
}
`


export default Typescript
