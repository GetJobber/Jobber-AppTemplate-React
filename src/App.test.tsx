import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders greeting for building the app", () => {
  render(<App />);
  const linkElement = screen.getByText(/Congrats on building a Jobber app/i);
  expect(linkElement).toBeInTheDocument();
});
