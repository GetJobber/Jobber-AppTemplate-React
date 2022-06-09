import { render, screen } from "utils/tests";
import Home from "./Home";

test("Home page shows greeting message", () => {
  render(<Home />);
  expect(screen.getByText(/CONGRATS ON BUILDING A JOBBER APP/i)).toBeVisible();
});
