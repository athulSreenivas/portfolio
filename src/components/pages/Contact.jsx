import React from "react";
import Main from "../layout/Main";
import { Link } from "react-router-dom";
import ContactIcons from "../ContactIcons";
import EmailLink from "../EmailLink";

const Contact = () => {
  return (
    <Main
      title="Contact"
      description="Contact Athul Sreenivas via email @ athuls.sreenivas@gmail.com"
    >
      <article className="post" id="contact">
        <header>
          <div className="title">
            <h2>
              <Link to="/contact">Contact</Link>
            </h2>
          </div>
        </header>
        <div className="email-at">
          <p>Feel free to get in touch .You can email me at</p>
        </div>
        <EmailLink />
        <ContactIcons></ContactIcons>
      </article>
    </Main>
  );
};

export default Contact;
