import React from "react";
import PropTypes from "prop-types";

const Story = ({ title, date, source, url }) => {
  return (
    <div>
      <h4>
        <a href={url} target='_blank' rel='noreferrer'>
          {title}
        </a>
      </h4>
      <p>
        <span>{date}</span>
        <span> {source} </span>
      </p>
    </div>
  );
};

Story.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default Story;
