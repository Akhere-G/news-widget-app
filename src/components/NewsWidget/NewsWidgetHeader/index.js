import React from "react";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

const NewsWidgetHeader = ({ sources, currentSource, setCurrentSource }) => {
  return (
    <div className={styles.header}>
      <h4 className={styles.title}>News</h4>
      <select
        value={currentSource}
        className={styles.sourcesSelect}
        onChange={e => {
          setCurrentSource(e.target.value);
        }}
      >
        {sources.map(source => {
          return (
            <option key={source} value={source}>
              {source}
            </option>
          );
        })}
      </select>
    </div>
  );
};

NewsWidgetHeader.propTypes = {
  sources: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentSource: PropTypes.string.isRequired,
  setCurrentSource: PropTypes.func.isRequired,
};
export default NewsWidgetHeader;
