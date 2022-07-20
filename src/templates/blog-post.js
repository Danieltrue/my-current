import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogPostStyle from "./blog-post.css"
import Nav from "../components/nav/nav.com"
import Footer from "../components/footer/footer.com"
import Form from "../components/form/form.com"
import ShareButtons from "../components/shareButton/sharebutton.com"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  const url = typeof window !== "undefined" ? window.location.href : ""
  console.log(url)
  return (
    <Layout>
      <BlogPostStyle>
        <Nav />
        <article className="row">
          <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </article>
        <div className="share row">
          <h4>Share this</h4>
          <ShareButtons
            url={url}
            title={post.frontmatter.title}
            description={post.frontmatter.description}
          />
        </div>
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
        description
      }
    }
  }
`
export default BlogPost
