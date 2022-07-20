import styled from "styled-components"

const BlogPostStyle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  main.row {
    width: 100%;
    font-size: 90%;
  }

  .detail {
    margin-bottom: 50px;
    font-size: 80%;
  }
  .share {
    width: 100%;
    padding: 0 2rem;

    h4 {
      margin-bottom: 20px;
      font-size: 120%;
    }
  }
  article {
    padding: 0 2rem;
  }
  .blog-title {
    font-size: 270%;
    line-height: 145%;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 60px;
    font-family: var(--serif);
    font-family: var(--font-sans-serif);
  }
  h2.blog-title.small {
    font-family: "Inter", sans-serif;
    font-size: 120%;
    text-align: left;
    margin-bottom: 10px;
    color: var(--font-color);
  }
  h2.blog-title.medium {
    font-family: "Inter", sans-serif;
    font-size: 160%;
    text-align: left;
    margin-bottom: 10px;
    color: var(--font-color);
    margin-top: 4rem;
    margin-bottom: 2rem;
  }
  .blog-image {
    height: 500px;
    margin-bottom: 30px;
    background-color: var(--c2);
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 400px;
      height: 100%;
      margin: 20px 0;
      object-fit: cover;
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
    font-size: 90%;
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
