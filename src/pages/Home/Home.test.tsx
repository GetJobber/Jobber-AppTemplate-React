import { render, screen } from "@testing-library/react";
import Home from "./Home";

test.skip("Home page shows greeting message", () => {
  render(<Home />);
  expect(screen.getByText(/CONGRATS ON BUILDING A JOBBER APP/i)).toBeVisible();
});
