import React from "react";
import { Link } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import Main from "../layout/Main";

const About = () => {
  // Define your Markdown content as a string
  const markdownContent = `

# About Me
Hi, I'm Athul Sreenivas, a software engineer focused on web development. I have 3+ years of hands-on experience building and improving web applications using PHP, CodeIgniter, MySQL, Python, and JavaScript. I care about writing clean, maintainable code and creating products that are fast, reliable, and easy to use.

# Projects & Achievements
- Built and maintained multiple web applications that improved workflow efficiency and user engagement.
- Led projects from planning to deployment, collaborating with cross-functional teams to deliver high-quality outcomes on schedule.
- Applied security best practices to protect user data and support compliance with industry standards.

# Interests

- *Football:* I enjoy both playing and watching football for the strategy, teamwork, and energy it brings.
- *Movies:* I like exploring different genres and storytelling styles in cinema.
- *Music:* Music is a big part of my day, and I listen to a wide range of artists and moods.
- *Swimming:* Swimming helps me stay active, focused, and refreshed.
- *Photography:* I enjoy capturing everyday moments and turning them into visual stories.
- *Coding:* I genuinely enjoy learning new tools and improving how I build software.

`;

  return (
    <Main title="About" description="Learn about Athul Sreenivas">
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2>
              <Link to="/about">About Me</Link>
            </h2>
            {/* Assuming you want to dynamically count the words in the Markdown content */}
            <p>
              (in about{" "}
              {markdownContent.split(/\s+/).filter((word) => word).length}{" "}
              words)
            </p>
          </div>
        </header>
        {/* Render the Markdown content */}
        <Markdown>{markdownContent}</Markdown>
      </article>
    </Main>
  );
};

export default About;
