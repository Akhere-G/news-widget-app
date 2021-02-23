import React from "react";
import Story from "../Story";

const StoryList = ({ stories }) => {
  return (
    <ul>
      {stories.map(story => {
        return (
          <li>
            <Story key={story.id} {...story} />
          </li>
        );
      })}
    </ul>
  );
};

export default StoryList;
