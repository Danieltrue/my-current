import React from "react"
import Formstyle from "./form.css"

const Form = () => {
  return (
    <Formstyle
      action="https://formsubmit.co/hi@danielokezie.design"
      method="POST"
    >
      <section>
        <text>
          <h4>Get in touch</h4>
        </text>
        <div>
          <input
            required
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />
        </div>
        <div>
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <div>
          <textarea
            required
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
        </div>
        <input type="hidden" name="_url" value="https://besignq.com/contact" />
        <input type="hidden" name="_next" value="https://besignq.com/welcome" />
        <input type="hidden" name="_subject" value="BESIGNQ MESSAGE" />
        <div>
          <input type="submit" value="Send Message" />
        </div>
      </section>
    </Formstyle>
  )
}

export default Form
