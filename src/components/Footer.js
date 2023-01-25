import React from "react";
import "./Footer.css";

const Footer = () => (
  <div className="footer">
    <div>
      <a href="/contact">
        <button className="big-blue-button">Contact me</button>
      </a>
    </div>
    <div>
      <article>
        <a
          href="https://github.com/scheiber"
          target="_blank"
          rel="noreferrer me"
        >
          <img
            className="icon"
            alt="GitHub"
            title="GitHub"
            src="/images/icons/github.png"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/jonscheiber/"
          target="_blank"
          rel="noreferrer me"
        >
          <img
            className="icon"
            alt="LinkedIn"
            title="LinkedIn"
            src="/images/icons/linkedin.png"
          />
        </a>
        <a href="https://qoto.org/@jon" target="_blank" rel="noreferrer me">
          <img
            className="icon"
            alt="Mastodon"
            title="Mastodon"
            src="/images/icons/mastodon.png"
          />
        </a>
      </article>
    </div>
    <p className="footer-text">
      &copy; {new Date().getFullYear()} Jonathan Scheiber. All rights reserved.
      <br />
      This site was created, coded, and styled by Jonathan Scheiber and is{" "}
      <a
        className="text-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/scheiber/scheiber.dev"
      >
        open source
      </a>
      .
    </p>
    <div className="pi">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://resume.scheiber.dev/"
        title="You've found the secret!"
      >
        &#960;
      </a>
    </div>
  </div>
);

export default Footer;
