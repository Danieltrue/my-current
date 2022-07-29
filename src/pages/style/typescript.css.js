import styled from "styled-components"

const Typescriptstyle = styled.section`
  .image {
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--brand-clr);
    margin-bottom: 20px;
    img {
      width: 100%;
      height: 400px;
      object-fit: cover;
    }
  }

  .tutorial {
    font-family: var(--serif);
    font-size: calc(1vw * 2px);
    margin-bottom: 3rem;
  }


.grid {
  min-height: 500px;
  padding-top: 2rem;
}
  @media screen and (max-width: 500px) {
    & {
    .image {
      height: 300px;
      img {
        height: 300px;
      }
    }
   }
  }

`

export default Typescriptstyle
