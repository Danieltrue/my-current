import styled from "styled-components"

const Blogboxstyle = styled.div`
  width: 500px;
  margin-bottom: 30px;
  height: 100px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background-color: var(--border-clr);
  }
  .blog-image {
    width: 100px;
    height: 100px;
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

  h2 {
    font-size: 100%;
    margin-bottom: 10px;
    text-transform: capitalize;
    cursor: pointer;
    font-weight: 700;
    line-height: 145%;
  }
  p {
    font-family: var(--font-sans-inter);
    font-size: 70%;
    line-height: 145%;
    width: 70%;
  }
  p.data {
    margin-top: 0.5rem;
    font-weight: bold;
  }
  @media screen and (max-width: 500px) {
    & {
      width: 100%;
      height: 140px;
      .blog-image {
        overflow: hidden;
      }

      p.data {
        margin-top: 0.5rem;
      }
    }
  }
`

export default Blogboxstyle
