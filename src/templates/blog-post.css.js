import styled from "styled-components"

const BlogPostStyle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  article {
    padding: 0 2rem;
  }
  .blog-title {
    font-size: 270%;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 60px;
    text-align: center;
    color: var(--brand-clr);
    font-family: "Space Mono", monospace;
  }
  h2.blog-title.small {
    font-family: "Inter", sans-serif;
    font-size: 120%;
    text-align: left;
    margin-bottom: 10px;
    color: #000;
  }
  .blog-image {
    img {
      width: 100%;
      height: 100%;
      margin: 20px 0;
    }
    text {
      font-size: 70%;
      font-family: "Inter", sans-serif;
      margin-top: 10px;
    }
  }

  .sub-title {
    font-family: "Inter", sans-serif;
    margin-bottom: 10px;
  }

  p {
    display: block;
    margin-bottom: 20px;
    font-family: "Inter", sans-serif;
    line-height: 195%;
    font-size: 110%;
    strong {
      font-weight: bold;
      color: var(--brand-clr);
      font-size: 120%;
      text-decoration: underline;
    }
    &:first-of-type {
      margin-top: 20px;
    }
  }
  article.row {
    width: 100%;
    flex: 1;
  }

  ul,
  ol {
    list-style-type: none;
    li {
      &::marker {
        color: var(--brand-clr);
        font-size: 100%;
        font-weight: bold;
        font-size: 150%;
      }
    }
  }
`

export default BlogPostStyle
