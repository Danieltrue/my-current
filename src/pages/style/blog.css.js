import styled from "styled-components"

const Blogstyle = styled.section`
  main > h2 {
      font-family: var(--serif);
  }

  h2.tutorial {
    font-size: 300%;
    margin-bottom: 80px;   
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
`

export default Blogstyle
