import React from "react";
import Story from "../Story";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

const StoryList = ({ stories }) => {
  return (
    <ul className={styles.StoryList}>
      {stories.map(story => {
        return (
          <li key={story.id}>
            <Story {...story} />
          </li>
        );
      })}
    </ul>
  );
};

StoryList.propTypes = {
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      source: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};
export default StoryList;
