import React from "react";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

const Story = ({ title, date, source, url }) => {
  return (
    <div className={styles.story}>
      <h4>
        <a className={styles.title} href={url} target='_blank' rel='noreferrer'>
          {title}
        </a>
      </h4>
      <p>
        <span>{date}</span>
        <span className={styles.source}> {source} </span>
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
