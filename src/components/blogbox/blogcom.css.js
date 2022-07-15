import styled from "styled-components"

const Blogboxstyle = styled.div`
  width: 300px;
  min-height: 420px;
  padding-bottom: 30px;
  .blog-image {
    width: 100%;
    height: 300px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.5s ease;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
  .category {
    color: var(--brand-clr);
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 20px;
  }
  h2 {
    font-size: 150%;
    margin-top: 20px;
    margin-bottom: 10px;
    cursor: pointer;
    font-weight: 700;
  }
  p {
    font-family: var(--font-sans-inter);
    font-size: 80%;
    line-height: 145%;
  }
  p.data {
    font-weight: bold;
    margin-top: 20px;
  }
`

export default Blogboxstyle