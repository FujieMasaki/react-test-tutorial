import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders lists", () => {
  render(<App />);
  const listElements = screen.getAllByRole("listitem");
  screen.debug(listElements);
  expect(listElements).toHaveLength(3);
});
