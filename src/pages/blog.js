import React from "react"
import Layout from "../components/layout"
import Nav from "../components/nav/nav.com"
import Footer from "../components/footer/footer.com"
import Blogstyle from "./style/blog.css"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import Blogbox from "../components/blogbox/blogbox.com"



const Blog = ({data}) => {
  return (
    <Blogstyle>
    <Seo title="Blog" description="we talk about programming, tech and the best tips to get your tech life at top notch."/>
      <Layout>
        <Nav />
        <div className="row">
       
          <main>
            <h2 className="tutorial">Articles</h2>
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
    </Blogstyle>
  )
}

export const query = graphql`
query  {
    allContentfulBlog(
      sort: { fields: post___childMdx___frontmatter___date, order: DESC }
    ) {
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


export default Blog
