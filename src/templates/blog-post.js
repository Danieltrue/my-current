import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogPostStyle from "./blog-post.css"
import Nav from "../components/nav/nav.com"
import Footer from "../components/footer/footer.com"
import Form from "../components/form/form.com"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <BlogPostStyle>
        <Nav />
        <article className="row">
          <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </article>
        <main className="row">
          <Form />
        </main>
        <Footer />
      </BlogPostStyle>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
export default BlogPost
