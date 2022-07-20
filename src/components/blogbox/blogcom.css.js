import styled from "styled-components"

const Blogboxstyle = styled.div`
  width: 500px;
  margin-bottom: 30px;
  height: 200px;
  display: flex;
  align-items: center;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background-color: var(--brand-clr-09);
  }
  .blog-image {
    width: 300px;
    height: 100%;
    overflow: hidden;
    margin-right: 10px;
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
  }
  h2 {
    font-size: 100%;
    margin-top: 20px;
    margin-bottom: 10px;
    cursor: pointer;
    font-weight: 700;
    line-height: 145%;
  }
  p {
    font-family: var(--font-sans-inter);
    font-size: 80%;
    line-height: 145%;
  }
  p.data {
    margin-top: 20px;
    font-style: italic;
  }
  @media screen and (max-width: 500px) {
    & {
      width: 100%;
      .blog-image {
        overflow: hidden;
      }
    }
  }
`

export default Blogboxstyle
