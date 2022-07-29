import styled from "styled-components"

const FouroFour = styled.section`
   height: 100vh;
   h6 {
    margin-bottom: 1rem;
   }
   ul {
    display: flex;
    li {
      font-size: 600%;
      list-style-type: none;
      font-weight: bold;
      &:first-of-type {
        color: var(--brand-clr);
      }
      &:last-of-type {
        color: var(--brand-clr);
      }
    }
   }
  .row {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    a {
      width: 400px;
      padding: 1rem 1rem;
      text-align: center;
      background-color: var(--brand-clr);
      color: #fff;
      border-radius: 50px;
      margin-top: 1rem;
      font-size: 90%;
    }
  }
`

export default FouroFour
