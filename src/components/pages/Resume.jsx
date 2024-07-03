import React from "react";
import Main from "../layout/Main";
import { Link } from "react-router-dom";
import Education from "./Resume/Education/Education";
import degrees from "../../data/resume/degrees";
import work from "../../data/resume/work";
import Work from "./Resume/Work/Work";
import { skills, categories } from "../../data/resume/skills";
import courses from "../../data/resume/courses";
import resume from "../../static/Resume.pdf";
import Skills from "./Resume/Skills/Skills";
import References from "./Resume/References";
import Courses from "./Resume/Courses/Courses";
const sections = {
  Education: () => <Education data={degrees} />,
  Work: () => <Work data={work} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  Courses: () => <Courses data={courses} />,
  References: () => <References />,
};

const Resume = () => {
  return (
    <Main title="Resume" description="Learn About Athul Sreenivas Resume">
      <article className="post" id="resume">
        <header>
          <div className="title">
            <div className="resume_head">
              <h2>
                <Link to="/resume">Resume</Link>
              </h2>
              <a href={resume} target="_blank" className="resume_download">
                Downloaded
              </a>
            </div>

            <div className="link-container">
              {Object.keys(sections).map((sec) => (
                <h4 key={sec}>
                  <a href={`#${sec.toLowerCase()}`}>{sec}</a>
                </h4>
              ))}
            </div>
          </div>
        </header>
        {Object.entries(sections).map(([name, Section]) => (
          <Section key={name} />
        ))}
      </article>
    </Main>
  );
};

export default Resume;
