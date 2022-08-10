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
    .image {
      height: 300px;
      img {
        height: 300px;
      }
    }
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

`

export default Typescriptstyle
