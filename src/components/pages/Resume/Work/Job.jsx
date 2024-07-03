import dayjs from "dayjs";
import Markdown from "markdown-to-jsx";
import React from "react";
import PropTypes from "prop-types";

const Job = ({
  data: { name, position, url, startDate, endDate, summary, highlights },
}) => {
  return (
    <article className="job-container">
      <header>
        <h4>
          <a href={url}>{name}</a> -{position}
        </h4>
        <p className="daterange">
          {dayjs(startDate).format("MMMM YYYY")} -{" "}
          {endDate ? dayjs(endDate).format("MMMM YYYY") : "PRESENT"}
        </p>
      </header>
      {summary ? (
        <Markdown
          options={{
            overrides: {
              p: {
                props: {
                  className: "summary",
                },
              },
            },
          }}
        >
          {summary}
        </Markdown>
      ) : null}
      {highlights ? (
        <ul className="points">
          {highlights.map((high) => (
            <li key={high}>{high}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
};
Job.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    summary: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired,
};

export default Job;
