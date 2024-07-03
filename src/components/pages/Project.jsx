import React from "react";
import { Link } from "react-router-dom";
import Main from "../layout/Main";
import data from "../../data/projects";
import Cell from "../layout/Cell";

const Project = () => {
  return (
    <Main title="Projects" description="Learn About Athul Sreenivas projects">
      <article className="post" id="projects">
        <header>
          <div className="title">
            <h2>
              <Link to="/projects">Projects</Link>
            </h2>
          </div>
        </header>
        {data.map((Project) => (
          <Cell data={Project} key={Project.title}></Cell>
        ))}
      </article>
    </Main>
  );
};

export default Project;
