import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders Hello", () => {
  render(<App />);
  const elements = screen.getAllByText("Hello");
  screen.debug(elements);
  expect(elements).toHaveLength(2);
});
