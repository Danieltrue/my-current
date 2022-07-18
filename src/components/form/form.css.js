import styled from "styled-components"

const Formstyle = styled.form`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  margin: 0 auto;
  width: 50%;
  section {
    width: 100%;
    text {
      h4 {
        font-size: 200%;
        margin-bottom: 1rem;
        text-align: center;
      }
      margin-bottom: 1rem;
    }
    div {
      margin-bottom: 1rem;
      input {
        width: 100%;
        padding: 0.5rem 1rem;
      }
      input[type="submit"] {
        background-color: var(--brand-clr);
        border: 0;
        color: #fff;
        border-radius: 5px;
      }
      textarea {
        width: 100%;
        padding: 0.5rem 1rem;
      }
    }
  }
`

export default Formstyle
