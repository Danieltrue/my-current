import React from "react"
import Nav from "../components/nav/nav.com"
import Footer from "../components/footer/footer.com"
import Layout from "../components/layout"
import Form from "../components/form/form.com"
import Seo from "../components/seo"
import Aboutstyle from "./style/about.css"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <Aboutstyle>
    <Seo title="About" description=""/>
      <Layout>
        <Nav />
        <div className="row section">
          <main>
            <h2 className="about">About me</h2>
            <div className="image">
              <StaticImage
                src="https://images2.imgbox.com/87/11/pKzXGSoT_o.jpeg"
                alt="Daniel okezie"
              />
            </div>
            <div className="about-p">
              <p>
                Hello i'm <Link to="/about">Daniel okezie</Link> 👋, I'm a Web
                Developer
              </p>

              <p>
                I love build standard software that perform it's duty without
                error and process that deny the user the experience of a good
                application. i enjoy helping people learn what i have learned
                better.
              </p>
            </div>

            <div className="about-p">
              <h5>How I became a software developer 👨‍💻</h5>
              <p>
                It was 2020 then the pendemic started and was still as fresh as
                hell i only heard about other countries which held lockdown to
                reduce the spread of the virus and i was out of school and
                thought to my self what i would do, I was searching, tried every
                thing i could get my hands on and then something hit me, i had
                innovative ideas i could build to automate my dad's business but
                unfortunately i lacked the skill and the money and i said to my
                self between the money and the skill which of this i easily
                attain to build this idea for my dad and i thought to myself and
                then i realized i could get the skill which was much more easier
                to me weeks later i started learning HTML & CSS an it felt
                building my first page it was facinating to me that i with just
                a notepad, a single file i could make magic and it was just
                awesome. after searching youtube for a proper course then i
                found one on{" "}
                <a href="https://www.freecodecamp.org/" target="_blank">
                  FreeCodeCamp
                </a>
                and it was a css course and a HTML course then i used the course
                and then built a simple page.
              </p>
              <br />
              <p>
                So i found that i needed web design skill to design a beautiful
                app for my father's app and then i register for a udemy course
                which took me through how to design a beautiful website and i
                finished it in a month here is my{" "}
                <a target="_blank" href="#">
                  First Web Design Project
                </a>{" "}
                and was ready to design but found i needed to add interactivity
                to the app so i went to learn javascript which was a hassle for
                me cause at first it was so confussing and challenging but i
                learned it and then went on to build a simple{" "}
                <a
                  target="_blank"
                  href="https://danieltrue.github.io/qrcode-generator/"
                >
                  Qrcode Generator App
                </a>{" "}
                for my father automation it was incredible. after that i just
                loved coding cause it gave me the ability of crafting & creation
                programming is truely an art.
              </p>
            </div>

            <div className="about-p">
              <h5>My Love Books 📘</h5>
              <p>
                My Love for books began when i was just 7yrs i still remeber the
                first book i read it was children novel and after that i have
                always wanted to read a good book, books to me are my way of
                adding to my current knowledge and still haveing fun at the same
                time, Books helps in changing your view of a situation the world
                we live and even what you think is worth doing or what not
                learning from other people's mistake is just so awesome cause it
                teaches you how to do and not image the amount of great books
                out there just waiting to be opened.
              </p>
              <br />
            </div>
            <div className="about-p">
              <h5>IRL</h5>
              <p>
                outside working and reading you will find me listening to my
                favorite song, exercising, sleeping and doing what should be
                done to get to the next level of where i'm currently at.
              </p>
              <br />
            </div>
          </main>
        </div>
        <main className="row">
          <Form />
        </main>
        <Footer />
      </Layout>
    </Aboutstyle>
  )
}

export default About
