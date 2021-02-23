import React from "react";
import NewsWidgetHeader from "./NewsWidgetHeader";
import NewsWidgetFooter from "./NewsWidgetFooter";
import StoryList from "./StoryList";
import Loading from "./Loading";
import styles from "./styles.module.css";
import useNewsWidget from "./useNewsWidget";

const NewsWidget = () => {
  const {
    sources,
    currentSource,
    setCurrentSource,
    filteredStories,
    showMoreStories,
    loading,
  } = useNewsWidget();

  return (
    <div className={styles.newsWidget}>
      <NewsWidgetHeader
        sources={sources}
        currentSource={currentSource}
        setCurrentSource={setCurrentSource}
      />

      {loading ? <Loading /> : <StoryList stories={filteredStories} />}
      <NewsWidgetFooter showMoreStories={showMoreStories} />
    </div>
  );
};

export default NewsWidget;
