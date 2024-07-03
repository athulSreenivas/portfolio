import React from "react";
import Header from "../layout/Header";
import { Link } from "react-router-dom";
import Main from "../layout/Main";

const Index = () => {
  return (
    <Main description={"Athul Sreenivas"}>
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2>
              <Link to="/">About this site</Link>
            </h2>
            <p>
              {" "}
              Welcome to my website. Please feel free to read more{" "}
              <Link to="/about">about me</Link>, or you can check out my{" "}
              <Link to="/resume">resume</Link>,{" "}
              <Link to="/projects">projects</Link>, view{" "}
              <Link to="/contact">contact</Link> me.
            </p>
          </div>
        </header>
      </article>
    </Main>
  );
};

export default Index;
