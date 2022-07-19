import styled from "styled-components"

const Footerstyle = styled.nav`
  width: 100%;
  min-height: 300px;
  background-color: #000000;
  margin-top: 1rem;
  .row {
    display: flex;
    align-items: center;
    min-height: 300px;
    main {
      display: flex;
      height: 100%;
      width: 100%;
      .copyright {
        width: 300px;
      }
      & > p {
        line-height: 145%;
      }
      div.logo {
        width: 80px;
        height: 80px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      a {
        p {
          color: #ccc;
          font-size: 70%;
          margin: 5px 0;
        }
      }
      .footer {
        color: #ffffff;
        display: flex;
        justify-content: space-between;
        width: 500px;
        align-items: center;

        div {
          display: flex;
          flex-direction: column;
          height: 100%;
          margin-left: 30px;
          & > p {
            margin-bottom: 1rem;
            font-size: 130%;
            a {
              font-weight: bold;
              color: #ffffff;
            }
          }
          a {
            color: var(--font-footer);
            text-transform: uppercase;
            font-size: 70%;
            margin-bottom: 10px;
            transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
            font-weight: bold;
          }
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    & {
      .row {
        main {
          align-items: center;
          .footer {
            width: 100%;
            font-size: 90%;
            flex-direction: column;
            align-items: flex-start;
            margin-top: 20px;
            margin-left: -25px;
            div {
            }
          }
        }
      }
    }
  }
`

export default Footerstyle
