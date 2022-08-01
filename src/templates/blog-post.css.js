import styled from "styled-components"

const BlogPostStyle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  .define {
    background-color: var(--border-clr);
    padding: 1rem;
    border-left: 2px solid var(--brand-clr);
    font-style: italic;
  }
  .author {
    width: 100%;
    padding: 0 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
    .author-image {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-bottom: -10px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 50%;
      }
    }
    p {
      span {
        font-weight: bold;
        /* color: var(--brand-clr); */
      }
    }
  }
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
    margin-top: 10px;
    margin-bottom: 20px;
    font-family: var(--serif);
    font-family: var(--font-sans-serif);
    text-transform: capitalize;
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
    height: 300px;
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
      &.unsplash {
        width: 100%;
      }
    }
  }
  .blog-image-other {
    padding: 1rem 0;
    margin-bottom: 30px;
    background-color: var(--border-clr);
    display: flex;
    align-items: center;
    justify-content: center;
    img {
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
    .highlight {
      background-color: var(--c1-09);
      color: var(--brand-clr) !important;
      padding: 5px;
      border-radius: 2px;
    }
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
        font-size: 100%;
      }
    }
  }

  ul.blog-list,
  ol.blog-list {
    margin-bottom: 40px;
    li {
      margin-left: 20px;
      font-size: 90%;
      margin-bottom: 10px;
      list-style-type: decimal;
      &::marker {
        font-size: 100%;
      }
    }
  }

  @media screen and (max-width: 900px) {
    & {
      .blog-title {
        font-size: 200%;
      }
    .blog-image {
      height: 200px;
      }
     
    }
  }
  @media screen and (max-width: 600px) {
    & {
      .blog-title {
        font-size: 200%;
      }
    .blog-image {
      height: 200px;
      }
      .blog-image-other {
        width: 100%;
        padding: 1rem 1rem;
        margin-bottom: 30px;
        background-color: var(--border-clr);
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 100%;
        }
      }
    }
  }
`

export default BlogPostStyle
