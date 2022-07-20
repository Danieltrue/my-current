import styled from "styled-components"

const Navstyle = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  .row {
    padding: 0 2rem;
    width: 100%;
  }
  main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    div.logo {
      width: 60px;
      height: 60px;
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
        font-weight: bold;
      }
      li {
        list-style-type: none;
      }
    }
  }
  @media screen and (max-width: 600px) {
    & {
      padding: 2rem 0;
    }
  }
`

export default Navstyle
