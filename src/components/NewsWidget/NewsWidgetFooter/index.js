import React from "react";
import PropTypes from "prop-types";

const NewsWidgetFooter = ({ showMoreStories }) => {
  return (
    <>
      <button onClick={showMoreStories}>Show More</button>
    </>
  );
};

NewsWidgetFooter.propTypes = {
  showMoreStories: PropTypes.func.isRequired,
};
export default NewsWidgetFooter;
