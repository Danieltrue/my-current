import styled from "styled-components"
const Topicstyle = styled.div`
  a {
    color: #fff;
  }
  color: #fff;
  width: 200px;
  .image {
    width: 100%;
    height: 170px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .description {
    margin-top: 40px;
    h5 {
      font-size: 120%;
    }
    p {
      margin-top: 10px;
      font-size: 70%;
      line-height: 145%;
    }
  }
  @media screen and (max-width: 500px) {
    & {
      width: 100%;
      .image {
        width: 100%;
        height: 400px;
      }
    }
  }
`

export default Topicstyle
