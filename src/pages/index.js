import * as React from "react"
import { graphql, Link } from "gatsby"
import Nav from "../components/nav/nav.com"
import Footer from "../components/footer/footer.com"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Blogbox from "../components/blogbox/blogbox.com"
import Learn from "../components/learning with daniel/learn.com"
import Form from "../components/form/form.com"

const IndexPage = ({ data }) => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <Nav />
        <main className="row">
          <div className="welcome">
            <img
              src="https://images2.imgbox.com/05/d0/Qi5sIygB_o.png"
              alt="Welcome to Besignq"
            />
          </div>
          <div className="article-menu">
            <h3>Article</h3>
            <main>
              {data.allContentfulBlog.edges.reverse().map(({ node, index }) => {
                return node.post.childrenMarkdownRemark.map(nodes => {
                  return (
                    <Blogbox
                      key={node.id}
                      blog={nodes.frontmatter}
                      route={node.slug}
                    />
                  )
                })
              })}
            </main>
          </div>
        </main>
        <Learn />
        <main className="row">
          <Form />
        </main>
        <Footer />
      </Layout>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query MyQuery {
    allContentfulBlog {
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
