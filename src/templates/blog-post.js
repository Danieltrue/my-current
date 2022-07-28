import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import BlogPostStyle from "./blog-post.css"
import Nav from "../components/nav/nav.com"
import Footer from "../components/footer/footer.com"
import Form from "../components/form/form.com"
import ShareButtons from "../components/shareButton/sharebutton.com"
import Seo from "../components/seo"

const BlogPost = ({ data }) => {
  const post = data.contentfulBlog.post.childMarkdownRemark
  const url = typeof window !== "undefined" ? window.location.href : ""
  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <BlogPostStyle>
        <Nav />

        <article className="row">
          <div dangerouslySetInnerHTML={{ __html: post.rawMarkdownBody }}></div>
        </article>
        <main className="row">
          <div className="author">
            <div className="author-image">
              <img src={post.frontmatter.authorname} alt="author" />
            </div>
            <p>
              <span>Author:</span> {post.frontmatter.author}
            </p>
          </div>
        </main>
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
    contentfulBlog(slug: { eq: $slug }) {
      slug
      post {
        childMarkdownRemark {
          frontmatter {
            title
            date
            description
            image
            category
            author
            authorname
          }
          rawMarkdownBody
        }
      }
    }
  }
`
export default BlogPost
