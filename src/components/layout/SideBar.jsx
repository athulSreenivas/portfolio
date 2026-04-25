import React from 'react';
import { Link } from 'react-router-dom';
import ContactIcon from '../ContactIcons';

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src="/images/me.jpg" alt="Athul Sreenivas" />
      </Link>
      <header>
        <h2>Athul Sreenivas</h2>
        <p className="sidebar-role">Backend Engineer · AI Systems</p>
        <p>
          <a href="mailto:athuls.sreenivas@gmail.com">
            athuls.sreenivas@gmail.com
          </a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Athul. I build scalable backend systems and production AI pipelines.
        MCA from{' '}
        <a href="https://ceconline.edu/">College of Engineering, Chengannur</a>.
        Currently building at{' '}
        <a href="https://www.railyatri.in/">RailYatri</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              View Resume
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
        &copy; Athul Sreenivas
      </p>
    </section>
  </section>
);

export default SideBar;
