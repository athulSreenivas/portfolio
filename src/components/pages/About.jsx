import React from "react";
import { Link } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import Main from "../layout/Main";

const About = () => {
  // Define your Markdown content as a string
  const markdownContent = `

# About Me
Hi, I'm Athul Sreenivas, a software engineer specialized in web development. With over 3 years of experience, I've honed my skills in PHP, CodeIgniter, MySQL, Python, and JavaScript. I enjoy building efficient, scalable, and user-friendly web applications that solve real-world problems.

# Projects & Achievements
- Developed and maintained multiple web applications that improved operational efficiency and user engagement.
- Successfully led projects from conception to deployment, working closely with cross-functional teams to deliver high-quality solutions on time.
- Implemented security best practices to protect user data and ensure compliance with industry standards.

# I Like

- *Football:* I enjoy playing and watching football, appreciating the strategy and teamwork involved in the game.
- *Movies:* I'm a movie enthusiast who loves exploring different genres and cinematic styles.
- *Songs:* Music is a big part of my life, and I enjoy listening to a wide variety of songs.
- *Swimming:* Swimming is one of my favorite activities, helping me stay fit and relaxed.
- *Photography:* I have a passion for photography, capturing moments and creating visual stories.
- *Coding*: I'm passionate about coding

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
