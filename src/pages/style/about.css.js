import styled from "styled-components"

const Aboutstyle = styled.section`
  div.row.section {
    min-height: 330px;
    margin-top: 50px;
    padding: 0 2rem;
    main {
      h2 {
        font-size: 200%;
        color: var(--brand-clr);
        font-family: var(--monospace);
      }
      .image {
        padding: 0 2rem;
        width: 100%;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 0;
        background-color: var(--brand-clr);
        img {
          height: 400px;
        }
      }

      .about-p {
        margin-bottom: 40px;
        padding: 0 7rem;
        h5 {
          font-size: 150%;
          margin-bottom: 20px;
        }
        p {
          a {
            color: var(--brand-clr);
            font-weight: bold;
            text-decoration: underline;
          }
        }
      }
      p {
        line-height: 195%;
      }
    }
  }
`

export default Aboutstyle