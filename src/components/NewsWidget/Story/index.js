import React from "react";

const Story = ({ id, title, date, source }) => {
  return (
    <div>
      <h4>{title}</h4>
      <p>
        {date} {source}
      </p>
    </div>
  );
};

export default Story;
