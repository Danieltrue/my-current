import styled from "styled-components"

const Blogstyle = styled.section`
  main > h2 {
      font-family: var(--serif);
  }

  h2.tutorial {
    font-size: 200%;
    margin-bottom: 80px;
    margin-left: 50px;   
  }
  .grid {
    h2 {
      font-size: 200%;
    }
  }
  p {
    line-height: 145%;
    font-size: 90%;
  }
  ul {
    li {
      font-size: 90%;
      list-style: none;
      line-height: 145%;
    }
  }



   @media screen and (max-width: 500px) {
    & {
       .grid {
        h2 {
          font-size: 100%;
        }
      }
       p {
    line-height: 145%;
    font-size: 80%;
  }
    }
  }


`;

export default Blogstyle
