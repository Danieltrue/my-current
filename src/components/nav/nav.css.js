import styled from "styled-components"

const Navstyle = styled.nav`
  width: 100%;
  min-height: 150px;
  display: flex;
  align-items: center;
  .row {
    padding: 0 2rem;
    width: 100%;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border-clr);
  }
  main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    div.logo {
      width: 45px;
      height: 45px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    ul {
      width: 300px;
      display: flex;
      justify-content: space-between;
      a {
        text-decoration: none;
        font-size: 90%;
      }
      li {
        list-style-type: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    & {
      padding: 2rem 0;
      main {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        div.logo {
          margin-bottom: 20px;
        }
        ul {
          width: 240px;
        }
      }
    }
  }
`

export default Navstyle
