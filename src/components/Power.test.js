import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Power from "./Power";

it("off button disabled", () => {
  render(<Power name="電源" />);
  const offButtonElement = screen.getByRole("button", { name: "OFF" });
  expect(offButtonElement).toBeDisabled();
});

it("chagen from off to on", () => {
  render(<Power name="電源" />);
  const onButtonElement = screen.getByRole("button", { name: "ON" });
  fireEvent.pointerDown(onButtonElement);
  fireEvent.click(onButtonElement);
  expect(onButtonElement).toBeDisabled();
});
