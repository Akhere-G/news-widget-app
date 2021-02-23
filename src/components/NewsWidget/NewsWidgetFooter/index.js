import React from "react";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

const NewsWidgetFooter = ({ showMoreStories }) => {
  return (
    <>
      <button className={styles.showMore} onClick={showMoreStories}>
        Show More
      </button>
    </>
  );
};

NewsWidgetFooter.propTypes = {
  showMoreStories: PropTypes.func.isRequired,
};
export default NewsWidgetFooter;
