import styled from "styled-components"

const Blogboxstyle = styled.div`
  width: 400px;
  margin-bottom: 40px;
  min-height: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
  }
  .blog-image {
    margin-right: 20px;
    p {
      font-size: 150%;
      font-weight: bold;
      opacity: 0.2;
    }
  }

  a {
    &:hover {
      h2 {        
      color: var(--brand-clr);
      }
      
    }
  }

  h2 {
    font-size: 90%;
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
      p.data {
        margin-top: 0.5rem;
      }
    }
  }
`

export default Blogboxstyle
