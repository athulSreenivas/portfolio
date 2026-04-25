import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3>
          <a href={data.link}>{data.title}</a>
        </h3>
        <time className="published">
          {dayjs(data.date).format('MMMM, YYYY')}
        </time>
      </header>
      <a href={data.link} className="image">
        <img
          src={`${import.meta.env.VITE_PUBLIC_URL}${data.image}`}
          alt={data.title}
        />
      </a>
      <div className="description">
        <p>{data.desc}</p>
        {data.stack && data.stack.length > 0 && (
          <div className="project-stack">
            {data.stack.map((tag) => (
              <span key={tag} className="stack-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Cell;
