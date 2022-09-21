import * as React from "react"
import { graphql, Link } from "gatsby"
import Nav from "../components/nav/nav.com"
import Footer from "../components/footer/footer.com"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Blogbox from "../components/blogbox/blogbox.com"
import Learn from "../components/learning with daniel/learn.com"
import Form from "../components/form/form.com"
import useRecent from "../hooks/useRecent"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = ({ data }) => {
 
  const [recent, loading] = useRecent(data);

  return (
    <>
      <Seo title="Home" />
      <Layout>
        <Nav />
        <main className="row">
          <div className="welcome">
            <StaticImage
              src={recent.image}
              alt="Welcome to Besignq"
            />
            <Link to={'/blog/'+recent.title.toLowerCase().replaceAll(' ','-')}>{recent.title}</Link>
          </div>
          <div className="article-menu">
            <h3>Article</h3>
            <main>
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
              <Link to="/blog" className="read">More</Link>
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
    //
  )
}

export default IndexPage

export const query = graphql`
  query MyQuery {
    allContentfulBlog(
      sort: { fields: post___childMdx___frontmatter___date, order: DESC }
      limit: 6
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
