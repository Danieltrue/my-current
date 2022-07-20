import styled from "styled-components"

const Aboutstyle = styled.section`
  div.row.section {
    min-height: 330px;
    margin-top: 50px;
    padding: 0 2rem;
    main {
      h2 {
        font-size: 200%;
        font-family: var(--font-sans-serif);
      }
      .image {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin: 20px 0;
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          border-radius: 50%;
        }
      }

      .about-p {
        margin-bottom: 40px;
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

  @media screen and (max-width: 500px) {
    & {
      .about-p {
        padding: 0 0;
      }
    }
  }
`

export default Aboutstyle
