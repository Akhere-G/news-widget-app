import React from "react";
import NewsWidgetHeader from "./NewsWidgetHeader";
import NewsWidgetFooter from "./NewsWidgetFooter";
import StoryList from "./StoryList";

const stories = [
  { id: 1, title: "story title 1", date: "story date", source: "story source" },
  { id: 2, title: "story title 2", date: "story date", source: "story source" },
  { id: 3, title: "story title 3", date: "story date", source: "story source" },
  { id: 4, title: "story title 4", date: "story date", source: "story source" },
  { id: 5, title: "story title 5", date: "story date", source: "story source" },
];

const NewsWidget = () => {
  return (
    <div>
      <NewsWidgetHeader />
      <StoryList stories={stories} />
      <NewsWidgetFooter />
    </div>
  );
};

export default NewsWidget;
