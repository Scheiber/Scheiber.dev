import "./About.css";
import "../devicon/devicon.min.css";
import { HelmetProvider, Helmet } from "react-helmet-async";

const About = () => (
  <div className="about">
    <HelmetProvider>
      <Helmet>
        <title>Jonathan Scheiber | About</title>
      </Helmet>
    </HelmetProvider>
    <article>
      <img
        className="headshot"
        src="./images/headshot.png"
        alt="Headshot of Jonathan Scheiber"
      />
    </article>
    <div className="about-text">
      <p>
        Hello, and welcome to my website! My name is Jonathan Scheiber and I am
        a full-stack web developer with a passion for creating dynamic,
        user-friendly websites and applications.
      </p>
      <p>
        I am skilled in a range of technologies, including JavaScript, HTML,
        CSS, React, Express, PostgreSQL, APIs, Node.js, Git, Linux, and macOS. I
        am highly motivated and always looking to improve my skills and stay up
        to date with the latest trends in web development.
      </p>
      <p>
        I am proficient in both front-end and back-end development, and have a
        deep understanding of web development principles and best practices.
        Whether it's building responsive websites, creating robust APIs, or
        implementing database systems, I have the skills and experience to
        deliver high-quality and scalable solutions.
      </p>
      <p>
        In my free time, I enjoy staying up-to-date with the latest web
        development trends and technologies, and love to explore new frameworks
        and libraries. I am also an avid learner and am always looking for ways
        to improve my skills and knowledge.
      </p>
      <p>
        If you have a project in mind or are looking for a reliable developer to
        join your team, please don't hesitate to{" "}
        <a href="/contact">reach out to me</a>. Feel free to take a look at{" "}
        <a href="/portfolio">my portfolio</a> to see samples of my work. Thank
        you for visiting.
      </p>
    </div>
    <h1 className="title">Skills</h1>
    <div className="skills-grid">
      <i title="JavsScript" class="devicon devicon-javascript-plain" />
      <i title="React" class="devicon devicon-react-plain-wordmark" />
      <i title="HTML5" class="devicon devicon-html5-plain-wordmark" />
      <i title="CSS3" class="devicon devicon-css3-plain-wordmark" />
      <i title="Node.js" class="devicon devicon-nodejs-plain-wordmark" />
      <i title="Express" class="devicon devicon-express-original-wordmark" />
      <i title="Git" class="devicon devicon-git-plain-wordmark" />
      <i title="Markdown" class="devicon devicon-markdown-plain" />
      <i title="PostgreSQL" class="devicon devicon-postgresql-plain-wordmark" />
      <i title="Adobe Photoshop" class="devicon devicon-photoshop-line" />
      <i title="Figma" class="devicon devicon-figma-plain" />
      <i title="Visual Studio Code" class="devicon devicon-vscode-plain" />
    </div>

    <section>
      <div>
        <a href="/portfolio">
          <button className="big-blue-button">See my work</button>
        </a>
      </div>
    </section>
  </div>
);

export default About;
