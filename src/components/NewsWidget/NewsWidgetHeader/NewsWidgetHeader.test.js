import { screen, render } from "@testing-library/react";
import NewsWidgetheader from "./";

beforeEach(() => {
  const headerProps = {
    sources: ["a", "b", "c"],
    currentSource: "a",
    setCurrentSource: () => {},
  };
  render(<NewsWidgetheader {...headerProps} />);
});

test("renders successfully", () => {
  const titleElement = screen.getByText("News");
  const option1Element = screen.getByText("a");
  const option2Element = screen.getByText("b");
  const option3Element = screen.getByText("c");

  expect(titleElement).toBeInTheDocument();
  expect(option1Element).toBeInTheDocument();
  expect(option2Element).toBeInTheDocument();
  expect(option3Element).toBeInTheDocument();
});
