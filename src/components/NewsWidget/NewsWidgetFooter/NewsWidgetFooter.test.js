import { screen, render } from "@testing-library/react";
import NewsWidgetFooter from "./";

beforeEach(() => {
  const footerProps = { showMoreStories: () => {} };
  render(<NewsWidgetFooter {...footerProps} />);
});

test("renders button", () => {
  const buttonText = screen.getByText("Show More");
  expect(buttonText).toBeInTheDocument();
});
