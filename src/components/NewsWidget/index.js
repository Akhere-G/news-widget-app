import React from "react";
import NewsWidgetHeader from "./NewsWidgetHeader";
import NewsWidgetFooter from "./NewsWidgetFooter";
import StoryList from "./StoryList";
import useNewsWidget from "./useNewsWidget";

const NewsWidget = () => {
  const {
    sources,
    currentSource,
    setCurrentSource,
    filteredStories,
    showMoreStories,
  } = useNewsWidget();

  return (
    <div>
      <NewsWidgetHeader
        sources={sources}
        currentSource={currentSource}
        setCurrentSource={setCurrentSource}
      />

      <StoryList stories={filteredStories} />
      <NewsWidgetFooter showMoreStories={showMoreStories} />
    </div>
  );
};

export default NewsWidget;
