import React from "react";
import { Link } from "react-router-dom";
import ContactIcon from "../ContactIcons";

const SideBar = () => {
  return (
    <section id="sidebar">
      <section id="intro">
        <Link to="/" className="logo">
          <img src={`/images/me.jpg`} alt="" />
        </Link>
        <header>
          <h2>Athul Sreenivas</h2>
          <p>
            <a href="mailto.athuls.sreenivas@gmail.com">
              athuls.sreenivas@gmail.com
            </a>
          </p>
        </header>
      </section>

      <section className="blurb">
        <h2>About</h2>
        <p>
          Hi, I&apos;m Athul. I hold an MCA from the{" "}
          <a href="https://ceconline.edu/">College of Engineering</a>.
          Currently, I am working at{" "}
          <a href="https://www.railyatri.in/">RailYatri</a> . Previously, I
          worked at <a href="https://ignosi.in/">Ignosi Enterprises</a>.
        </p>
        <ul className="actions">
          <li>
            {!window.location.pathname.includes("/resume") ? (
              <Link to="/resume" className="button">
                Learn More
              </Link>
            ) : (
              <Link to="/about" className="button">
                About Me
              </Link>
            )}
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcon />
        <p className="copyright">
          &copy; Athul Sreenivas <Link to="/">ath.com</Link>.
        </p>
      </section>
    </section>
  );
};

export default SideBar;
