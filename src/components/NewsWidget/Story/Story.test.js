import { render, screen } from "@testing-library/react";
import Story from "./index.js";

beforeEach(() => {
  const storyProps = {
    title: "title text",
    date: "date text",
    source: "source text",
    url: "url text",
  };

  render(<Story {...storyProps} />);
});

test("render story", () => {
  const h4Element = screen.getByText("title text");
  const dateSpan = screen.getByText("date text");
  const sourceSpan = screen.getByText("source text");
  expect(h4Element).toBeInTheDocument();
  expect(dateSpan).toBeInTheDocument();
  expect(sourceSpan).toBeInTheDocument();
});

test("should have correct url link in title", () => {
  const urlLink = screen.getByText("title text").closest("a");
  expect(urlLink).toHaveAttribute("href", "url text");
});
