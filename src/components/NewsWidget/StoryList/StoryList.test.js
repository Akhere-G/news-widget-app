import { render, screen } from "@testing-library/react";
import StoryList from "./index.js";

beforeEach(() => {
  const listProps = [
    {
      id: 1,
      title: "title text 1",
      date: "date text 1",
      source: "source text 1",
      url: "url text 1",
    },
    {
      id: 2,
      title: "title text 2",
      date: "date text 2",
      source: "source text 2",
      url: "url text 2",
    },
  ];
  render(<StoryList stories={listProps} />);
});

test("story list renders", () => {
  const listElement = screen.getAllByRole("listitem");
  expect(listElement).toHaveLength(2);
});
